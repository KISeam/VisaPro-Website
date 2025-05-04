import React from "react";
import Visa from "../../Components/Visa";

const VisaPage = () => {
  return (
    <div className="bg-gray-200 pb-14 pt-6">
      <div className="w-11/12 md:w-9/12 container mx-auto">
        <div className="space-y-14">
          <div className="bg-white pt-6 py-10 px-4 rounded-xl">
            <Visa />
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            {/* Left Section: Requirements */}
            <div className="bg-white w-full md:w-1/2 p-6 rounded-xl shadow-sm">
              <div className="bg-[#E9EEF2] p-3 mb-4 rounded-lg">
                <h2 className="text-xl font-bold text-gray-600">Requirements</h2>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-2 text-gray-600">
                  General Documents:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-500">
                  <li>2 copies 35/45 size Recent photo (white background)</li>
                  <li>Passport validity minimum 6 months</li>
                  <li>Bank statement for last 6 months (minimum balance 50,000 BDT)</li>
                  <li>Bank solvency certificate</li>
                  <li>Visiting Card/Company Profile</li>
                  <li>NOC, Pay Slip, Salary Certificate (for employees)</li>
                  <li>Updated Trade License (for business owners)</li>
                  <li>Confirmed return flight ticket</li>
                  <li>Hotel booking confirmation</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-2 text-gray-600">
                  Additional Documents:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-500">
                  <li>Leave letter, Pay Slip, ID card (Job holder)</li>
                  <li>Trade License photocopy (Business person)</li>
                  <li>Company Memorandum (if applicable)</li>
                  <li>Income Tax Certificate (if available)</li>
                  <li>Previous visa copies (if travelled before)</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-2 text-gray-600">
                  Family Documents:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-500">
                  <li>Birth Certificate (for children)</li>
                  <li>School ID Card Photocopy (for students)</li>
                  <li>NOC from School (for students)</li>
                  <li>Marriage Certificate (if applicable)</li>
                  <li>Family photo (with all members)</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h3 className="font-semibold mb-2 text-gray-600">
                  Important Notes:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-500">
                  <li>All documents must be in English or officially translated</li>
                  <li>Documents should not be older than 3 months</li>
                  <li>Photocopies must be clear and legible</li>
                  <li>Application form must be filled completely</li>
                  <li>Applicants may be called for interview</li>
                </ul>
              </div>
            </div>

            {/* Right Section: Basic Info & Fees */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="bg-white p-6 rounded-xl">
                <div className="bg-[#E9EEF2] p-3 mb-4 rounded-lg">
                  <h2 className="text-xl font-bold text-gray-600">
                    Embassy Information
                  </h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">
                      Royal Thai Embassy Dhaka, Bangladesh
                    </p>
                    <p className="text-sm text-gray-500">
                      18 & 20, Madani Avenue Baridhara, Dhaka-1212
                      <br />
                      Tel:{" "}
                      <a href="tel:+88028812995" className="text-blue-600 hover:underline">
                        (+88-02) 881-2795-6, 881-3260-1
                      </a>
                      <br />
                      Fax: (+88-02) 885-4280-1
                      <br />
                      Email:{" "}
                      <a href="mailto:thaidac@mfa.go.th" className="text-blue-600 hover:underline">
                        thaidac@mfa.go.th
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-1">
                      Working Hours:
                    </h3>
                    <p className="text-sm text-gray-500">
                      Visa Application: Sunday-Thursday, 9:00 AM to 12:30 PM
                      <br />
                      Visa Collection: Sunday-Thursday, 4:00 PM to 5:00 PM
                      <br />
                      Closed on Friday, Saturday and public holidays
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <div className="bg-[#E9EEF2] p-3 mb-4 rounded-lg">
                  <h2 className="text-xl font-bold text-gray-600">
                    Visa Fees & Processing
                  </h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-1">
                      Tourist Visa:
                    </h3>
                    <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                      <li>Single Entry: 5,000 BDT (Valid for 3 months)</li>
                      <li>Multiple Entry: 12,000 BDT (Valid for 6 months, must have previous visit)</li>
                      <li>Processing Time: 4-5 working days (for previous visitors)</li>
                      <li>Processing Time: 8-9 working days (first time applicants)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-1">
                      Other Visa Types:
                    </h3>
                    <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                      <li>Business Visa: 8,000 BDT</li>
                      <li>Student Visa: 6,000 BDT</li>
                      <li>Transit Visa: 3,000 BDT</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h3 className="text-sm font-semibold text-gray-600 mb-1">
                      Service Charges:
                    </h3>
                    <p className="text-sm text-gray-500">
                      Our consultancy fee: 2,000 BDT per application
                      <br />
                      Includes document checking, form filling assistance, and application tracking
                    </p>
                  </div>

                  <button className="w-full mt-4 bg-[#3590CF] text-white px-4 py-3 rounded-lg hover:bg-[#2a7cb3] transition-colors cursor-pointer font-medium">
                    I'm Interested - Apply Now
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <div className="bg-[#E9EEF2] p-3 mb-4 rounded-lg">
                  <h2 className="text-xl font-bold text-gray-600">
                    Processing Timeline
                  </h2>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-[#3590CF] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-600">Document Collection</h3>
                      <p className="text-sm text-gray-500">1-2 days after application</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#3590CF] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-600">Embassy Submission</h3>
                      <p className="text-sm text-gray-500">Next working day after document verification</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#3590CF] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-600">Processing</h3>
                      <p className="text-sm text-gray-500">4-9 working days depending on visa type</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#3590CF] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-600">Passport Collection</h3>
                      <p className="text-sm text-gray-500">Notification via SMS/Email when ready</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaPage;