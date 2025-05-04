// src/pages/Quiz.jsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

const Quiz = () => {
  const { quizId } = useParams();
  const [questions, setQuestions]     = useState([]);
  const [analysisMap, setAnalysisMap] = useState({});
  const [current, setCurrent]         = useState(0);
  const [score, setScore]             = useState(0);
  const [finished, setFinished]       = useState(false);

  useEffect(() => {
    fetch(`/quizzes/${quizId}.json`)
      .then(r => r.json())
      .then(data => {
        // last element is the analysis object
        const last = data[data.length - 1];
        setAnalysisMap(last.analysis || {});
        // everything else are questions
        setQuestions(data.slice(0, data.length - 1));
      })
      .catch(console.error);
  }, [quizId]);

  const handleAnswer = (idx) => {
    if (idx === questions[current].correctIndex) {
      setScore(s => s + 1);
    }
    if (current + 1 === questions.length) {
      setFinished(true);
    } else {
      setCurrent(c => c + 1);
    }
  };

  // still loading questions JSON
  if (!questions.length && !finished) return <p>Loading…</p>;

  // show final score + analysis
  if (finished) {
    // get numeric thresholds sorted
    const thresholds = Object.keys(analysisMap)
      .map(k => parseInt(k, 10))
      .filter(n => !isNaN(n))
      .sort((a, b) => a - b);

    // pick highest threshold <= score
    let chosen = thresholds[0] ?? 0;
    thresholds.forEach(t => {
      if (score >= t) chosen = t;
    });

    const message = analysisMap[chosen] || '';

    return (
      <div className="min-h-screen flex flex-col">
      <Header />
  
      {/* only this inner div is centered */}
      <div className="flex-grow flex items-center justify-center p-8">
        <div className="bg-blue-100 p-6 rounded shadow-md max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">
            You scored {score} / {questions.length}
          </h2>
          <p className="text-gray-700 mb-6">{message}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Try Again
          </button>
        </div>
        
      </div>
      <Footer /></div>
    );
  }

  // render current question
  const q = questions[current];
return (
  <div className="min-h-screen flex flex-col">
    <Header />

    {/* only this inner div is centered */}
    <div className="flex-grow flex items-center justify-center p-8">
      <div className="bg-blue-100 p-6 rounded shadow-md max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">{q.question}</h2>
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(i)}
            className="block bg-white w-full text-left px-4 py-2 mb-2 border rounded hover:bg-gray-100"
          >
            {opt}
          </button>
        ))}
      </div></div>
      <Footer />
    </div>
  );
};

export default Quiz;
