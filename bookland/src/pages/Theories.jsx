import { useNavigate }   from 'react-router-dom';
import { FaBookmark  }       from 'react-icons/fa';
import AuthContext       from '../context/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React, { useContext, useState } from 'react';

const Theories = () => {
  const navigate = useNavigate();
  const { user, addSavedContent } = useContext(AuthContext);
  const [flash, setFlash] = useState('');

  const handleSavePage = () => {
    if (!user) {
      return navigate('/login', { replace: true })
    }
    addSavedContent({
      type:   'Page',
      itemId: 'theories',
      title:  'Famous Psychological Theories',
      link:   '/theories',
    });
        // show flash
        setFlash('Page saved!');
        setTimeout(() => setFlash(''), 2000);
      };

    return (
    <main className="min-h-screen font-sans antialiased bg-white text-gray-700">
      <Header />

      {/* Hero */}
      <section
  className="relative min-h-[70vh] sm:min-h-[70vh] bg-center bg-cover mx-auto"
  style={{ backgroundImage: "url('/images/5Psychologists.jpeg')" }}
>
  {/* dark overlay + flex layout */}
  <div
    className="
      absolute inset-0 bg-black/50 
      flex flex-col        /* mobile: stack */
      sm:flex-row          /* sm+: row */
      sm:items-start       /* align top on row */
      sm:space-x-12        /* gutter on row */
    "
  >      
    {/* Intro column */}
    <div className="flex-1 space-y-6 p-6 sm:p-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-white text-center sm:text-left">
        Famous Psychological Theories
      </h1>
      <p className="text-lg text-white text-justify">
        Psychology has been shaped by groundbreaking ideas that explain how we think,
        feel, and behave. Below we dive into three pillars of the field—Maslow’s
        Hierarchy of Needs, Skinner’s Operant Conditioning, and Pavlov’s Classical
        Conditioning—tracing their origins, core principles, and modern applications.
      </p>
    </div>

    {/* In-page nav */}
    <div className="hidden md:block group md:w-2/6 bg-white/60 md:bg-white/20 p-6 rounded-sm mt-8 md:m-16 text-black">
<h2 className="text-2xl font-bold mb-4">This Article Contains</h2>
      <ul className="space-y-3 font-semibold">
        <li>
          <a href="#maslow" className="hover:underline">Maslow’s Hierarchy</a>
        </li>
        <li>
          <a href="#operant" className="hover:underline">Operant Conditioning</a>
        </li>
        <li>
          <a href="#classical" className="hover:underline">Classical Conditioning</a>
        </li>
      </ul>
    </div>
  </div>
</section>


      {/* Theories List */}
      <button onClick={handleSavePage}   title="Bookmark this page"
  aria-label="Bookmark this page"
          className="ml-6 right-4 top-2 text-4xl text-primary hover:text-primary-dark" >
          <FaBookmark />
        </button><div className="max-w-6xl mx-auto space-y-12 px-4 sm:px-6 lg:px-0 mb-14 mt-2">
             {/* Flash message */}
      {flash && (
        <div className="fixed bottom-8 right-8 bg-primary text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in-out z-50">
          {flash}
        </div>
      )} {/* Maslow */}
        <section
          id="maslow"
          className="bg-background rounded-lg p-8 md:p-12 hover:shadow-lg transition-shadow"
        >
 <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Maslow’s Hierarchy of Needs
          </h2>
          <p className="text-justify text-gray-800 mb-4">
            First published in 1943 by Abraham H. Maslow in his paper “A Theory of Human Motivation,” this model organizes human needs into five levels:
            physiological, safety, love/belonging, esteem, and self-actualization. Maslow argued that lower-level needs (e.g., food, shelter) must be substantially satisfied before higher-order growth needs emerge.
          </p>
          <p className="text-justify text-gray-800 mb-4">
            Over the decades, researchers have applied Maslow’s framework to fields from organizational leadership—where employee engagement strategies map to each need level—to education, where classroom environments are designed to cover both safety and belonging before academic achievement is expected.
          </p>
          <p className="text-sm text-gray-500">
            <strong>References:</strong> Maslow (1943). A Theory of Human Motivation; Wahba & Bridwell (1976). “Maslow Reconsidered.” <em>Organizational Behavior and Human Performance</em>.
          </p>
        </section>

        {/* Operant Conditioning */}
        <section
          id="operant"
          className="bg-accent rounded-lg p-8 md:p-12 hover:shadow-lg transition-shadow"
        >
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Operant Conditioning
          </h2>
          <p className="text-justify text-gray-800 mb-4">
            B.F. Skinner formalized operant conditioning in the 1930s–40s, publishing key work such as <em>The Behavior of Organisms</em> (1938). Unlike classical conditioning, which pairs stimuli, operant conditioning focuses on how consequences shape voluntary behavior through reinforcement (positive or negative) and punishment.
          </p>
          <p className="text-justify text-gray-800 mb-4">
            Modern applications range from token economies in clinical settings—where desired behaviors earn reward points—to UX design, where app notifications reinforce user engagement. Skinner’s experiments with pigeons and rats remain classic demonstrations of schedules of reinforcement (fixed vs. variable, ratio vs. interval).
          </p>
          <p className="text-sm text-gray-500">
            <strong>References:</strong> Skinner (1938). <em>The Behavior of Organisms</em>; Ferster & Skinner (1957). <em>Schedules of Reinforcement</em>.
          </p>
        </section>

        {/* Classical Conditioning */}
        <section
          id="classical"
          className="bg-secondary rounded-lg p-8 md:p-12 hover:shadow-lg transition-shadow"
        >
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Classical Conditioning
          </h2>
          <p className="text-justify text-gray-800 mb-4">
            Ivan Pavlov’s Nobel-prize–winning research on digestion (circa 1904) led to his discovery of classical conditioning. In his landmark 1927 text, Pavlov described how neutral stimuli (e.g., a bell) paired repeatedly with an unconditioned stimulus (food) come to elicit the same response (salivation) as the unconditioned stimulus itself.
          </p>
          <p className="text-justify text-gray-800 mb-4">
            Beyond its veterinary origins, classical conditioning underpins therapies such as systematic desensitization for phobias, and informs advertising strategies that pair products with positive emotional cues.
          </p>
          <p className="text-sm text-gray-500">
            <strong>References:</strong> Pavlov (1927). <em>Conditioned Reflexes</em>; Watson & Rayner (1920). “Conditioned Emotional Reactions.” <em>Journal of Experimental Psychology</em>.
          </p>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default Theories;
