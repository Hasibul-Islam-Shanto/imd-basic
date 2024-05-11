import { ThemeProvider } from "next-themes";
import React from "react";

interface GlobalThemeProviderProps {
  children: React.ReactNode;
}

const GlobalThemeProvider = ({ children }: GlobalThemeProviderProps) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-500">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default GlobalThemeProvider;
