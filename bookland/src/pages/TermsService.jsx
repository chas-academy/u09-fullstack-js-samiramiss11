import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsService = () => {
  return (
<main className="box-border font-sans antialiased text-gray-700 bg-white">
      <Header />
      <section className="max-w-6xl mx-auto  p-8 md:pt-12">
        {/* Page Header */}
        <div className="flex-1 space-y-6 flex-col md:flex-row md:items-start ">
        <h1 className="text-3xl md:text-4xl font-bold md:text-center text-center md:text-left">
        Terms of Service</h1>
          <p className="text-justify md:text-center text-lg text-gray-600 p-2">
          Please read these Terms of Service carefully before using our website. </p>       </div>
        </section>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto space-y-12 px-4 sm:px-6 lg:px-0 mb-14">

        <section className="space-y-4 bg-background rounded-lg p-8 md:p-12">
          <div className="p-4 border-2 border-white rounded-md shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Information We Collect</h2>
            <p className="text-gray-600">
            By accessing and using this site, you agree to comply with these terms. If you do not agree, please do not use our services.
            </p>
          </div>

          <div className="p-4 border-2 border-white rounded-md shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">How We Use Your Information</h2>
            <p className="text-gray-600">
            Users agree not to misuse the site, including attempting to hack, spam, or violate any laws.
            </p>
          </div>

          <div className="p-4 border-2 border-white rounded-md shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Security Measures</h2>
            <p className="text-gray-600">
            We reserve the right to update these terms at any time. Changes will be effective immediately upon posting.
            </p>
          </div>
        </section>
        </div>
      <Footer />
    </main>
  );
};

export default TermsService;