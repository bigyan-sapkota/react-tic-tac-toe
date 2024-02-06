import React, { useState } from "react";

const winningCombination = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const cellNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const GameBoard = () => {
  const [clickedBox, setClickedBox] = useState([]);

  // check if the div is already filled and whose turn is it
  // if the turn is of player x , add it to selection array of player X SORTING IT else to player O
  // check for winning, if won, display the won screen
  return (
    <div className="mt-10">
      <div className="grid grid-cols-3 gap-1 w-[301px] h-[303px] bg-black border-4 border-white">
        {cellNumbers.map((cellNumber) => {
          return (
            <div
              key={cellNumber}
              className="bg-white h-24 w-24 flex items-center justify-center"
              onClick={() => clickHandler(cellNumber)}
            >
              {cellNumber}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameBoard;
