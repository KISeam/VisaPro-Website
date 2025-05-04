import React from "react";
import Visa from "../../Components/Visa";

const VisaPage = () => {
  return (
    <div className="bg-gray-200 pb-14 pt-6">
      <div className="w-11/12 md:w-10/12 2xl:w-6/11 mx-auto">
        <div className="space-y-14 lg:space-y-16">
          <div className="bg-white pt-6 py-10 px-4 rounded-xl">
            <Visa />
          </div>
          <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
            {/* Left Section: Requirements */}
            <div className="bg-white w-full md:w-1/2 p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold mb-4">Requirement</h2>
              <h3 className="font-semibold mb-2">General Documents:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>2 copies 35/45 size Recent photo (white background)</li>
                <li>Passport validity minimum 6 months</li>
                <li>Bank statement for last 6 months</li>
                <li>Bank solvency certificate</li>
                <li>Visiting Card</li>
                <li>NOC, Pay Slip, Salary Certificate</li>
                <li>Updated Trade License</li>
              </ul>
              <h3 className="font-semibold mt-4 mb-2">Additional Documents:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Leave letter, Pay Slip, ID card (Job holder)</li>
                <li>Trade License photocopy (Business person)</li>
                <li>Company Memorandum (if applicable)</li>
              </ul>
              <h3 className="font-semibold mt-4 mb-2">Family Documents:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Birth Certificate</li>
                <li>School ID Card Photocopy</li>
                <li>NOC from School</li>
                <li>Marriage Certificate (if applicable)</li>
              </ul>
            </div>

            {/* Right Section: Basic Info & Fees */}
            <div className="bg-white w-full md:w-1/2 p-6 rounded-xl shadow-sm space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-2">Basic Information</h2>
                <p className="text-sm">
                  <strong>Royal Thai Embassy Dhaka, Bangladesh</strong>
                  <br />
                  18 & 20, Madani Avenue Baridhara, Dhaka-1212
                  <br />
                  Tel:{" "}
                  <a href="tel:+88028812995" className="text-blue-600">
                    (+88-02) 881-2795-6, 881-3260-1
                  </a>
                  <br />
                  Fax: (+88-02) 885-4280-1
                  <br />
                  Mail:{" "}
                  <a href="mailto:thaidac@mfa.go.th" className="text-blue-600">
                    thaidac@mfa.go.th
                  </a>
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Visa Consultancy Fee</h2>
                <p className="text-sm">
                  Validity = 3 months Single Entry
                  <br />
                  Visa Fee = 5,000 BDT per person
                  <br />
                  Working Days = 04-05 (Previous visited Thailand)
                  <br />
                  Working Days = 8-9 (First time Apply Thailand)
                  <br />
                  Validity = 6 months Multiple Entry (Previous visit is a must)
                </p>
                <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  I'm Interested
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaPage;
