import React from "react";

function Team() {
  const teamMembers = [
    {
      name: "Mr. Sunil Bhatia (Partner)",
      title: "Fellow Chartered Accountant, Commerce Graduate",
      description: [
        "Mr. Bhatia brings a wealth of experience to our team, having joined the Institute of Chartered Accountants of India in January 1975. He graduated with honors in B. Com from Shri Ram College of Commerce, Delhi University, in 1969, marking the beginning of his remarkable 48-year journey in the field.",
        "Throughout his extensive career, Mr. Bhatia has demonstrated expertise in various areas, including audit (both Internal and Statutory), accounting audit, financial reporting, merger and acquisition services, individual tax and financial services, international taxation, management advisory, tax planning compliance and preparation, and financial and management consultancy.",
        "His specialization extends to corporate advisory services, project financing and governance, corporate laws, and management consultancy. Mr. Bhatia is well-versed in providing consultancy to foreign companies, Non-Resident Indians, and joint ventures. His proficiency encompasses matters related to FEMA, RBI, and FIPB, showcasing a comprehensive understanding of the regulatory landscape.",
        "With his vast experience and multifaceted skills, Mr. Bhatia significantly enriches our team, bringing valuable insights and leadership to every aspect of our professional endeavors.",
      ],
    },
    {
      name: "Mr. Abhishek Jain (Partner)",
      title: "Fellow Chartered Accountant, Commerce Graduate",
      description: [
        "Mr. Jain has been a proud member of the Institute of Chartered Accountants of India (ICAI) since 2011. He holds a Bachelor’s Degree in Commerce, B. Com (Hons.), from Shyam Lal College, Delhi University. In addition to his professional practice, Mr. Jain is currently pursuing LLB.",
        "His commitment to continuous learning is evident through various post-qualification courses he has undertaken at ICAI. These include the Diploma in Information System Audit (DISA), Certificate Course on Indirect Taxes, Certificate Course on Forensic Accounting & Fraud Prevention, and Certificate Course on Concurrent Audit of Banks.",
        "With a wealth of experience, Mr. Jain specializes in diverse areas such as Taxation (both Domestic and International), Audits (including Banks, Public Limited Companies), Company Law matters, Goods and Service Tax matters, Risk Assessment & Assurance, Valuation of Business, and Project Financing. His expertise and dedication make him a valuable asset to our team.",
      ],
    },
    {
      name: "Mr. Ankur Jindal (Partner)",
      title: "Fellow Chartered Accountant, Commerce Graduate",
      description: [
        "Mr. Jindal, a dedicated member of the Institute of Chartered Accountants of India (ICAI) since 2015, holds a Bachelor’s Degree in Commerce, B. Com (Hons.), from Delhi University. With extensive expertise, he has made significant contributions in various domains within the financial landscape.",
        "His proficiency extends across a spectrum of areas, including Taxation (both Domestic and International), Audits (encompassing Banks and Public Limited Companies), Company Law matters, Goods and Service Tax Matters, Risk Assessment & Assurance, Valuation of Business, and Project Financing. He has done certificate course on concurrent audit of banks and is currently pursuing Diploma in Information System Audit (DISA) from the Institute of Chartered Accountants of India.",
        "Mr. Jindal’s commitment to excellence and comprehensive knowledge in these diverse fields makes him an invaluable member of our team. His ability to navigate complex financial landscapes and deliver effective solutions is a testament to his dedication and proficiency.",
      ],
    },
    {
      name: "Mr. Jagdish Prasad Nagar (Partner)",
      title: "Associate Chartered Accountant, Commerce Graduate",
      description: [
        "Mr. Nagar, a distinguished member of the Institute of Chartered Accountants of India (ICAI) since 2015, holds a Bachelor’s Degree in Commerce, B. Com. His professional journey has been marked by sustained excellence, particularly in matters relating to audit and tax advisory.",
        "With a keen understanding of the intricate nuances of audit processes and tax advisory services, Mr. Nagar contributes valuable insights to our team. His expertise is a testament to his commitment to excellence and his dedication to providing meticulous and tailored advisory services. We are fortunate to have Mr. Nagar as an integral part of our team.",
      ],
    },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Our Team</h1>
        <p className="mb-8 text-gray-700">
          Our dedicated team comprises competent people with extensive knowledge and experience. Our professionalism and expertise help us to serve our clients to their satisfaction. Some of the key members of our firm are:
        </p>
        <div className="space-y-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="border-b pb-6">
              <h2 className="text-xl font-bold text-blue-600">{member.name}</h2>
              <p className="text-md font-semibold text-gray-700">{member.title}</p>
              <div className="mt-4 space-y-2">
                {member.description.map((para, idx) => (
                  <p key={idx} className="text-gray-700">{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
