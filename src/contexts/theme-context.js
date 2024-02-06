import { createContext, useContext, useState } from "react";
import { useTheme } from "../hooks/use-theme";

export const ThemeContext = createContext({theme: 'light'});

export const ThemeProvider = ({children}) => {
  const {theme, setTheme} = useTheme()
  
  const updateData = (val) => {
    setTheme(val)
  }
  
  return (<ThemeContext.Provider value={{theme, setTheme: updateData}}><div data-theme={theme}>{children}</div></ThemeContext.Provider>)
}

export const useThemeContext = ()=> useContext(ThemeContext)