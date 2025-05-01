import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const BioSection = () => {
  return (
    <section className="w-full flex flex-col" id="bio">
      
      <div className="h-16 w-full bg-gradient-to-t from-gray-900 to-transparent"/>
      <div className="flex flex-col bg-gray-900 md:flex-row py-16 px-35 items-center justify-center">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">H
          <TypeAnimation
                    sequence={["ey there 👋"]}
                    speed={60}
                    cursor={false}
                    className="font-mono"
                    wrapper="span"
                  /></h2>
          <p className="text-lg md:text-xl leading-relaxed">
            My name is Benjamin. I'm a software engineering COOP student at McGill University. This website is meant to showcase some of my skills and experience. Look around. I'm always keen on learning more and I'd love to learn more about you! <strong>Feel free to reach out</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BioSection;