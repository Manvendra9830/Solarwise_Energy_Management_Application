import React, { useState } from "react";
import { PiTreePalmThin } from "react-icons/pi";

const TreeSavingBadge100 = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-48 h-48 perspective"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`absolute inset-0 w-full h-full transition-transform duration-500 transform ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 flex items-center justify-center bg-green-100 rounded-full backface-hidden">
          <div className="badge flex flex-col items-center justify-center">
            {/* SVG Badge */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 250 250"
              className="w-32 h-32"
            >
              <g id="base">
                <circle className="fill-green-300" cx="125" cy="125" r="110" />
                <circle className="fill-green-500" cx="125" cy="125" r="95" />
              </g>
              <g className="tree">
                <path
                  className="fill-green-700"
                  d="M125 75L85 135h80z"
                />
                <path
                  className="fill-brown-500"
                  d="M115 135v40h20v-40z"
                />
              </g>
            </svg>
            <text
              x="125"
              y="220"
              textAnchor="middle"
              className="text-lg font-bold text-green-900 mt-2"
            >
              100 Trees Saved
            </text>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 rounded-full transform rotate-y-180 backface-hidden">
          <PiTreePalmThin className="text-6xl text-green-700" /> {/* Enlarge icon */}
          <h4 className="text-lg font-semibold mt-4">Tree Saver Pro</h4>
          <p className="text-sm text-gray-700 text-center px-4">
            Saved 100 Trees
          </p>
        </div>
      </div>
    </div>
  );
};

export default TreeSavingBadge100;
