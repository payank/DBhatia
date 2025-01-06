import React from "react";
import { useParams } from "react-router-dom";
import services from "../../components/constants/serviceData";

function ServiceDetails() {
  const { serviceId } = useParams(); // Get the service ID from the URL
  const service = services.find((s) => s.id === serviceId); // Find the matching service

  if (!service) {
    return (
      <div className="p-6 bg-gray-100 text-center">
        <h1 className="text-2xl font-bold text-red-600">Service Not Found</h1>
        <p className="text-gray-700">The service you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-primary mb-4">{service.name}</h1>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {service.description.map((item, index) => (
            <li
              key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ServiceDetails;
