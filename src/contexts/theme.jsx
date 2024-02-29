import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [cookies, setCookie] = useCookies(["theme"]);
  // const storedTheme = localStorage.getItem("theme") || "light";
  const storedTheme = cookies.theme || "light";
  const [themeMode, setThemeMode] = useState(storedTheme);

  const lightTheme = () => {
    setThemeMode("light");
    setCookie("theme", "light", { path: "/" });
  };

  const darkTheme = () => {
    setThemeMode("dark");
    setCookie("theme", "dark", { path: "/" });
  };

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(themeMode);
    // localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, lightTheme, darkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useTheme() {
  return useContext(ThemeContext);
}
