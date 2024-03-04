import React from "react";

const Benefits = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-around">
      <div>
        <img
          src="https://i.imgur.com/3ZQlRQd.png"
          alt="connect ease logo"
          className="w-96 h-96 p-2 lg:p-0"
        />
      </div>
      <div className=" w-full p-2 lg:p-0 lg:w-2/4 ">
        <h2 className="text-3xl font-bold mb-3">What Will you gain </h2>
        <span className="text-gray-500 lg:w-96 mt-5 leading-8">
          Our platform is designed to help you find the right therapist,
          counselor, or psychologist for you. We have a wide range of mental
          health professionals that can help you with various mental health
          issues. We are here to help you find the right mental health
          professional for you. We are here to help you find the right mental
          health professional for you.
        </span>
      </div>
    </div>
  );
};

export default Benefits;
