import React from "react";

export function GetThemePreference(
  setLight: React.Dispatch<React.SetStateAction<boolean>>
) {
  const systemPref = window.matchMedia("(prefers-color-scheme: light)").matches;

  if (localStorage.getItem("light")) {
    setLight(true);
    document.body.classList.add("light");
  } else if (localStorage.getItem("modifiedTheme")) {
    // skip next step
  } else if (systemPref) {
    setLight(systemPref);
    document.body.classList.add("light");
  }
}
