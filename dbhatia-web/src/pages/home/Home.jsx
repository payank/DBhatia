import React from "react";
import RangeOfServices from "./RangeOfServices";
import Utilities from "./Utilities";
import AboutUs from "./AboutUs";
import Team from "./Team";
import WhatsNew from "./WhatsNew";
import Login from "./Login";
import Banner from "../../components/Banner";

function Home() {
  return (
    <div className="p-6 bg-gray-100">
      <Banner />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left Column: Range of Services & Utilities */}
        <div className="space-y-6">
          <RangeOfServices />
          <Utilities />
        </div>

        {/* Center Column: Main Content */}
        <div className="space-y-6">
          <AboutUs />
          <Team />
        </div>

        {/* Right Column: What's New & Login */}
        <div className="space-y-6">
          <WhatsNew />
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Home;
