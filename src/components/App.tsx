import React, { useState, useRef, Suspense } from 'react';
//redux stuff
import { createStore } from 'redux';
import allReducer from '../reducers/allReducer';
import { Provider } from 'react-redux';
//components
const Sidebar = React.lazy(() => import('./Sidebar'));
const Main = React.lazy(() => import('./Main'));
import Style from './Style';
import MediaStyle from './MediaStyle';
import constants from '../helper/constants';
import Loading from './Loading';
const { DEFAULT_THEME } = constants;

const store = createStore(allReducer);

export default function App() {
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
      <Suspense fallback={<Loading theme={theme} />}>
        <Provider store={store}>
          <Sidebar ref={sidebarRef} onSidebarToggle={sidebarToggle} />
          <Main
            ref={sidebarIconRef}
            onToggleTheme={toggleTheme}
            onSidebarToggle={sidebarToggle}
          />
        </Provider>
      </Suspense>
    </>
  );
}
