import React from "react";
import contactImage from "../components/assets/images/contact1.png"

const SEPARATOR = ':' ;

function Contact() {
  return (
    <div className="p-6 bg-gray-100">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Section: Contact Us Image */}
          <div className="flex justify-center items-center">
            <img
              src={contactImage} // Replace with actual image URL
              alt="Contact Us"
              className="border-2 border-blue-300 rounded-lg"
            />
          </div>

          {/* Right Section: Contact Information */}
          <div className="md:col-span-2">
            <h1 className="text-2xl font-bold text-primary">D. BHATIA & CO.</h1>
            <p className="text-lg text-gray-700 font-semibold">Chartered Accountants</p>

            <div className="mt-4 text-gray-700">
              <div className="flex flex-row">
                <p className="font-semibold">{`Our Office ${SEPARATOR}`}</p>
                <p className="mx-2">25, Laxmi Insurance Building, Asaf Ali Road, New Delhi - 110 002.</p>
                {/* <p>New Delhi - 110 002.</p> */}
              </div>

              <div className="flex flex-row mt-2">
                <p className="font-semibold">{`Phones ${SEPARATOR}`}</p>
                <p className="mx-2">011-23238686, 23230780, 23233508</p>
              </div>

              <div className="flex flex-row mt-2">
                <p className="font-semibold">{`Mobile ${SEPARATOR}`}</p>
                <p className="mx-2">+91-9810150313 / 9911081048 / 9999205108</p>
              </div>

              <div className="flex flex-row mt-2">
                <p className="font-semibold">{`Fax ${SEPARATOR}`}</p>
                <p className="mx-2">011-23239702</p>
              </div>

              <div className="flex flex-row mt-2">
                <p className="font-semibold">{`Email ID ${SEPARATOR}`}</p>
                <p className="text-blue-500 mx-2">
                  <a href="mailto:dbcoca@gmail.com">dbcoca@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
