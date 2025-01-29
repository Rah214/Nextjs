"use client";
import React from 'react';
import Image from 'next/image';
import './globals.css';

const Not_Found = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-gradient-to-r from-[#62ecec] to-white text-black px-4">
        <div className="text-center">
          <Image 
            src="/notfound.jpg"
            width={400}
            height={300}
            alt="Not Found"
            className="rounded-2xl shadow-lg"
          />
          <h1 className="text-4xl font-extrabold mt-6">Oops! Page Not Found</h1>
          {/* <p className="text-lg mt-2">
            It looks like you're lost in the void of the internet. 🌀
          </p> */}
          <button
            onClick={() => (window.location.href = '/')}
            className="mt-6 px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl shadow-md hover:bg-purple-100 transition-all"
          >
            Go Back Home 🏠
          </button>
        </div>
      </div>
    </>
  );
};

export default Not_Found;
