import React from 'react';

const BioSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-16 px-8 bg-gray-900">
      {/* Profile Picture */}
      <div className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-pink-500 flex-shrink-0">
        <img
          src="/ben-face.JPG"
          alt="Your Name"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Biography */}
      <div className="mt-8 md:mt-0 md:ml-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Name</h2>
        <p className="text-lg md:text-xl leading-relaxed">
          Write a short biography about yourself here. Highlight your skills, experience, and what makes you unique. This section is a great way to introduce yourself to visitors and give them a sense of who you are.
        </p>
      </div>
    </section>
  );
};

export default BioSection;