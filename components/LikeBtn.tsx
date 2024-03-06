"use client";
import React, { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
import "@/app/globals.css";

export default function LikeButton({ isFavorited }: { isFavorited: boolean }) {
  const [favorited, setFavorited] = useState(isFavorited);
  const [isAnimating, setIsAnimating] = useState(false);

  interface LikeButtonProps {
    isFavorited: boolean;
  }

  const handleLikeClick = () => {
    setFavorited(!favorited);
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Adjust the duration as needed
  };

  return (
    <button
      onClick={handleLikeClick}
      className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${favorited ? "bg-pink-400" : "bg-gray-200"}`}
    >
      <HeartIcon className={`h-6 w-6 ${favorited ? "animate-heart text-red-500" : ""} `} />
    </button>
  );
}
