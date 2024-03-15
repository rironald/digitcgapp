import React from "react";
import profile_pic from "../assets/profile_pic.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaDiscord,
} from "react-icons/fa";

const Profile = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="w-full h-screen px-4 text-black">
        <div className="max-w-[1280px] bg-white mx-auto grid md:grid-cols-3 gap-8">
          <div className=" mt-12 mx-auto p-16 grid grid-rows-3 grid-flow-col gap-1">
            <img
              className="size-25 row-span-3 rounded-full"
              src={profile_pic}
              alt="/"
            />
            <h1 className=" col-span-2 flex items-end text-center text-lg font-medium uppercase">
              Ronald Rivera
            </h1>
            <div className="row-span-1 col-span-3 flex items-start justify-evenly md:w-[75%]">
              <FaInstagramSquare size={20} />
              <FaFacebookSquare size={20} />
              <FaTwitterSquare size={20} />
              <FaDiscord size={20} />
            </div>
          </div>
        </div>
        <div className="max-w-[1280px] px-9 py-4 mx-auto grid md:grid-cols-3 gap-1">
          <div className="py-9 flex flex-col col-span-1">
            <h1 className="text-xl font-medium uppercase pb-3">Account</h1>
            <h2 className="account">Username</h2>
            <h2 className="account">Email Address</h2>
            <h2 className="account">Uploaded Decks</h2>
            <h2 className="account">Settings</h2>
          </div>
          <div>
            <div className="flex flex-col col-span-3">
              <h1 className="text-xl font-medium py-4">Account Information</h1>
              <div className="py-2">
                <p className="text-lg">First Name</p>
                <p className="font-light">Ronald</p>
              </div>
              <div className="py-2">
                <p className="text-lg">Last Name</p>
                <p className="font-light">Rivera</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1280px] px-16 py-4 mx-auto grid md:grid-cols-3 gap-8"></div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
