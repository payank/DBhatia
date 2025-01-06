import React from "react";
import { Link } from "react-router-dom";
import services from "../../components/constants/serviceData";

function Services() {
  return (
    <div className="p-6 bg-gray-100">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-primary mb-4">Our Services</h1>
        <p className="text-gray-700 mb-6">
          Explore the range of services we offer. Click on any service to learn more.
        </p>
        <ul className="space-y-4">
          {services.map((service) => (
            <li key={service.id} className="text-primary hover:underline hover:font-bold transition-all duration-300">
              <Link to={`/services/${service.id}`}>{service.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Services;
