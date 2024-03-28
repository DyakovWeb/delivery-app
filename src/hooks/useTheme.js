import { Themes } from "@/const/theme";
import { ThemeContext } from "@/providers/ThemeProvider";
import { useContext } from "react";

const useTheme = () => {
   const { theme, setTheme } = useContext(ThemeContext);
   const toggleTheme = () => {
      let newTheme;
      switch (theme) {
         case Themes.DARK:
            newTheme = Themes.LIGHT;
            break;
         case Themes.LIGHT:
            newTheme = Themes.DARK;
            break;
         default:
            newTheme = Themes.LIGHT;
            break;
      }
      setTheme(newTheme);
   };
   return {
      theme: theme || Themes.LIGHT,
      toggleTheme,
   };
};

export { useTheme };
