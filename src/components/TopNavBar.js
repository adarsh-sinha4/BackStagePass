import React from 'react';
import './TopNavBar.css';
import { useTheme } from '../contexts/ThemeContext';
import { ReactComponent as BellIcon } from '../assets/svg/bell.svg';

const Icon = ({ children, label }) => (
  <button className="icon-button" aria-label={label} type="button">
    {children}
  </button>
);

function TopNavBar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="top-nav-bar">
      <div className="nav-left">
        <img
          className="logo-icon"
          src={require('../assets/png/logo.png')}
          alt="BackstagePass logo"
        />
        <span className="logo">
          Backstage
          <span className="logo-pass">Pass</span>
        </span>
      </div>

      <div className="nav-right">
        <button className="icon-button" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <Icon label="Streak">🔥 30</Icon>
        <button className="bell-button" aria-label="Messages">
          <BellIcon className="bell-icon" stroke={'var(--bell-fill)'} fill={'var(--bell-fill)'} />
        </button>
        <img
          className="avatar"
          src={require('../assets/png/admin.png')}
          alt="User avatar"
        />
      </div>
    </header>
  );
}

export default TopNavBar;
