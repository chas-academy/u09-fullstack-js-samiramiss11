import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <main className="box-border font-sans antialiased text-gray-700 bg-white">
      <Header />
      <div className="mx-auto px-4 lg:px-0 py-8  md:mx-12">
        {/* Page Header */}
        <div className="text-center mb-8 ">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        </div>

        {/* Content Section */}
        <section className="space-y-6 md:m-12 ">
          <div className="p-4 border border-gray-300 rounded-md shadow-sm bg-background md:p-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
            <p className="text-gray-800">
              At Neuro Nexus, we believe that understanding psychology shouldn’t be complicated. 
              Our mission is to break down complex psychological concepts and present them in a way that is easy to understand and apply to daily life.
            </p>
            <p className="text-gray-800">
              We envision a world where psychological knowledge empowers individuals to improve their mental health, relationships, and overall well-being. 
              Through accessible content, we hope to inspire curiosity, learning, and self-growth.
            </p>
          </div>

          <div className="p-4 border border-gray-300 rounded-md shadow-sm bg-secondary md:p-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">What We Offer</h2>
            <p className="text-gray-800">
              We provide insights into key areas of psychology, from theories and therapies to research methods. Whether you are exploring stress management techniques, mindfulness practices, or simply curious about famous psychological theories, we have something for you.
            </p>
            <p className="text-gray-600 mt-2">
              Our platform offers:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Informative articles and practical guides.</li>
              <li>Easy-to-read explanations of psychological concepts.</li>
              <li>Recommendations for books to deepen your knowledge.</li>
              <li>Latest news and research updates in the field of psychology.</li>
            </ul>
          </div>


        </section>
      </div>
      <Footer />
    </main>
  );
};

export default AboutUs;
