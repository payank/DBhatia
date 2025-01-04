import React from "react";

function SectoralExposure() {
  const sectors = [
    "Banking",
    "Insurance",
    "Distributor/Retailer",
    "Educational Institutions",
    "Travels & Cargo",
    "Sports Institutions",
    "Manufacturing",
    "Hospitality",
    "Shipping & Forwarding",
    "Real Estate",
    "Construction",
    "Logistics",
    "Finance/Investment",
    "Film Distribution",
    "Chit Funds",
    "Software",
    "Business Process Outsourcing (BPO)",
    "Trading",
    "Miscellaneous",
  ];

  return (
    <div className="p-6 bg-gray-100">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-primary mb-6">Sectoral Exposure</h1>
        <p className="text-gray-700 mb-4">
          Our expertise spans a wide range of sectors, helping businesses across industries thrive and succeed.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {sectors.map((sector, index) => (
            <li key={index} className="text-gray-700">
              {sector}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SectoralExposure;
