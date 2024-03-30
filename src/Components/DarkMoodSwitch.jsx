"use client";
import React, { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";

const DarkMoodSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme == "system" ? systemTheme : theme;
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode onClick={() => setTheme("light")} />
        ) : (
          <MdDarkMode onClick={() => setTheme("dark")} />
        ))}
    </div>
  );
};

export default DarkMoodSwitch;
