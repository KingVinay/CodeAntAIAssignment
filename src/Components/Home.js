import React, { useState } from "react";

const Home = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState(null);

  const repositories = [
    {
      name: "Repo1",
      type: "Public",
      skill: "React, JavaScript",
      storage: "3424KB",
      updatedAt: "2 days ago",
    },
    {
      name: "Repo2",
      type: "Private",
      skill: "Python",
      storage: "7489KB",
      updatedAt: "5 days ago",
    },
    {
      name: "Repo3",
      type: "Public",
      skill: "React",
      storage: "5120KB",
      updatedAt: "3 days ago",
    },
    {
      name: "Repo4",
      type: "Private",
      skill: "JavaScript",
      storage: "2048KB",
      updatedAt: "1 day ago",
    },
    {
      name: "Repo5",
      type: "Public",
      skill: "Python, React",
      storage: "1024KB",
      updatedAt: "10 hours ago",
    },
    {
      name: "Repo6",
      type: "Public",
      skill: "Node.js",
      storage: "2048KB",
      updatedAt: "8 hours ago",
    },
    {
      name: "Repo7",
      type: "Private",
      skill: "JavaScript, React",
      storage: "4096KB",
      updatedAt: "4 days ago",
    },
  ];

  const handleLogout = () => {
    // Handle logout logic, possibly redirect to Sign-In component
  };

  const handleSelect = (repo) => {
    setSelectedRepo(repo);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Component */}
      <div
        className={`w-full md:w-1/5 bg-gray-100 p-4 md:p-6 flex flex-col items-center md:block sticky top-0 z-10 ${
          isHamburgerOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-center mb-6">
          <img
            src="https://via.placeholder.com/100"
            alt="Logo"
            className="mb-4"
          />
          <h2 className="text-xl font-semibold">CodeAnt AI</h2>
        </div>

        {/* Name Box */}
        <div className="w-full mb-6 flex items-center justify-between border border-gray-300 rounded-md p-2">
          <span className="truncate max-w-[150px]">
            {selectedRepo ? selectedRepo.name : "Select a repository"}
          </span>
          <img
            src="down-arrow.svg"
            alt="down arrow"
            className="cursor-pointer"
          />
        </div>

        {/* Buttons */}
        <div className="w-full flex flex-col items-start space-y-2 mb-6">
          <button className="flex items-center space-x-2 w-full py-2 px-4 text-left bg-white border rounded-md shadow-md hover:bg-gray-100">
            <img
              src="repositories-icon.svg"
              alt="Repositories"
              className="w-5 h-5"
            />
            <span>Repositories</span>
          </button>
          <button className="flex items-center space-x-2 w-full py-2 px-4 text-left bg-white border rounded-md shadow-md hover:bg-gray-100">
            <img
              src="ai-code-review-icon.svg"
              alt="AI Code Review"
              className="w-5 h-5"
            />
            <span>AI Code Review</span>
          </button>
          <button className="flex items-center space-x-2 w-full py-2 px-4 text-left bg-white border rounded-md shadow-md hover:bg-gray-100">
            <img
              src="cloud-security-icon.svg"
              alt="Cloud Security"
              className="w-5 h-5"
            />
            <span>Cloud Security</span>
          </button>
          <button className="flex items-center space-x-2 w-full py-2 px-4 text-left bg-white border rounded-md shadow-md hover:bg-gray-100">
            <img
              src="how-to-use-icon.svg"
              alt="How to Use"
              className="w-5 h-5"
            />
            <span>How to Use</span>
          </button>
          <button className="flex items-center space-x-2 w-full py-2 px-4 text-left bg-white border rounded-md shadow-md hover:bg-gray-100">
            <img src="settings-icon.svg" alt="Settings" className="w-5 h-5" />
            <span>Settings</span>
          </button>
        </div>

        {/* Bottom Buttons */}
        <div className="mt-auto w-full flex flex-col items-start space-y-2">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 w-full py-2 px-4 text-left bg-white border rounded-md shadow-md hover:bg-gray-100"
          >
            <img src="logout-icon.svg" alt="Logout" className="w-5 h-5" />
            <span>Logout</span>
          </button>
          <button className="flex items-center space-x-2 w-full py-2 px-4 text-left bg-white border rounded-md shadow-md hover:bg-gray-100">
            <img src="support-icon.svg" alt="Support" className="w-5 h-5" />
            <span>Support</span>
          </button>
        </div>
      </div>

      {/* Right Component */}
      <div
        className={`w-full md:w-4/5 bg-white p-4 md:p-6 ${
          isHamburgerOpen ? "w-full" : "md:w-4/5"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">Repositories</h3>
        </div>

        <span className="text-sm text-gray-500 mb-4">
          50 total Repositories
        </span>

        {/* For Mobile: Refresh & Add Repository above search */}
        <div className="sm:flex sm:justify-between sm:items-center sm:mb-6 mb-4">
          <div className="flex space-x-2">
            <button className="flex items-center py-2 px-4 bg-blue-500 text-white rounded-md">
              <img src="refresh-icon.svg" alt="Refresh" className="w-5 h-5" />
              <span>Refresh</span>
            </button>
            <button className="flex items-center py-2 px-4 bg-blue-500 text-white rounded-md">
              <img
                src="add-repository-icon.svg"
                alt="Add Repository"
                className="w-5 h-5"
              />
              <span>Add Repository</span>
            </button>
          </div>
        </div>

        {/* Search Input */}
        <div className="mb-6 flex items-center space-x-2">
          <img src="search-icon.svg" alt="Search" className="w-5 h-5" />
          <input
            type="text"
            className="p-2 border rounded-md w-full"
            placeholder="Search repositories..."
          />
        </div>

        {/* Repository List - Display all repositories in a column */}
        <div className="flex flex-col space-y-4">
          {repositories.slice(0, 7).map((repo) => (
            <div
              key={repo.name}
              className="border p-4 rounded-md hover:shadow-lg flex items-start space-x-4"
            >
              <img src="repo-icon.svg" alt={repo.name} className="w-12 h-12" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className="font-semibold">{repo.name}</h4>
                  <span className="text-sm text-blue-500">{repo.type}</span>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <span>{repo.skill}</span>
                  <span className="text-blue-500">•</span>
                  <img src="book-icon.svg" alt="Storage" className="w-4 h-4" />
                  <span>{repo.storage}</span>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  {repo.updatedAt}
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
