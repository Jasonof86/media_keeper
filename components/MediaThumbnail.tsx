import Image from "next/image";
import React from "react";
import LikeButton from "./LikeBtn";

export default function MediaThumbnail({ show }: any) {
  const baseUrl = "https://image.tmdb.org/t/p/w200";
  const posterPath = `${baseUrl}${show.poster_path}`;
  let borderColor;
  const rating = show.vote_average.toFixed(1);
  if (rating >= 8) {
    borderColor = "border-green-500";
  } else if (rating >= 6) {
    borderColor = "border-yellow-500";
  } else {
    borderColor = "border-red-500";
  }

  return (
    <div className="flex flex-col items-center mr-4">
      <Image
        src={posterPath}
        alt={show.name}
        width={200}
        height={300}
        className="rounded-lg shadow-lg min-w-[200px]"
      />
      <div className="mt-4 relative w-full p-4 flex-col flex-grow">
        <div className="absolute -top-8 left-0 flex justify-between w-full px-4">
           
          <div>
            <LikeButton isFavorited={false} />            
          </div>
        </div>
        <h3 className="text-lg font-bold">{show.name}</h3>
        <h5 className="text-sm text-gray-500">
          {show.first_air_date.slice(0, 4)}
        </h5>
      </div>
    </div>
  );
}
