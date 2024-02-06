import React, { useState } from "react";
import { useStore } from "../store";
import { Link } from "react-router-dom";

const Home = () => {
  const setPlayerXName = useStore((state) => state.setPlayerXName);
  const setPlayerOName = useStore((state) => state.setPlayerOName);

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter Player X Name"
          className="input-text"
          onChange={(e) => {
            setPlayerXName(e.target.value);
          }}
        />
        <br />

        <input
          type="text"
          placeholder="Enter Player O Name"
          className="input-text"
          onChange={(e) => {
            setPlayerOName(e.target.value);
          }}
        />
        <br />

        <Link to="/game">
          <button type="button">Game</button>
        </Link>
      </form>
    </div>
  );
};

export default Home;
