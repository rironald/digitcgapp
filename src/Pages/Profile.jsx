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
          <div className="mx-auto lg:mx-0 grid grid-cols-3 gap-1 py-16">
            <div className="col-span-3 md:col-span-1">
              <img
                className="mx-auto w-24 h-24 rounded-full"
                src={profile_pic}
                alt="/"
              />
            </div>
            <div className="col-span-3 md:col-span-2">
              <h1 className="flex items-end text-center text-lg font-medium uppercase">
                Ronald Rivera
              </h1>
              <div className="col-span-3 flex items-start">
                <ul className="flex flex-row items-center">
                  <li className="px-1">
                    <FaInstagramSquare size={20} />
                  </li>
                  <li className="px-1">
                    <FaFacebookSquare size={20} />
                  </li>
                  <li className="px-1">
                    <FaTwitterSquare size={20} />
                  </li>
                  <li className="px-1">
                    <FaDiscord size={20} />
                  </li>
                </ul>
              </div>
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
            <div className="flex flex-col">
              <h1 className="text-xl font-medium py-4">Account Information</h1>
              <div className="flex flex-col md:flex-row py-4 justify-between">
                <div className="py-2">
                  <p className="text-lg">First Name</p>
                  <p className="font-light">Ronald</p>
                </div>
                <div className="py-2">
                  <p className="text-lg">Last Name</p>
                  <p className="font-light">Rivera</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row py-4 justify-between">
                <div className="py-2">
                  <p className="text-lg">Email</p>
                  <p className="font-light">rironald3@gmail.com</p>
                </div>
                <div className="py-2">
                  <p className="text-lg">Password</p>
                  <p className="font-light">********</p>
                </div>
              </div>
            </div>
            <button className="editButton">Make Changes</button>
            <div className="flex flex-col py-16">
              <h1 className="text-xl font-medium py-4">Uploaded Decks</h1>
              <div className="flex flex-col">
                <div>
                  <ul className="pb-4">
                    <li className="py-1">Xros Heart</li>
                    <li className="py-1">Hunters</li>
                    <li className="py-1">Greyknightsmon</li>
                    <li className="py-1">Bloomlord/Parasitemon</li>
                    <li className="py-1">Red Hybrid</li>
                  </ul>
                  <button className="editButton">Edit Decks</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
