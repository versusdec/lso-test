import { useCallback, useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState()
  
  const get = useCallback(() => {
    return localStorage.getItem('theme')
  }, [])
  
  const set = useCallback((val) => {
    setTheme(val)
    localStorage.setItem('theme', val)
  }, [])
  
  useEffect(() => {
    setTheme(get() || 'light')
  }, [])
  
  return {theme, setTheme: set}
}