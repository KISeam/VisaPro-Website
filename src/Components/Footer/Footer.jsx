import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.png";

const Footer = () => {
  return (
    <>
      <div className="bg-[#00026e] pt-6">
        <div className="w-11/12 md:w-10/12 2xl:w-6/11 mx-auto">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-10 mb-14">
              <div className="space-y-3">
                <h3 className="font-bold text-white text-base lg:text-lg">
                  Discover
                </h3>
                <div className="flex gap-8 text-nowrap">
                  <div className="space-y-3">
                    <p className="text-white text-sm">Home</p>
                    <p className="text-white text-sm">Terms</p>
                    <p className="text-white text-sm">Talent & Culture</p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-white text-sm">Refund Policy</p>
                    <p className="text-white text-sm">EMI Policy</p>
                    <p className="text-white text-sm">Privacy Policy</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-white text-base lg:text-lg">
                  Payment Methods
                </h3>
                <div>
                  <img
                    src="https://ik.imagekit.io/w13m3d3rhif/web/icons/payment-icons-footer.v1.0.0.svg?tr=f-auto"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="space-y-3">
                  <h3 className="font-bold text-white text-base lg:text-lg">
                    Need Help ?
                  </h3>
                  <p className="text-white text-sm">
                    We're here for you 24/7! Reach out to us through Messenger
                    or call anytime, day or night, for the support you need.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-white text-base lg:text-lg">
                    Experience Center
                  </h3>
                  <p className="text-white text-sm hover:underline">
                    Sheltech Ayaan, <br />
                    House 58, Road 6 & 11,
                    <br />
                    Block C, Level 2, Banani, Dhaka
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-white text-base lg:text-lg">
                  Contact
                </h3>
                <div className="flex flex-col gap-8">
                  <div className="space-y-3">
                    <p className="text-white text-sm">info@gozayaan.com</p>
                    <p className="text-white text-sm">+88 09678 332211</p>
                  </div>
                  <div className="flex gap-4">
                    <Link
                      to="https://www.facebook.com/GoZayaanBD"
                      className="flex items-center justify-center p-3 bg-[#33358B] rounded-full cursor-pointer text-white"
                    >
                      <FaFacebookF className="text-lg" />
                    </Link>
                    <Link
                      to="https://www.youtube.com/channel/UCPcc3SEA1Ig3QMqNaW91-Ng"
                      className="flex items-center justify-center p-3 bg-[#33358B] rounded-full cursor-pointer text-white"
                    >
                      <FaYoutube className="text-lg" />
                    </Link>
                    <Link
                      to="https://www.instagram.com/gozayaan/"
                      className="flex items-center justify-center p-3 bg-[#33358B] rounded-full cursor-pointer text-white"
                    >
                      <FaInstagram className="text-lg" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-white border-t border-white py-6">
              <Link to="/" className="w-30 md:w-36 lg:w-40">
                <img src={logo} alt="Logo" className="w-full h-full" />
              </Link>
              <p className="text-sm">&copy; Copyright GoZayaan Ltd. </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
