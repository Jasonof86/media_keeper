import React from "react";
import { getTrending } from "@/app/serverActions/media";
import MediaThumbnail from "./MediaThumbnail";

export default async function MediaContainer() {
  const trending = await getTrending("tv", 1, "day");
  return (
    <div className="flex flex-col p-4">
      <h1 className="text-2xl font-bold">Trending</h1>
      <div className="flex items-top overflow-scroll">
        {trending.results.map((show: any) => (
          <MediaThumbnail show={show} key={show.id} />
        ))}
      </div>
      <pre>{JSON.stringify(trending, null, 2)}</pre>
    </div>
  );
}
