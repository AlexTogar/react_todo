import React, { useState, useRef } from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import Style from './Style';
import MediaStyle from './MediaStyle';
import constants from '../helper/constants';
const { DEFAULT_THEME } = constants;

export default function Application() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || DEFAULT_THEME
  );
  const sidebarRef = useRef();
  const sidebarIconRef = useRef();

  function sidebarToggle() {  
    const sidebar = this.sidebarRef.current;
    const sidebarIcon = this.sidebarIconRef.current;
    sidebar.classList.toggle('sidebar_shown');
    sidebarIcon.classList.toggle('main__sidebar-icon_closing');
  }

  function toggleTheme() {
    let currentTheme;
    setTheme((prevTheme) => {
      currentTheme = prevTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', currentTheme);
      return currentTheme;
    });
  }

  return (
    <>
      <Style theme={theme} />
      <MediaStyle />
      <Sidebar
        onSidebarToggle={sidebarToggle}
        forwardedSidebarRef={sidebarRef}
      />
      <Main
        onSidebarToggle={sidebarToggle}
        forwardedSidebarIconRef={sidebarIconRef}
        onToggleTheme={toggleTheme}
      />
    </>
  );
}
