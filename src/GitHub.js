import React, { useState } from "react";
import axios from "axios";

const GitHubUserFinder = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchGitHubUser = async () => {
    setLoading(true);
    setError(null);
    setUserData(null);
    setRepos([]);
    
    try {
      const userResponse = await axios.get(`https://api.github.com/users/${username}`);
      const repoResponse = await axios.get(`https://api.github.com/users/${username}/repos?sort=stars&per_page=5`);
      
      setUserData(userResponse.data);
      setRepos(repoResponse.data);
    } catch (err) {
      setError("User not found or API rate limit exceeded.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">GitHub User Finder</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub Username"
          className="border p-2 rounded"
        />
        <button
          onClick={fetchGitHubUser}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {userData && (
        <div className="bg-white p-6 rounded shadow-lg text-center w-96">
          <img src={userData.avatar_url} alt="Profile" className="w-24 h-24 rounded-full mx-auto" />
          <h2 className="text-xl font-bold mt-2">{userData.name || "No Name"}</h2>
          <p>{userData.bio || "No bio available."}</p>
          <p className="text-gray-600">Followers: {userData.followers}</p>
        </div>
      )}
      {repos.length > 0 && (
        <div className="mt-4 w-96">
          <h3 className="text-lg font-bold">Top 5 Repositories</h3>
          <ul>
            {repos.map((repo) => (
              <li key={repo.id} className="bg-white p-2 mt-2 rounded shadow">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold">
                  {repo.name}
                </a>
                <p>{repo.description || "No description available."}</p>
                <p className="text-gray-600">⭐ {repo.stargazers_count}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GitHubUserFinder;