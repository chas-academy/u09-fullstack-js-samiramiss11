import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBookmark } from 'react-icons/fa';
import AuthContext from '../context/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Methods = () => {
  const navigate = useNavigate();
  const { user, addSavedContent } = useContext(AuthContext);
  const [flash, setFlash] = useState('');
  const handleSavePage = () => {
    if (!user) {
      return navigate('/login', { replace: true });
    }
    addSavedContent({
      type:   'Page',
      itemId: 'methods',
      title:  'Research Methods',
      link:   '/methods',
    });
    setFlash('Page saved!');
    setTimeout(() => setFlash(''), 2000);
  };

  return (
    <main className="min-h-screen font-sans antialiased bg-white text-gray-700">
      <Header />

      {/* Hero */}
      <section
        className="relative min-h-[35vh] sm:min-h-[80vh] bg-center bg-cover mx-auto p-8"
        style={{ backgroundImage: "url('/images/methods.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col sm:flex-row sm:items-center sm:space-x-12">
          <div className="flex-1 space-y-4 p-6 sm:p-16 mt-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white text-center sm:text-left">
              Research Methods
            </h1>
            <p className="text-lg text-white text-center sm:text-left">
              Learn about the key research designs used in psychology—from gold–standard experiments to in-depth case studies. Psychology relies on a variety of approaches to balance control, generalizability, depth, and ecological validity.
            </p>
          </div>
          <div className="hidden sm:block sm:w-2/6" />
        </div>
      </section>

      {/* Bookmark */}
      <button
        onClick={handleSavePage}
        title="Bookmark this page"
        aria-label="Bookmark this page"
        className="ml-6 right-4 top-4 text-4xl text-primary hover:text-primary-dark"
      >
        <FaBookmark />
      </button>

      {/* Flash */}
      {flash && (
        <div className="fixed bottom-8 right-8 bg-primary text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in-out z-50">
          {flash}
        </div>
      )}

      {/* Methods List */}
      <div className="max-w-6xl mx-auto space-y-8 px-4 sm:px-6 lg:px-0 mb-14 mt-2">
        {/* Double-Blind Studies */}
        <section className="bg-background rounded-lg p-8 md:p-12 hover:shadow-lg transition-shadow">
          <h2 className="mb-2 text-2xl font-semibold text-gray-800">
            Double-Blind Studies
          </h2>
          <p className="text-justify text-gray-600 mt-2">
            Double-blind studies are experiments where neither participants nor researchers know who receives the active treatment versus a placebo. By concealing allocation until after data collection, this design neutralizes expectation effects—participants behaving as they think they “should”—and observer bias—researchers unconsciously recording data to fit hypotheses.
          </p>
          <p className="text-justify text-gray-600 mt-4">
            Commonly used in clinical trials (e.g. testing new medications), double-blind protocols ensure that outcome differences reflect the intervention’s true efficacy rather than subtle cues or wishful thinking from either side. They’re considered the gold standard for establishing causal relationships in treatment research.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            <strong>References:</strong><br/>
            Beecher (1955), “The Powerful Placebo”;<br/>
            Schulz & Grimes (2002), “Generation of Allocation Sequences in Randomised Trials”
          </p>
        </section>

        {/* Surveys & Case Studies */}
        <section className="bg-accent rounded-lg p-8 md:p-12 hover:shadow-lg transition-shadow">
          <h2 className="mb-2 text-2xl font-semibold text-gray-800">
            Surveys & Case Studies
          </h2>
          <p className="text-justify text-gray-600 mt-2">
            Surveys employ standardized questionnaires or structured interviews to collect data from large, often representative samples. By asking the same questions of hundreds or thousands of respondents, researchers can quantify attitudes, beliefs, and self-reported behaviors, then apply statistical techniques—like factor analysis or regression—to uncover patterns and predictors.
          </p>
          <p className="text-justify text-gray-600 mt-4">
            Case studies involve intensive, in-depth examination of a single individual, family, or small group—frequently in contexts where a rare condition or unique phenomenon arises. Through interviews, observations, archival records, and testing, case studies generate rich qualitative (and sometimes quantitative) data, making them invaluable for hypothesis generation, theory refinement, and teaching.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            <strong>References:</strong><br/>
            Likert (1932), “A Technique for the Measurement of Attitudes”;<br/>
            Yin (2014), <em>Case Study Research: Design and Methods</em>
          </p>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default Methods;
