import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="bg-blue-100 rounded-lg p-4">
      <h2 className="text-xl font-bold text-primary mb-4">Our Team</h2>
      <p className="text-gray-700">
        Our dedicated team comprises competent people with extensive knowledge
        and experience. Our professionalism and expertise help us to serve our
        clients to their satisfaction. Some of the key members of our firm are:
        Mr. Sunil Bhatia, Mr. Abhishek Jain, Mr. Ankur Jindal, Mr. Jagdish Prasad Nagar
      </p>
      <div className="mt-4">
        <Link to="/team" className="text-primary hover:underline font-semibold">
          Read More →
        </Link>
      </div>
    </div>
  );
}

export default Team;
