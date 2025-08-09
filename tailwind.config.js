// tailwind.config.js
import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export const content = [
  "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
];

export const plugins = [heroui()];