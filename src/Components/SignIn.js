import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BigLogo from "../Assets/BigLogo.png";
import Stats from "../Assets/Stats.png";
import Issues from "../Assets/Issues.png";
import SmallLogo from "../Assets/SmallLogo.png";
import GithubLogo from "../Assets/github.png";
import BitbucketLogo from "../Assets/bitbucket.png";
import GitLabLogo from "../Assets/gitlab.png";
import AzureDevopsLogo from "../Assets/azure.png";

const SignIn = () => {
  const [isSaas, setIsSaas] = useState(false);
  const navigate = useNavigate();

  const handleSaaSClick = () => {
    setIsSaas(true);
  };

  const handleSelfHostedClick = () => {
    setIsSaas(false);
  };

  const handleLogin = (provider) => {
    navigate("/home");
  };

  return (
    <div className="flex h-screen flex-col md:flex-row">
      {/* Left Side */}
      <div className="w-full md:w-1/2 relative bg-white flex items-center justify-center md:block hidden">
        <div className="absolute left-0 bottom-0 p-6">
          <img src={BigLogo} alt="Logo" className="h-60" />
        </div>
        <div className="relative">
          <img
            src={Stats}
            alt="Large"
            className="w-96 h-44 rounded-xl mx-auto mt-28 mb-4"
          />
          <img
            src={Issues}
            alt="Small"
            className="w-66 h-44 rounded-xl absolute top-24 right-36 transform translate-x-8 translate-y-8"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 bg-gray-50 flex flex-col items-center justify-center p-8">
        <div className="w-11/12 bg-white flex flex-col items-center">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-6">
              <img src={SmallLogo} alt="Logo" className="h-12 mb-2" />
              <h3 className="text-2xl ml-4 mt-4 font-extralight">CodeAnt AI</h3>
            </div>
            <h2 className="text-3xl font-semibold">Welcome to CodeAnt AI</h2>
          </div>

          <div className="flex space-x-4 mb-6">
            <button
              onClick={handleSaaSClick}
              className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition"
            >
              SAAS
            </button>
            <button
              onClick={handleSelfHostedClick}
              className="bg-gray-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-gray-600 transition"
            >
              Self Hosted
            </button>
          </div>

          {isSaas ? (
            <div className="space-y-4">
              <button
                onClick={() => handleLogin("github")}
                className="w-full flex items-center justify-center bg-gray-800 text-white py-3 rounded-md shadow-md space-x-2"
              >
                <img src="/github-logo.svg" alt="GitHub" className="w-6 h-6" />
                <span>Sign in with Github</span>
              </button>
              <button
                onClick={() => handleLogin("bitbucket")}
                className="w-full flex items-center justify-center bg-blue-500 text-white py-3 rounded-md shadow-md space-x-2"
              >
                <img
                  src="/bitbucket-logo.svg"
                  alt="Bitbucket"
                  className="w-6 h-6"
                />
                <span>Sign in with Bitbucket</span>
              </button>
              <button
                onClick={() => handleLogin("azure")}
                className="w-full flex items-center justify-center bg-blue-700 text-white py-3 rounded-md shadow-md space-x-2"
              >
                <img
                  src="/azure-logo.svg"
                  alt="Azure DevOps"
                  className="w-6 h-6"
                />
                <span>Sign in with Azure DevOps</span>
              </button>
              <button
                onClick={() => handleLogin("gitlab")}
                className="w-full flex items-center justify-center bg-red-600 text-white py-3 rounded-md shadow-md space-x-2"
              >
                <img src="/gitlab-logo.svg" alt="GitLab" className="w-6 h-6" />
                <span>Sign in with GitLab</span>
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <button
                onClick={() => handleLogin("gitlab-self-hosted")}
                className="w-full flex items-center justify-center bg-green-500 text-white py-3 rounded-md shadow-md space-x-2"
              >
                <span>Self Hosted GitLab</span>
              </button>
              <button
                onClick={() => handleLogin("sso")}
                className="w-full flex items-center justify-center bg-yellow-500 text-white py-3 rounded-md shadow-md space-x-2"
              >
                <span>Sign in with SSO</span>
              </button>
            </div>
          )}
        </div>

        <p className="text-sm mt-6 text-center text-gray-600">
          By signing up you agree to the{" "}
          <a href="/privacy-policy" className="text-blue-500">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default SignIn;
