import Image from 'next/image';

import React from 'react';
import { ImGlass } from 'react-icons/im';

const EditorsPick = () => {
  return (
    <div className="bg-white py-10 px-5">
      <h2 className="text-center text-xl font-bold mb-2">EDITOR PICK</h2>
      <p className="text-center text-gray-500 mb-8">
        Problems trying to resolve the conflict between
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* First Item */}
        <div className="relative group">
          <Image
            src="/boy-pic.jpg"
            alt="Men"
            className="w-full h-auto rounded-md"
         
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-lg">MEN</span>
          </div>
          {/* Second Image */}
          <div className="relative mt-4">
            <Image
              src="/boy-pic-2.jpg"
              alt="Men Alternate"
              className="w-full h-auto rounded-md"
        
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">MEN </span>
            </div>
          </div>
        </div>

        {/* Second Item */}
        <div className="relative group">
          <Image
            src="/girl-pic.jpg"
            alt="Women"
            className="w-full h-auto rounded-md"
            width={300}
            height={300}
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-lg">WOMEN</span>
          </div>
          {/* Second Image */}
          <div className="relative mt-4">
            <Image
              src="/girl-pic-2.jpg"
              alt="Women Alternate"
              className="w-full h-auto rounded-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">WOMEN </span>
            </div>
          </div>
        </div>

        {/* Third Item */}
        <div className="relative group">
          <Image
            src="/cream-pic.jpg"
            alt="Accessories"
            className="w-full h-auto rounded-md"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-lg">ACCESSORIES</span>
          </div>
          {/* Second Image */}
          <div className="relative mt-4">
            <Image
              src="/cream-pic-2.jpg"
              alt="Accessories Alternate"
              className="w-full h-auto rounded-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">ACCESSORIES </span>
            </div>
          </div>
        </div>

        {/* Fourth Item */}
        <div className="relative group">
          <Image
            src="/yellow-pic.jpg"
            alt="Kids"
            className="w-full h-auto rounded-md"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-lg">KIDS</span>
          </div>
          {/* Second Image */}
          <div className="relative mt-4">
            <Image
              src="/yellow-pic-2.jpg"
              alt="Kids Alternate"
              className="w-full h-auto rounded-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">KIDS </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorsPick;
