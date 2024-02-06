import React from "react";
import { useStore } from "../store";
import { RxCross2 } from "react-icons/rx";
import { TbCircle } from "react-icons/tb";

const NavBar = () => {
  const playerXName = useStore((state) => state.playerXName);
  const playerOName = useStore((state) => state.playerOName);

  const users = [
    { id: 1, name: playerXName, icon: <RxCross2 /> },
    { id: 2, name: playerOName, icon: <TbCircle /> },
  ];
  return (
    <nav className="flex justify-between">
      {/* Logo */}
      <div>
        <img src="/logo.png" alt="" className="w-44" />
      </div>

      {/* User names */}
      <div>
        {users.map((user) => {
          return (
            <div key={user.id} className="flex">
              <div>{user.icon}</div>
              <p>{user.name}</p>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
