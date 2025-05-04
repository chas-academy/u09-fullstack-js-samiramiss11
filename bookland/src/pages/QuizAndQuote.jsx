// src/pages/QuizAndQuote.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  FaHeartbeat,
  FaSpa,
  FaBrain,
  FaThermometerHalf,
  FaUser,
  FaBalanceScale,
  FaLightbulb,
  FaQuoteRight,
} from 'react-icons/fa';

const quizzes = [
  { id: 'anxiety',       title: 'Anxiety Quiz',      link: '/quiz/anxiety',       icon: <FaHeartbeat className="text-3xl text-red-400" /> },
  { id: 'mindfulness',   title: 'Mindfulness Quiz',  link: '/quiz/mindfulness',   icon: <FaSpa className="text-3xl text-green-400" /> },
  { id: 'memory',        title: 'Memory Challenge',  link: '/quiz/memory',        icon: <FaBrain className="text-3xl text-blue-400" /> },
  { id: 'stress',        title: 'Stress Test',       link: '/quiz/stress',        icon: <FaThermometerHalf className="text-3xl text-yellow-500" /> },
  { id: 'personality',   title: 'Personality Quiz',  link: '/quiz/personality',   icon: <FaUser className="text-3xl text-purple-400" /> },
  { id: 'cognitive-bias',title: 'Cognitive Bias',    link: '/quiz/cognitive-bias',icon: <FaBalanceScale className="text-3xl text-indigo-400" /> },
];

const facts = [
"In the 1950s, the cognitive revolution in psychology shifted focus back to the mind after decades of behaviorism.",
  "Maslow first published his hierarchy of needs in his 1943 paper, 'A Theory of Human Motivation.'",
  "The Stanford prison experiment (1971) showed the power of situational forces on behavior.",
  "Stanley Milgram’s obedience experiments (1961) revealed that over 60% of participants would administer what they believed were painful electric shocks to others when instructed.",
  "Ivan Pavlov’s 1890s work on classical conditioning demonstrated that dogs could learn to salivate at the sound of a bell.",
  "The Stroop effect (1935) shows how automatic processing (reading a word) can interfere with controlled processing (naming the font color).",
  "The ‘bystander effect’—first documented in 1968—describes how individuals are less likely to help a victim when other people are present.",
  "Placebo effects can produce real physiological changes: sugar pills have been shown to reduce pain, boost immune function, and even lower blood pressure.",
  "Elizabeth Loftus’s memory research in the 1970s–80s revealed how easily eyewitness memories can be distorted by leading questions.",
  "Albert Bandura’s Bobo doll experiments (1961) established that children learn and imitate behaviors simply by observing adults."
];

const QuizAndQuote = () => {
  const [quote, setQuote] = useState('');
  const [fact,  setFact]  = useState('');

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
        .then(r => {
          if (!r.ok) throw new Error('Advice API error');
          return r.json();
        })
        .then(data => setQuote(data.slip.advice))
        .catch(() =>
          setQuote('“The curious paradox is that when I accept myself just as I am, then I can change.” – Carl Rogers')
        );
       setFact(facts[Math.floor(Math.random() * facts.length)]);
     }, []);

  return (
    <main className="box-border font-sans antialiased text-gray-700 bg-bg">
      <Header />

      <div className="sm:mx-14 mx-6 px-4 lg:px-0 py-8 space-y-14">

        {/* --- Quiz Section --- */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mt-8 text-center">
            Brain Quizzes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
  {quizzes.map(q => (
    <Link
      key={q.id}
      to={q.link}
      className="group flex flex-col items-center p-6 bg-accent border border-primary rounded-lg shadow-sm
                 hover:bg-secondary hover:shadow-lg hover:border-white transition-shadow"
    >
      {q.icon}
      <h3 className="mt-2 text-xl font-semibold text-gray-800 group-hover:text-white transition-colors">
        {q.title}
      </h3>
    </Link>
  ))}
</div>
        </section>
        {/* --- At-Home Cognitive Exercises --- */}
        <section className="bg-white rounded-lg p-8 md:p-12 hover:shadow-lg transition-shadow">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            DIY Mind & Behavior Exercises
          </h2>
          
            {/* Grounding Exercise */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Grounding “Drop Anchor”</h3>
              <p className="text-gray-600 mb-2">
                This quick mindfulness move can help you feel more centered and present in any moment:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-gray-600">
                <li>Close your eyes and take 3 slow, deep breaths.</li>
                <li>Press your feet into the floor and notice the support beneath you.</li>
                <li>Scan your legs, feeling any tension release as you exhale.</li>
                <li>Open your eyes and observe your surroundings—sight, sound, touch.</li>
              </ol>
            <br></br>

            {/* Morning Mindfulness */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Morning Mindfulness</h3>
              <p className="text-gray-600 mb-2">
                Turn an everyday task into a mindfulness habit—do this daily for best results:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Choose a routine activity (e.g., brushing teeth, making coffee).</li>
                <li>Notice every detail: sights, sounds, textures, even smells.</li>
                <li>When your mind wanders, gently guide it back to the present moment.</li>
              </ul>
            <br></br>

            {/* Creative Drawing */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Expressive Drawing</h3>
              <p className="text-gray-600 mb-2">
                Use art to explore emotions and relationships—even if you’re no “artist”:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Pick someone important to you and imagine them in a familiar setting.</li>
                <li>Sketch them engaging in that activity (breakfast, walk, etc.).</li>
                <li>Then draw yourself sending them positive thoughts or kindness.</li>
                <li>Reflect on how the act of drawing shifts your mood or perspective.</li>
              </ul>
            
          </div>
        </section>

        {/* --- Quote & Fact Section --- */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Mind-Benders & Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <FaQuoteRight className="text-2xl text-primary mr-2" />
                <h3 className="text-xl font-semibold">Quote of the Day</h3>
              </div>
              <p className="text-gray-600 italic">“{quote}”</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <FaLightbulb className="text-2xl text-secondary mr-2" />
                <h3 className="text-xl font-semibold">Psychology Fact</h3>
              </div>
              <p className="text-gray-600">{fact}</p>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
};

export default QuizAndQuote;
