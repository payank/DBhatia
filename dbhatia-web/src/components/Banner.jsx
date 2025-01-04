import React from "react";
import bannerImage from "../components/assets/images/banner.webp";

function Banner() {
  return (
    <div className="w-full">
      <img
        src={bannerImage}
        alt="Banner"
        className="w-full h-96 object-cover"
      />
    </div>
  );
}

export default Banner;
