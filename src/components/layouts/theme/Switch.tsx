'use client';

import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@/components/icon/Icons';

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
      <button  onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <p>
          {
            theme === "light" ? <MoonIcon/>  : <SunIcon/>
          }
        </p>
      </button>
  );
};

export default ThemeSwitch;
