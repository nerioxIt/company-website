import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    
    // If theme in localStorage, use it
    if (savedTheme) {
      return savedTheme;
    }
    
    // Otherwise check user preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    
    // Default to light
    return "light";
  });

  useEffect(() => {
    // Update localStorage when theme changes
    localStorage.setItem("theme", theme);
    
    // Update the class on the html element with optimized transition
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    
    // Temporarily disable transitions for instant theme switch
    bodyElement.classList.add('theme-transition-disabled');
    
    // Use flushSync to ensure DOM updates are applied immediately
    if (theme === "dark") {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
    
    // Use double requestAnimationFrame for more reliable timing
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bodyElement.classList.remove('theme-transition-disabled');
      });
    });
  }, [theme]);

  const toggleTheme = useCallback(() => {
    // Immediately disable transitions before state change
    const bodyElement = document.body;
    bodyElement.classList.add('theme-transition-disabled');
    
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
