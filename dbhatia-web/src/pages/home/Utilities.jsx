import React from "react";
import { Link } from "react-router-dom";

function Utilities() {
  const utilities = [
    { name: "PAN Search", link: "https://incometaxindiaefiling.gov.in/portal/knowpan.do" },
    { name: "Currency Converter", link: "https://www.oanda.com/convert/classic/" },
    { name: "Online Payment of Taxes", link: "https://incometaxindia.gov.in/Pages/default.aspx" },
    { name: "Challan Status Enquiry", link: "http://tin-nsdl.com/" },
    { name: "e-filing", link: "http://incometaxindiaefiling.gov.in/" },
    { name: "MCA21(ROC)", link: "https://www.mca.gov.in/mcafoportal" },
    { name: "Tax Calendar", link: "https://dbhatia.net/AllEvent.aspx" },
  ];

  return (
    <div className="bg-primary text-white rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Important Utilities</h2>
      <ul className="space-y-2">
        {utilities.map((utility) => (
          <li key={utility.name}>
            <a
              href={utility.link}
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer" // Recommended for security
              className="hover:underline hover:font-bold transition-all duration-300"
            >
              {utility.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Utilities;
