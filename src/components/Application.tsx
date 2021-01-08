import React, { useState, useRef } from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import Style from './Style';
import MediaStyle from './MediaStyle';
import constants from '../helper/constants';
const { DEFAULT_THEME } = constants;

export default function Application() {
  const [theme, setTheme] = useState(
    (localStorage.getItem('theme') as Theme) || (DEFAULT_THEME as Theme)
  );
  const sidebarRef = useRef<HTMLDivElement>(null);
  const sidebarIconRef = useRef<HTMLDivElement>(null);

  function sidebarToggle(): void {
    const sidebar: HTMLElement | null = sidebarRef.current;
    const sidebarIcon: HTMLElement | null = sidebarIconRef.current;
    sidebar?.classList.toggle('sidebar_shown');
    sidebarIcon?.classList.toggle('main__sidebar-icon_closing');
  }

  function toggleTheme(): void {
    let currentTheme: Theme;
    setTheme((prevTheme: Theme) => {
      currentTheme = prevTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', currentTheme);
      return currentTheme;
    });
  }

  return (
    <>
      <Style theme={theme} />
      <MediaStyle />
      {/* @ts-ignore */}
      <Sidebar ref={sidebarRef} onSidebarToggle={sidebarToggle} />
      <Main
        ref={sidebarIconRef}
        // @ts-ignore
        onToggleTheme={toggleTheme}
        onSidebarToggle={sidebarToggle}
      />
    </>
  );
}
