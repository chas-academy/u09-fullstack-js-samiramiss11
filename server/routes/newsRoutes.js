
const express = require('express');
const axios = require('axios');

const router = express.Router();

const NEWS_BASE = 'https://newsapi.org/v2';
const API_KEY = process.env.NEWS_API_KEY;

// Psychology-related keywords to match in title or description
const PSYCH_KEYWORDS = [
  'psychology', 'mind', 'brain', 'behavior', 'behaviour',
  'cognitive', 'mental', 'therapy', 'neuro', 'emotion',
];

router.get('/', async (req, res) => {
  try {
    // 1) fetch a broad set of recent science / health headlines
    const { data } = await axios.get(`${NEWS_BASE}/everything`, {
      params: {
        q: PSYCH_KEYWORDS.join(' OR '),
        language: 'en',
        sortBy: 'publishedAt',
        pageSize: 80,
        apiKey: API_KEY,
      },
    });
    // 2) Build cutoff date (14 days ago)
    const twoWeeksAgo = Date.now() - 1000 * 60 * 60 * 24 * 21;
    // 3) Filter for keywords *and* freshness
    const filtered = (data.articles || []).filter((article) => {
      const txt = `${article.title || ''} ${article.description || ''}`.toLowerCase();

      // must contain one of our keywords
      const hasKeyword = PSYCH_KEYWORDS.some((kw) => txt.includes(kw));
      if (!hasKeyword) return false;

      // must be published within the last 14 days
      const publishedAt = new Date(article.publishedAt).getTime();
      return !isNaN(publishedAt) && publishedAt >= twoWeeksAgo;
    });

    console.log(`🔔 fetched ${data.articles.length}, kept ${filtered.length}`);

    // 3) limit to first 18
    res.json(filtered.slice(0, 30));
  } catch (err) {
    // no optional chaining
    const errBody = err.response && err.response.data;
    console.error('NewsAPI error:', errBody || err.message);
    res.status(502).json({ message: 'Bad Gateway: failed to fetch news' });
  }
});

module.exports = router;
