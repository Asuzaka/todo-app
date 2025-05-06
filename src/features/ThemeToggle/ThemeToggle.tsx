"use client";

import { useEffect, useState } from "react";
import { FiMoon } from "react-icons/fi";
import { LuSun } from "react-icons/lu";

export default function ThemeToggle() {
  const [light, setLight] = useState(false);

  // Automatic theme set from Localstorage / User System preference
  useEffect(() => {
    const systemPref = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;
    if (localStorage.getItem("light")) {
      setLight(true);
      document.body.classList.add("light");
    } else if (systemPref) {
      setLight(systemPref);
      document.body.classList.add("light");
    }
  }, []);

  const toggle = () => {
    if (light) {
      setLight(false);
      localStorage.removeItem("light");
      document.body.classList.remove("light");
    } else {
      setLight(true);
      localStorage.setItem("light", `000x1b`);
      document.body.classList.add("light");
    }
  };

  return (
    <>
      <button className="rounded-full cursor-pointer" onClick={toggle}>
        {light ? (
          <FiMoon color="black" size={28} />
        ) : (
          <LuSun color="yellow" size={28} />
        )}
      </button>
    </>
  );
}
