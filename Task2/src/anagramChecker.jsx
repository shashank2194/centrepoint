import React, { useState } from "react";

const AnagramChecker = () => {
  const [stringA, setStringA] = useState("");
  const [stringB, setStringB] = useState("");
  const [isAnagram, setIsAnagram] = useState(false);

  const handleInputChange = (event, setString) => {
    setString(event.target.value);
  };

  const checkAnagram = () => {
    const sortedA = stringA.split("").sort().join("");
    const sortedB = stringB.split("").sort().join("");

    setIsAnagram(sortedA === sortedB);
  };

  return (
    <div className="anagram-checker">
      <h1>Anagram Checker</h1>
      <div className="input-group">
        <label htmlFor="stringA">String A:</label>
        <input
          type="text"
          id="stringA"
          value={stringA}
          onChange={(e) => handleInputChange(e, setStringA)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="stringB">String B:</label>
        <input
          type="text"
          id="stringB"
          value={stringB}
          onChange={(e) => handleInputChange(e, setStringB)}
        />
      </div>
      <button onClick={checkAnagram}>Check Anagram</button>
      {isAnagram ? (
        <p className="result yes">True</p>
      ) : (
        <p className="result no">False</p>
      )}
    </div>
  );
};

export default AnagramChecker;
