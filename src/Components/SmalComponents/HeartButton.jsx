import { useState } from "react";

const HeartButton = () => {
  const [color, setColor] = useState();

  const ChangeColorHandler = () => {
    setColor(!color);
  };

  return (
    <div onClick={ChangeColorHandler}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={!color ? "none" : "red"}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={
          !color
            ? "w-9 h-9 text-gray-400 hover:text-orange-500 cursor-pointer"
            : "w-9 h-9 text-red-500 cursor-pointer"
        }
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    </div>
  );
};
export default HeartButton;
