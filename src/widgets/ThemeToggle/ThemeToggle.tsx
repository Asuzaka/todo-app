"use client";

import { useEffect, useState } from "react";
import { FiMoon } from "react-icons/fi";
import { LuSun } from "react-icons/lu";
import { GetThemePreference, SwitchTheme } from "@/features/index";

export function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    GetThemePreference(setLight);
  }, []);

  return (
    <>
      <button
        className="rounded-full cursor-pointer"
        onClick={() => SwitchTheme(light, setLight)}
      >
        {light ? (
          <FiMoon color="black" size={28} />
        ) : (
          <LuSun color="yellow" size={28} />
        )}
      </button>
    </>
  );
}
