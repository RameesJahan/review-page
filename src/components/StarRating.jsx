"use client";
import { StarFillIcon } from "@/assets/icons";
import React, { useState } from "react";

export default function StarRating({ onRate }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const handleClick = (index) => {
    setRating(index + 1);
    onRate(index+1)
  };
  const handleMouseOver = (index) => {
    setHover(index + 1);
  };
  const handleMouseOut = () => {
    setHover(0);
  };

  const mx = new Array(5).fill(0);
  return (
    <div className="flex">
      {mx.map((_, i) => (
        <div
          key={i}
          onClick={() => handleClick(i)}
          onMouseOver={() => handleMouseOver(i)}
          onMouseOut={handleMouseOut}
          className={`cursor-pointer ${ (hover>i && i>=rating) && "text-neutral-500/50"} ${rating > i ? "text-yellow-500" : "text-neutral-300"}`}
        >
          <StarFillIcon className="h-12 w-12 sm:h-14 sm:w-14" />
        </div>
      ))}
    </div>
  );
}
