import React from "react";
import { useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  console.log(id);
  const url = `https://vidsrc.to/embed/movie/${id}`;
  return (
    <div>
      <iframe
        className="w-full h-screen"
        allowFullScreen
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture "
        src={url}
      ></iframe>
    </div>
  );
};

export default Player;
