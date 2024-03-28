import { LOCALSTORAGE_THEME_KEY } from "@/const/const";
import { Themes } from "@/const/theme";
import { createContext, useEffect, useMemo, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children, initialTheme }) => {
   const [theme, setTheme] = useState(initialTheme || Themes.LIGHT);
   useEffect(() => {
      const data = localStorage.getItem(LOCALSTORAGE_THEME_KEY);
      if (data) {
         setTheme(data);
      }
   }, []);

   useEffect(() => {
      localStorage.setItem(LOCALSTORAGE_THEME_KEY, theme);
   }, [theme]);

   const defaultProps = useMemo(
      () => ({
         theme, 
         setTheme,
      }), [theme]);

   return (<ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>);
};

export { ThemeProvider };
