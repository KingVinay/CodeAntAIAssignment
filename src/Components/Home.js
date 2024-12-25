import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SmallLogo from "../Assets/SmallLogo.png";
import down from "../Assets/down.png";
import house from "../Assets/house.png";
import code from "../Assets/code.png";
import cloud from "../Assets/cloud.png";
import book from "../Assets/book.png";
import setting from "../Assets/setting.png";
import support from "../Assets/support.png";
import logout from "../Assets/logout.png";
import refresh from "../Assets/refresh.png";
import plus from "../Assets/plus.png";
import search from "../Assets/search.png";
import data from "../Assets/data.png";
const Home = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const navigate = useNavigate();

  const repositories = [
    {
      name: "Repo1",
      type: "Public",
      skill: "React",
      storage: "3424KB",
      updatedAt: "Updated 2 days ago",
    },
    {
      name: "Repo2",
      type: "Private",
      skill: "Node.js",
      storage: "7489KB",
      updatedAt: " Updated 5 days ago",
    },
    {
      name: "Repo3",
      type: "Public",
      skill: "MongoDB",
      storage: "5120KB",
      updatedAt: "Updated 3 days ago",
    },
    {
      name: "Repo4",
      type: "Private",
      skill: "JavaScript",
      storage: "2048KB",
      updatedAt: "Updated 1 day ago",
    },
    {
      name: "Repo5",
      type: "Public",
      skill: "C++",
      storage: "1024KB",
      updatedAt: "Updated 10 hours ago",
    },
  ];

  const handleLogout = () => {
    navigate("/");
  };

  const handleSelect = (repo) => {
    setSelectedRepo(repo);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Component */}
      <div className="flex flex-col items-left">
        <div className="flex text-center mt-8 md:mt-4 ml-6">
          <img src={SmallLogo} alt="Logo" className="w-7 h-8 mb-4" />
          <h2 className="text-xl mt-2 ml-2 font-light">CodeAnt AI</h2>
        </div>
        <div
          className={`bg-white p-4 md:p-6 flex flex-col items-center md:block overflow-y-hidden top-20 ${
            isHamburgerOpen ? "block absolute z-10 inset-0" : "hidden"
          }`}
        >
          {/* Name Box */}
          <div className="w-full h-9 mb-4 flex items-center justify-between border-[1px] border-custom-gray rounded-md p-2">
            <span className="truncate max-w-[180px]">Vinay Singh</span>
            <img src={down} alt="down arrow" className="cursor-pointer" />
          </div>

          {/* Buttons */}
          <div className="w-full flex flex-col items-start space-y-2 md:mb-6">
            <button className="flex items-center space-x-2 w-full h-9 text-white py-2 px-4 text-left bg-custom-blue border-[1px] border-custom-gray rounded-md">
              <img src={house} alt="Repositories" className="w-5 h-5" />
              <span className="text-sm">Repositories</span>
            </button>
            <button className="flex items-center space-x-2 w-full h-9 py-2 px-4 text-left bg-white rounded-md">
              <img src={code} alt="AI Code Review" className="w-5 h-5" />
              <span className="text-sm">AI Code Review</span>
            </button>
            <button className="flex items-center space-x-2 w-full h-9 py-2 px-4 text-left bg-white rounded-md">
              <img src={cloud} alt="Cloud Security" className="w-5 h-5" />
              <span className="text-sm">Cloud Security</span>
            </button>
            <button className="flex items-center space-x-2 w-full h-9 py-2 px-4 text-left bg-white rounded-md">
              <img src={book} alt="How to Use" className="w-5 h-5" />
              <span className="text-sm">How to Use</span>
            </button>
            <button className="flex items-center space-x-2 w-full h-9 py-2 px-4 text-left bg-white rounded-md">
              <img src={setting} alt="Settings" className="w-5 h-5" />
              <span className="text-sm">Settings</span>
            </button>
          </div>

          {/* Bottom Buttons */}
          <div className="md:mt-48 w-full flex flex-col items-start space-y-2">
            <button className="flex items-center space-x-2 w-full h-9 py-2 px-4 text-left bg-white rounded-md">
              <img src={support} alt="Support" className="w-5 h-5" />
              <span className="text-sm">Support</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 w-full h-9 py-2 px-4 text-left bg-white rounded-md "
            >
              <img src={logout} alt="Logout" className="w-5 h-5" />
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Component */}
      <div
        className={`w-full md:w-4/5 bg-white p-4 md:p-6 relative ${
          isHamburgerOpen ? "w-full bg-gray-600 opacity-50" : "md:w-4/5"
        }`}
      >
        <div className="flex flex-col md:justify-between md:flex-row">
          <div>
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-xl font-bold">Repositories</h3>
            </div>

            <span className="text-sm text-gray-500 mb-2">
              5 total Repositories
            </span>
          </div>

          {/* For Mobile: Refresh & Add Repository above search */}
          <div className="flex space-x-2">
            <button className="flex items-center md:h-9 md:w-38 py-2 px-4 bg-white text-black border-[1px] border-custom-gray rounded-md">
              <img src={refresh} alt="Refresh" className="w-4 h-4 mr-2" />
              <span>Refresh All</span>
            </button>
            <button className="flex items-center md:h-9 md:w-44 py-2 px-4 bg-blue-500 text-white rounded-md">
              <img src={plus} alt="Add Repository" className="w-4 h-4 mr-2" />
              <span>Add Repository</span>
            </button>
          </div>
        </div>

        {/* Search Input */}
        <div className="mt-4 mb-6 flex items-center space-x-2 md:w-80 px-4 w-full border-[1px] border-custom-gray">
          <img src={search} alt="Search" className="w-5 h-5" />
          <input
            type="text"
            className="p-2 rounded-md"
            placeholder="Search repositories..."
          />
        </div>

        {/* Repository List - Display all repositories in a column */}
        <div className="flex flex-col">
          {repositories.slice(0, 5).map((repo) => (
            <div
              key={repo.name}
              className="h-24 border-[1px] border-custom-gray p-4 rounded-md hover:bg-gray-100 flex items-start space-x-4"
            >
              <div className="flex-1">
                <div className="flex text-center">
                  <h4 className="font-semibold mr-4">{repo.name}</h4>
                  <span className="w-16 text-sm font-thin border-[1px] border-custom-light-blue bg-blue-100 rounded-md text-custom-blue">
                    {repo.type}
                  </span>
                </div>
                <div className="flex items-center space-x-2 mt-2 text-repo">
                  <span>{repo.skill}</span>
                  <span className="text-2xl pr-8 text-custom-blue">•</span>
                  <img src={data} alt="Storage" className="w-3 h-3" />
                  <span className="pr-8">{repo.storage}</span>
                  <span>{repo.updatedAt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hamburger Button */}
      <button
        onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
        className="md:hidden absolute top-4 right-4 text-3xl"
      >
        {isHamburgerOpen ? "X" : "☰"}
      </button>
    </div>
  );
};

export default Home;
