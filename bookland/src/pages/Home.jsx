import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';


const Home = () => {
  const navigate = useNavigate();
  return (
    <main className="font-sans antialiased text-gray-800">
      <Header />

      {/* Hero */}
      <section
        className="relative h-[50vh] md:h-[90vh] bg-center bg-cover"
        style={{ backgroundImage: "url('/images/therapy.jpeg')" }}
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex flex-col justify-center h-full px-6 lg:px-24 text-white">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">
            Psychology for everyone
          </h1>
          <p className="text-justify max-w-2xl mb-6 leading-relaxed">
            Explore a world of insights with Neuro Nexus. From trusted approaches 
            and landmark theories to cutting-edge research methods, we help you 
            to understand the human mind, break down complex psychological concepts and present them in a way that is easy to understand and apply to daily life
          </p>

          
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-bg md:mx-6">
        <h2 className="text-2xl lg:text-3xl font-semibold text-center text-primary mb-8">
          A curious mind? Learn more
        </h2>
        <div className=" container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 lg:px-0">
          {[
            {
              title: "Do I Need Therapy?",
              desc: "Evidence-based approaches to manage anxiety, panic, and related symptoms.",
              onClick: () => navigate("/core-concepts#Stress")
            },
            {
              title: "Therapies and Approaches",
              desc: "Explore fundamental psychological concepts that shape our understanding of the human mind and behavior.",
              onClick: () => navigate("/therapies#cbt")
            },
            {
              title: "Research Methods",
              desc: "Learn about research methods used in psychology, including surveys, case studies, and experiments.",
              onClick: () => navigate("/methods")
            },
          ].map(({ title, desc, onClick }) => (
            <div
              key={title}
              onClick={onClick}
              className="
                cursor-pointer p-6 bg-gray-200 rounded-lg 
                border border-secondary shadow-sm
                hover:shadow-lg hover:bg-secondary transition
                hover:border-white hover:border-white
                flex flex-col
              "
            >
              <h3 className="text-xl font-semibold text-primary mb-2">
                {title}
              </h3>
              <p className="text-gray-700 flex-grow">{desc}</p>
              <span className="mt-4 text-primary-dark font-medium hover:underline">
                Learn More →
              </span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;
