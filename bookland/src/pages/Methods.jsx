import React, {  useState, useContext } from 'react';
import { useNavigate }   from 'react-router-dom';
import { FaBookmark  }       from 'react-icons/fa';
import AuthContext       from '../context/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Methods = () => {
  const navigate = useNavigate();
  const { user, addSavedContent } = useContext(AuthContext);
  const [flash, setFlash] = useState('');
  const handleSavePage = () => {
    if (!user) {
      return navigate('/login', { replace: true })
    }
    addSavedContent({
      type:   'Page',
      itemId: 'methods',
      title:  'Research Methods',
      link:   '/methods',
    })
    ;
    // show flash
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
  {/* dark overlay + two-col flex */}
  <div
    className="
      absolute inset-0 bg-black/50 
      flex flex-col       /* mobile: stack */
      sm:flex-row         /* sm+: row */
      sm:items-center     /* vertically center on row */
      sm:space-x-12       /* gutter on row */
    "
  >
    {/* Left column: heading + text */}
    <div className="flex-1 space-y-4 p-6 sm:p-16 mt-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-white text-center sm:text-left">
      Research Methods
      </h1>
      <p className="text-lg text-white text-center sm:text-left">
      Learn about the key research designs used in psychology—from gold–standard experiments to in-depth case studies.</p>
    </div>

    {/* Right column: you could leave empty, or show an illustrative image or even in-page nav */}
    {/* for now we'll just keep it blank to balance the layout */}
    <div className="hidden sm:block sm:w-2/6" />
  </div>
</section>
      {/* Methods List */}
      <button onClick={handleSavePage}   title="Bookmark this page"
         aria-label="Bookmark this page"
                 className="ml-6 right-4 top-4 text-4xl text-primary hover:text-primary-dark" >
                 <FaBookmark />
               </button>
     {/* Flash message */}
      {flash && (
        <div className="fixed bottom-8 right-8 bg-primary text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in-out z-50">
          {flash}
        </div>)}       
      <div className="max-w-6xl mx-auto space-y-8 px-4 sm:px-6 lg:px-0 mb-14 mt-2">
        {/* Double-Blind Studies */}

                <section className="bg-background rounded-lg p-8 md:p-12 hover:shadow-lg transition-shadow">
          <h2 className="mb-2 text-2xl font-semibold text-gray-800">
            Double-Blind Studies
          </h2>
          <p className="text-justify text-gray-600">
            Double-blind studies are experiments where neither participants nor researchers know who receives the active treatment and who receives a placebo. By concealing group allocation, this design minimizes expectation and observer biases, ensuring that the findings reflect true effects rather than subtle influences from either side.
          </p>
        </section>

        {/* Surveys & Case Studies */}
        <section className="bg-accent rounded-lg p-8 md:p-12 hover:shadow-lg transition-shadow">
          <h2 className="mb-2 text-2xl font-semibold text-gray-800">
            Surveys & Case Studies
          </h2>
          <p className="text-justify text-gray-600">
            Surveys gather large-scale data via standardized questionnaires, allowing researchers to quantify attitudes, behaviors, and symptoms across diverse populations. Case studies, in contrast, offer deep, contextual insight into a single individual or small group, uncovering rich qualitative details that can inform theory and generate hypotheses for broader investigation.
          </p>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default Methods;
