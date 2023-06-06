import React, { useState } from "react";

function MaximumVideoGames() {
  const [numGames, setNumGames] = useState("");
  const [amount, setAmount] = useState("");
  const [gameCosts, setGameCosts] = useState("");
  const [maxGamesMessage, setMaxGamesMessage] = useState("");

  const calculateMaxGames = () => {
    const availableAmount = parseInt(amount);
    const costs = gameCosts.split(",").map((cost) => parseInt(cost.trim()));

    const sortedCosts = costs.sort((a, b) => a - b);
    let result = 0;
    let remainingAmount = availableAmount;

    for (const cost of sortedCosts) {
      if (cost <= remainingAmount) {
        remainingAmount -= cost;
        result++;
      } else {
        break;
      }
    }

    if (result >= costs.length) {
      setMaxGamesMessage("You can buy all toys.");
    } else {
      setMaxGamesMessage(`Maximum number of games you can buy: ${result}`);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Maximum Video Games</h1>
      <div className="form-group">
        <label htmlFor="numGames" className="label">
          Number of Video Games:
        </label>
        <input
          type="number"
          id="numGames"
          min="1"
          value={numGames}
          onChange={(e) => setNumGames(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount" className="label">
          Amount Available:
        </label>
        <input
          type="number"
          id="amount"
          min="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="gameCosts" className="label">
          Game Costs:
        </label>
        <input
          type="text"
          id="gameCosts"
          placeholder="Enter game costs, separated by commas"
          value={gameCosts}
          onChange={(e) => setGameCosts(e.target.value)}
          required
        />
      </div>
      <button className="calculate-btn" onClick={calculateMaxGames}>
        Calculate
      </button>
      {maxGamesMessage !== "" && <p className="result">{maxGamesMessage}</p>}
    </div>
  );
}

export default MaximumVideoGames;
