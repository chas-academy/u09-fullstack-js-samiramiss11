import React, { useState, useContext } from 'react';
import { useNavigate }   from 'react-router-dom';
import { FaBookmark  }       from 'react-icons/fa';
import AuthContext       from '../context/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CoreConcepts = () => {
  const navigate = useNavigate();
  const { user, addSavedContent } = useContext(AuthContext);
  const [flash, setFlash] = useState('');
  const handleSavePage = () => {
    if (!user) {
      return navigate('/login', { replace: true })
    }
    addSavedContent({
      type:   'Page',
      itemId: 'Therapy?',
      title:  'Do I Need Therapy?',
      link:   '/core-concepts',
    });
    setFlash('Page saved!');
    setTimeout(() => setFlash(''), 2000);
  };


  return (
    <main className="min-h-screen box-border font-sans antialiased text-gray-700 bg-white">
      <Header />

      {/* Page Header */}
      <section
  className="relative min-h-[35vh] sm:min-h-[80vh] bg-center bg-cover mx-auto p-8"
  style={{ backgroundImage: "url('/images/whenTherapy.jpg')" }}
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
        Do I Need Therapy?
      </h1>
      <p className="text-lg text-white text-center sm:text-left">
      Life’s challenges aren’t meant to be faced alone. Learn two simple questions that can help you decide when professional support could make the difference.      </p>
    </div>

    {/* Right column: you could leave empty, or show an illustrative image or even in-page nav */}
    {/* for now we'll just keep it blank to balance the layout */}
    <div className="hidden sm:block sm:w-2/6" />
  </div>
</section>                      {/* Flash message */}
      {flash && (
        <div className="fixed bottom-8 right-8 bg-primary text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in-out z-50">
          {flash}
        </div>)}
<button onClick={handleSavePage}   title="Bookmark this page"
  aria-label="Bookmark this page"
          className="ml-6 right-4 top-4 text-4xl text-primary hover:text-primary-dark" >
          <FaBookmark />
        </button>
      {/* Therapy Guidance Section */}
      <section className="max-w-6xl mx-auto bg-accent p-8 md:p-12 mb-8 rounded-lg shadow-sm mt-2">

        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-4">
          How Do I Know if I Need Therapy?
        </h2>
        <div className="space-y-4 text-gray-600 text-justify">
          <p>
            Most of us face struggles at some point in our lives—stress at work, difficulty in our relationships, or
            recurring emotional symptoms like anxiety or depression. Sometimes talking with a friend or practicing
            self-care helps. But when those steps do not resolve the issue, it may be time to consider professional help.
          </p>
          <p>
            Two key questions can guide you:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Is it distressing?</strong>  
              Do you spend significant time each week thinking about the problem? Has it lowered your quality of life?
            </li>
            <li>
              <strong>Is it interfering?</strong>  
              Does it take up more than an hour a day? Have you cut back on work, school, or social activities because of it?
            </li>
          </ul>
          <p>
            If you answered “yes” to any of these, talking with a licensed psychologist can be a powerful first step.
            Advances in short-term, evidence-based therapies mean you don’t have to struggle alone—and many people find
            relief in just a few sessions.
          </p>
          <p className="text-sm text-gray-500">
            Source: APA Div. 12 (Society of Clinical Psychology)
          </p>
        </div>
      </section>

      {/* Concepts List */}
      <div className="max-w-6xl mx-auto space-y-8 px-4 sm:px-6 lg:px-0 mb-14">
      <div className="space-y-4 text-gray-600 text-justify p-4">
      <h1 className="text-2xl  font-bold text-black text-center sm:text-left">
      Foundations of Mental Well-being
      </h1>
          <p>
          Understanding the building blocks of psychological health is the first step toward lasting resilience. Below, we explore four essential concepts—Stress, Anxiety, Depression, and Mindfulness—that shape our emotional landscape. By learning what each is, how it affects us, and strategies to manage it, you’ll be better equipped to navigate life’s challenges and foster a balanced mind.</p></div> {/* Stress */}
        <section className="bg-background rounded-lg p-8 md:p-12 hover:shadow-lg transition-shadow">
          <h2 className="mb-2 text-2xl font-semibold text-gray-800">Stress</h2>
          <p className="text-justify text-gray-600">
            Stress is the body’s response to challenges or demands. It can be short-term or chronic and affects both mental and physical health. Understanding stress helps us develop better coping mechanisms and improve overall well-being.
          </p>
        </section>

        {/* Anxiety */}
        <section className="bg-accent rounded-lg p-8 md:p-12 hover:shadow-lg transition-shadow">
          <h2 className="mb-2 text-2xl font-semibold text-gray-800">Anxiety</h2>
          <p className="text-justify text-gray-600">
            Anxiety is a feeling of worry or fear that ranges from mild to severe. Often triggered by stress or uncertainty, it can impact daily functioning. Learning to manage anxiety through relaxation techniques and evidence-based therapy can significantly enhance mental health.
          </p>
        </section>

        {/* Depression */}
        <section className="bg-secondary rounded-lg p-8 md:p-12 hover:shadow-lg transition-shadow">
          <h2 className="mb-2 text-2xl font-semibold text-gray-800">Depression</h2>
          <p className="text-justify text-gray-600">
            Depression is a common mood disorder characterized by persistent sadness, loss of interest, and fatigue. It can affect thoughts, behavior, and physical health. Effective treatment often combines psychotherapy, medication, and lifestyle adjustments.
          </p>
        </section>

        {/* Mindfulness */}
        <section className="bg-accentlight rounded-lg p-8 md:p-12 hover:shadow-lg transition-shadow">
          <h2 className="mb-2 text-2xl font-semibold text-gray-800">Mindfulness</h2>
          <p className="text-justify text-gray-600">
            Mindfulness is the practice of being fully present in the moment without judgment. It cultivates relaxation, reduces stress, and enhances concentration. Regular techniques such as guided meditation and mindful breathing support emotional resilience and focus.
          </p>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default CoreConcepts;
