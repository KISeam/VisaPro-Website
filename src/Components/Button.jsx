import React from "react";

const Button = ({ text }) => {
  return (
    <div className="bg-[#3590CF] text-white py-2.5 px-6 font-bold text-sm rounded-md hover:shadow-lg/50 cursor-pointer hover:shadow-[#00026e] transition-shadow duration-300">
      {text}
    </div>
  );
};

export default Button;
