import { forwardRef, useEffect, useState } from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";

const Thumbnail = forwardRef(({ photo, onClick, handleLikeClick }, ref) => {
  const [likedId, setLikedId] = useState();
  const [recentLikedPhoto, setRecentLikedPhoto] = useState();
  const [recentUnlikedPhoto, setRecentUnlikedPhoto] = useState();
  const src = photo?.img_src || "/favicon.ico";

  const handleLikeImageClick = (e, photoId) => {
    e.stopPropagation();
    setRecentLikedPhoto(photoId);
    handleLikeClick();
    setTimeout(() => {
      setRecentLikedPhoto("");
    }, 200);
  };

  const handleUnlikeImageClick = (e, photoId) => {
    e.stopPropagation();
    setRecentUnlikedPhoto(photoId);
    localStorage.removeItem(photoId);
    setTimeout(() => {
      setRecentUnlikedPhoto("");
    }, 200);
  };

  useEffect(() => {
    const id = window.localStorage.getItem(photo.id);
    setLikedId(Number(id));
  }, [recentLikedPhoto, recentUnlikedPhoto]);
  return (
    <div
      ref={ref}
      className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-102 hover:z-50"
      onClick={onClick}
    >
      <Image
        layout="responsive"
        src={src}
        height={1080}
        width={1920}
        objectFit="cover"
      />
      <div className="py-2">
        <div className="flex justify-between items-center">
          <p className="truncate max-w-md font-bold">
            {photo.rover.name} Rover - {photo.camera.full_name}
          </p>
          <div className="pt-1">
            {likedId === photo.id ? (
              <HeartIcon
                className="fill-red-500 text-red-500 h-6 mb-1 group-hover:animate-bounce"
                onClick={(e) => handleUnlikeImageClick(e, photo.id)}
              />
            ) : (
              <HeartIcon
                className="h-6 mb-1 group-hover:animate-bounce"
                onClick={(e) => handleLikeImageClick(e, photo.id)}
              />
            )}
          </div>
        </div>
        <p className="truncate max-w-md">Date of Capture: {photo.earth_date}</p>
        <h2 className="mt-1 text-l text-white tracking-wider transition-all duration-200 ease-in-out group-hover:font-bold">
          Status: {photo.rover.status.toUpperCase()}
        </h2>
        <p className="flex items-center opacity-0 transition-all duration-200 ease-in group-hover:opacity-100 text-sm">
          Launched: {photo.rover.launch_date} • Landing:{" "}
          {photo.rover.landing_date}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
