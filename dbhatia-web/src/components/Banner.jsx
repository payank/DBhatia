import React from "react";
import bannerImage from "../components/assets/images/banner1.png";

function Banner() {
  return (
    <div className="w-full">
      <img
        src={bannerImage}
        alt="Banner"
        className="w-full h-96"
      />
    </div>
  );
}

export default Banner;
