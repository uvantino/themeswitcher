import React from "react";

const About = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
        title="About Us Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <div className="my-8">
        <div className="bg-gray-500 h-2 w-16 mx-auto mb-4"></div>
        <div className="flex justify-center items-center space-x-2">
          <div className="bg-blue-500 h-8 w-8 rounded-full"></div>
          <div className="bg-green-500 h-8 w-8 rounded-full"></div>
          <div className="bg-red-500 h-8 w-8 rounded-full"></div>
        </div>
        <div className="bg-gray-500 h-2 w-16 mx-auto mt-4"></div>
      </div>

      <p className="text-gray-700">simple youtube video</p>
    </div>
  );
};

export default About;
