import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContest } from './ThemeContest';

interface UseThemeResult {
	toggleTheme: () => void
	theme: Theme
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContest);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  return {
    theme, toggleTheme,
  };
}
