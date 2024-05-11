"use client";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";
const ThemeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMounted(true), []);
  return (
    <div>
      {mounted && currentTheme === "dark" ? (
        <MdLightMode
          onClick={() => setTheme("light")}
          className="text-3xl cursor-pointer"
        />
      ) : (
        <MdDarkMode
          onClick={() => setTheme("dark")}
          className="text-3xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default ThemeSwitch;
