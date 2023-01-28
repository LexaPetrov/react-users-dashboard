import { ThemeProvider as Provider, createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { ThemeSwitch } from 'shared/ui';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

type ThemeProviderProps = {
  children: React.ReactElement[];
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const theme = localStorage.getItem('theme') || 'dark';
  const [mode, setMode] = useState(theme);

  const selectedTheme = mode === 'dark' ? darkTheme : lightTheme;

  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  return (
    <Provider theme={selectedTheme}>
      <ThemeSwitch
        sx={{ position: 'fixed', bottom: 5 }}
        onChange={() => setMode(mode === 'light' ? 'dark' : 'light')}
      />
      {children}
    </Provider>
  );
};
