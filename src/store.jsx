import { create } from "zustand";

export const useStore = create((set) => ({
  playerXName: "",
  playerXSelection: [],
  playerXWin: false,
  playerOName: "",
  playerOSelection: [],
  playerOWin: false,
  isTurn: true,

  //   Set name of playerX and playerO
  setPlayerXName: (nameOfPlayerX) =>
    set(() => ({ playerXName: nameOfPlayerX })),
  setPlayerOName: (nameOfPlayerO) =>
    set(() => ({ playerOName: nameOfPlayerO })),

  //   In each selection put values of div number to X and O selection box respectively

  //   set win to true for winning
}));
