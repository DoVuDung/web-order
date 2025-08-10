"use client";

import { Button } from "@heroui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  console.log("theme ===", theme);
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add("[&_*]:!transition-none");
    window.setTimeout(() => {
      document.documentElement.classList.remove("[&_*]:!transition-none");
    }, 0);
  }

  useEffect(() => {
    disableTransitionsTemporarily();
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    const isSystemDarkMode = darkModeMediaQuery.matches;
    console.log("isSystemDarkMode", isSystemDarkMode);
    const isDarkMode = document.documentElement.classList.toggle("dark");
    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode;
    } else {
      window.localStorage.isDarkMode = isDarkMode;
    }
  }, []);

  return (
    <div>
      {theme === "light" ? (
        <Button
        onPress={() => setTheme("dark")}
        isIconOnly
        variant="light"
        size="md"
      >
        <FaRegMoon />
      </Button>
        
      ) : (
        <Button
          onPress={() => setTheme("light")}
          isIconOnly
          variant="light"
          size="md"
        >
          <GoSun />
        </Button>
      )}
    </div>
  );
}
