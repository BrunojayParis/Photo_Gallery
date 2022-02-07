import React from "react";

const Card = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-black text-xl">Bruno Paris </div>
      </div>
      <img src="https://source.unsplash.com/random" alt="" className="w-full" />
      <div>
          <ul>
              <li>
                  <strong>Views: </strong>
                  1231
              </li>
              <li>
                  <strong>Downloads: </strong>
                  342                    
              </li>
              <li>
                  <strong>Likes: </strong>
                  212
              </li>

          </ul>
      </div>
      
    </div>
  );
};
export default Card;
