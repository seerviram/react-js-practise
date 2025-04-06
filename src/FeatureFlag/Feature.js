import React, { useState, useEffect } from "react";


const Banner = () => {
    return <div className="banner">Welcome to our awesome app!</div>;
  };
  
  // An info message component that displays a random joke
  const InfoMessage = () => {
    const joke =
      "What do you call a fish wearing a bowtie? Sofishticated.";
    return <div className="info-message">{joke}</div>;
  };
  
  // The app component that uses the feature flag component
  const AppBanner = () => {
    return (
      <div className="app">
        {/* Use the feature flag component to show or hide the banner */}
        <FeatureFlag feature="show-banner">
          <Banner />
        </FeatureFlag>
        {/* Use the feature flag component to show or hide the info message */}
        <FeatureFlag feature="show-info-message">
          <InfoMessage />
        </FeatureFlag>
      </div>
    );
  };
  

// A custom hook to access and update the feature flag values in the local storage
const useFeatureFlag = (key, defaultValue) => {
  // Get the initial value from the local storage or use the default value
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  });

  // Sync the state with the local storage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  // Return the state and a setter function
  return [value, setValue];
};

// A feature flag component that renders its children only if the feature flag is enabled
const FeatureFlag = ({ feature, children }) => {
  // Use the feature flag hook to get the value and the setter function
  const [enabled, setEnabled] = useFeatureFlag(feature, false);

  // Render a checkbox to toggle the feature flag value
  return (
    <div className="feature-flag">
      <label>
        <input
          type="checkbox"
          checked={enabled}
          onChange={(e) => setEnabled(e.target.checked)}
        />
        {feature}
      </label>
      {/* Render children only if the feature flag is enabled */}
      {enabled && children}
    </div>
  );
};

export default AppBanner;