import React from "react";

export function toggle(
  light: boolean,
  setLight: React.Dispatch<React.SetStateAction<boolean>>
) {
  if (!localStorage.getItem("modifiedTheme")) {
    localStorage.setItem("modifiedTheme", "000x2b");
  }
  if (light) {
    setLight(false);
    localStorage.removeItem("light");
    document.body.classList.remove("light");
  } else {
    setLight(true);
    localStorage.setItem("light", `000x1b`);
    document.body.classList.add("light");
  }
}
