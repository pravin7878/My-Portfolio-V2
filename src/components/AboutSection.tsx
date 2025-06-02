import Image from 'next/image';
import React from 'react';

export const About = ({
  aboutImage,
  aboutDescription,
}: {
  aboutImage: string;
  aboutDescription: string;
}) => {
  return (
    <section className="bg-[#121212] py-10 px-4 md:px-10">
      <div className="mx-auto">
        <h3 className="font-extrabold text-4xl md:text-5xl text-center mb-6 md:mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            About
          </span>{' '}
          <span className="text-white">Me</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <div className="p-2 border border-gray-700 rounded-2xl shadow-lg hover:shadow-pink-500/30 transition duration-300">
              <Image
                src={aboutImage}
                alt="about image"
                width={300}
                height={300}
                className="rounded-xl"
              />
            </div>
          </div>

          {/* Description Section */}
          <div className="text-gray-300 text-[12px] sm:text-base md:text-sm lg:text-md leading-relaxed text-center md:text-left">
            <p>{aboutDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
