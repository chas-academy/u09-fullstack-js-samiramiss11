import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <main className="box-border font-sans antialiased text-gray-700 bg-white">
      <Header />
      <section className="max-w-6xl mx-auto  p-8 md:pt-12">
        {/* Page Header */}
        <div className="flex-1 space-y-6 flex-col md:flex-row md:items-start ">
        <h1 className="text-3xl md:text-4xl font-bold md:text-center text-center md:text-left">
Privacy Policy</h1>
          <p className="text-justify text-lg text-gray-600 p-2">
          Please note: This Privacy Policy is provided for demonstration purposes only and does not reflect our actual data handling practices. This site is a school project and does not collect, store, or share any personal information. Any descriptions of data collection or use are purely illustrative and should not be taken as binding or accurate.          </p>
        </div>
        </section>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto space-y-12 px-4 sm:px-6 lg:px-0 mb-14">

        <section className="space-y-4 bg-background rounded-lg p-8 md:p-12">
          <div className="p-4 border-2 border-white rounded-md shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Information We Collect</h2>
            <p className="text-gray-600">
              We collect information you provide directly to us, such as when you register for an account, subscribe to our newsletter, or contact us.
            </p>
          </div>

          <div className="p-4 border-2 border-white rounded-md shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">How We Use Your Information</h2>
            <p className="text-gray-600">
              Your information helps us personalize your experience, improve our website, and provide customer support. We do not sell or share your data with third parties.
            </p>
          </div>

          <div className="p-4 border-2 border-white rounded-md shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Security Measures</h2>
            <p className="text-gray-600">
              We use secure technologies to protect your data from unauthorized access, alteration, or destruction.
            </p>
          </div>
        </section>
        </div>
      <Footer />
    </main>
  );
};

export default PrivacyPolicy;