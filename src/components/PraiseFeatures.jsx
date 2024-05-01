"use client";
import React, { useState } from "react";

export default function PraiseFeatures({ onSelect }) {
  const [praises, setPraises] = useState([]);

  const handleClick = (item) => {
    if (isExist(item)) {
      removeItem(item);
    } else {
      addItem(item);
    }
    onSelect(praises);
  };

  const isExist = (item) => {
    return praises.includes(item);
  };

  const removeItem = (item) => {
    setPraises(praises.filter((i) => i !== item));
  };

  const addItem = (item) => {
    setPraises([...praises, item]);
  };

  const features = [
    "Quality",
    "Clean",
    "User Friendly",
    "Good Response",
    "Fast",
    "Easy",
    "Honest",
    "Efficient",
    "Reliable",
    "Trustworthy",
    "Personalized",
    "Accessible",
    "Convenient",
  ];
  return (
    <div className="flex flex-wrap gap-1">
      {features.map((item, i) => (
        <div
          key={item + i}
          onClick={() => handleClick(item)}
          className={`cursor-pointer text-sm font-medium py-2 px-4 rounded-full ${isExist(item)? " bg-emerald-400": "bg-neutral-300 hover:bg-neutral-500/50"}`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
