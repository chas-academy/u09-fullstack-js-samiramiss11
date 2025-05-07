import React, { useContext } from 'react';
import { useNavigate }   from 'react-router-dom';
import { FaBookmark  }       from 'react-icons/fa';
import AuthContext       from '../context/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const History = () => {
  const navigate = useNavigate();
  const { user, addSavedContent } = useContext(AuthContext);

  const handleSavePage = () => {
    if (!user) {
      return navigate('/login', { replace: true })
    }
    addSavedContent({
      type:   'Page',
      itemId: 'history',
      title:  'History of Psychology',
      link:   '/history',
    })
  }
   return (
        <main className="min-h-screen font-sans antialiased bg-white text-gray-700">
            <Header />
            
    {/* Page Header */}
    <section className="relative min-h-[80vh] sm:min-h-[80vh] bg-center bg-cover mx-auto"
  style={{ backgroundImage: "url('/images/BT.jpg')" }}
>
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
      <h1 className="text-3xl sm:text-4xl font-bold text-white text-center sm:text-left sm:pt-8">
        The Fascinating History of Psychology
      </h1>
      <p className="text-lg text-white text-justify">
        Journey of Psychology, from the earliest philosophical inquiries to today’s cutting-edge research.  
        You can explore Roots of Psychology, Psychology as a Science,  
        The Rise of Different Perspectives, and Psychology in the Modern World—each unpacking the thinkers,  
        experiments, and breakthroughs that shaped our understanding of mind and behavior. </p>
    </div>

    {/* In‐page nav */}
    <div
className="group w-full sm:w-2/6 bg-white/60 md:bg-white/20 p-6 rounded-sm mt-8 md:m-16 text-black"    >
      <h2 className="text-2xl font-bold md:mt-6 mb-4">
        This Article Contains
      </h2>
      <ul className="space-y-3 md:text-gray-900 font-semibold">
        <li><a href="#roots" className="hover:underline">The Roots of Psychology</a></li>
        <li><a href="#science" className="hover:underline">Psychology as a Science</a></li>
        <li><a href="#perspectives" className="hover:underline">The Rise of Different Perspectives</a></li>
        <li><a href="#modern" className="hover:underline">Psychology in the Modern World</a></li>
      </ul>
    </div>
  </div>
</section>

      <button onClick={handleSavePage}   title="Bookmark this page"
         aria-label="Bookmark this page"
                 className="ml-6 right-4 top-4 text-4xl text-primary hover:text-primary-dark" >
                 <FaBookmark />
               </button>

    {/* Content Section */}
    <div className="max-w-6xl mx-auto space-y-8 px-4 sm:px-6 lg:px-0 mb-14">
               
    {/* Ancient Roots */}
    <section id="roots" className="bg-background rounded-lg p-8 md:p-12 hover:shadow-lg transition-shadow">
        <h2 className="text-2xl font-semibold text-gray-800">The Roots of Psychology</h2>
           <p className="text-justify text-gray-800 mt-2 mb-2">
                        From ancient philosophers to modern-day scientists, psychology has a rich history that’s shaped how we understand the human mind today.
                        Long before psychology became a formal field, ancient philosophers like Aristotle and Plato were asking big questions about the mind. 
                            How do we think? Why do we feel emotions? These early thinkers laid the foundation for exploring human behavior and mental processes.
           </p>
            <p className="text-justify text-gray-800">
      During the Renaissance and Enlightenment (15th–18th centuries), figures such as René Descartes (1649) introduced mind–body dualism and introspection, while John Locke (1690) proposed empiricism—the idea that knowledge derives from sensory experience. Later, in the 19th century, physiologists like Gustav Fechner and Hermann von Helmholtz pioneered experimental methods to measure sensation and reaction time, directly influencing the emergence of psychology as a distinct discipline.
    </p>
    <p className="text-sm text-gray-500 mt-4">
  <strong>References:</strong>  
  Aristotle (c. 350 BCE), <em>De Anima</em>;  
  Plato (c. 380 BCE), <em>Republic</em>;  
  Descartes (1649), <em>Meditations on First Philosophy</em>;  
  Locke (1690), <em>An Essay Concerning Human Understanding</em>;  
  Fechner (1860), <em>Elements of Psychophysics</em>;  
  Helmholtz (1853), “On the Sensations of Tone.”
</p>
    </section>

    {/* Psychology Becomes a Science */}
    <section id="science" className="bg-accent rounded-lg p-8 md:p-12 hover:shadow-lg transition-shadow">
            <h2 className="text-justify text-2xl font-semibold text-gray-800">Psychology as a Science</h2>
             <p className="text-justify text-gray-800 mt-2 mb-2">
                            The birth of modern psychology began in the late 1800s when Wilhelm Wundt opened the first laboratory dedicated to psychological research. 
                            This moment marked a shift from philosophical speculation to scientific experimentation. Psychologists began studying how people perceive, think, and act in measurable ways.
            </p>
            <p className="text-justify text-gray-800">
      In the early 20th century, Edward Titchener (a Wundt student) established structuralism in the U.S., attempting to identify the basic “elements” of consciousness. Meanwhile, William James’s functionalism (1890), championed in <em>The Principles of Psychology</em>, focused on how mental processes help organisms adapt to their environment. By the 1920s, behaviorism—led by John B. Watson and later B. F. Skinner—rejected introspection entirely in favor of observable stimulus–response relationships. These diverse schools of thought set the stage for the cognitive revolution of the 1950s and ’60s, which reintroduced the mind as a subject of scientific study through information-processing models and laid the foundation for modern neuroscience and cognitive psychology.
    </p>
    <p className="text-sm text-gray-500 mt-4">
  <strong>References:</strong>  
  Wundt (1879), founding of the Leipzig lab;  
  James (1890), <em>The Principles of Psychology</em>;  
  Titchener (1898), establishment of structuralism;  
  Watson (1913), “Psychology as the Behaviorist Views It”;  
  Skinner (1938), <em>The Behavior of Organisms</em>.
</p>      
    </section>

    {/* Major Schools of Thought */}
    <section id="perspectives" className="bg-accentlight rounded-lg p-8 md:p-12 hover:shadow-lg transition-shadow">
                        <h2 className="text-2xl font-semibold text-gray-800">The Rise of Different Perspectives</h2>
                        <p className="text-justify text-gray-800 mt-2">
                            Over time, different schools of thought emerged, each offering unique ways to understand the mind:
                        </p>
                        <ul className="list-disc ml-6 text-gray-800">
                            <li>
                                <strong>Psychoanalysis:</strong> Sigmund Freud&apos;s theory focused on the unconscious mind and its influence on behavior.
                            </li>
                            <li>
                                <strong>Behaviorism:</strong> This school, led by figures like B.F. Skinner, studied observable behaviors and how they’re shaped by the environment.
                            </li>
                            <li>
                                <strong>Humanism:</strong> Thinkers like Carl Rogers emphasized personal growth, free will, and the human capacity for self-improvement.
                            </li>
                            <li>
                                <strong>Cognitive Psychology:</strong> This approach examines how we think, learn, and remember—shaping much of modern psychology.
                            </li>
                        </ul>
                        <p className="text-sm text-gray-500 mt-4">
  <strong>References:</strong>  
  Freud (1900), <em>The Interpretation of Dreams</em>;  
  Skinner (1938), <em>The Behavior of Organisms</em>;  
  Rogers (1951), <em>Client-Centered Therapy</em>;  
  Neisser (1967), <em>Cognitive Psychology</em>.
</p>
    </section>

    {/* Psychology Today */}
    <section id="modern" className="bg-secondary rounded-lg p-8 md:p-12 hover:shadow-lg transition-shadow">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Psychology in the Modern World</h2>
  <p className="text-justify text-gray-800">
    Today, psychology is everywhere—from schools and workplaces to therapy sessions and research labs. It helps us understand mental health, improve learning methods, and even design technology that better meets human needs. With countless fields like neuropsychology, developmental psychology, and social psychology, there’s always more to explore!
  </p>
  <p className="text-justify text-gray-800 mt-4">
    Psychology isn’t just for scientists or therapists—it’s for everyone. Whether you want to improve your relationships, understand yourself better, or simply satisfy your curiosity about how the mind works, psychology offers something valuable for you. So, why not dive in? Explore the history, discover groundbreaking studies, and see how psychology continues to shape our world.
  </p>
  <p className="text-sm text-gray-500 mt-4">
  <strong>References:</strong>  
  Miller (1956), “The Magical Number Seven, Plus or Minus Two”;  
  Kahneman & Tversky (1974), “Judgment under Uncertainty”;  
  Gazzaniga (2014), <em>The Cognitive Neurosciences</em>.
</p>
    </section>

    </div>
            
        <Footer />
    </main>
    );
};

export default History;
