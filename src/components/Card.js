import React from "react";

const Card = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src="https://source.unsplash.com/random" alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-black text-xl">photo by bruno</div>
      </div>
    </div>
  );
};
export default Card;