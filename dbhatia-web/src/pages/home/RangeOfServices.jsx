import React from "react";
import { Link } from "react-router-dom";
import services from "../../components/constants/serviceData"; // Import services data

function RangeOfServices() {
  return (
    <div className="bg-primary text-white rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Range of Services</h2>
      <ul className="space-y-2">
        {services.map((service) => (
          <li key={service.id}>
            <Link 
              to={`/services/${service.id}`} 
              className="hover:font-bold hover:underline transition-all duration-300"
              >
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RangeOfServices;
