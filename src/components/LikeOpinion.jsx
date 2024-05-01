"use client";
import { DislikeIcon, LikeIcon } from "@/assets/icons";
import React from "react";

export default function LikeOpinion({ onChange }) {
  const [like, setLike] = React.useState(true);

  const handleClick = (val) => {
    setLike(val);
    onChange(val);
  };

  return (
    <div className="flex gap-12">
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => handleClick(false)}
      >
        <DislikeIcon
          className={`h-14 w-14 sm:h-14 sm:w-14 ${
            like ? "text-neutral-300 hover:text-neutral-500/50" : "text-red-500"
          }`}
        />
        <p className="font-medium">No</p>
      </div>
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => handleClick(true)}
      >
        <LikeIcon
          className={`h-12 w-12 sm:h-14 sm:w-14 ${
            like
              ? "text-emerald-500"
              : "text-neutral-300 hover:text-neutral-500/50"
          }`}
        />
        <p className="font-medium">Yes</p>
      </div>
    </div>
  );
}
