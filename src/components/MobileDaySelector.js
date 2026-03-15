import React, { useState } from 'react';
import './MobileDaySelector.css';
import { ReactComponent as BackIcon } from '../assets/svg/back.svg';
import { ReactComponent as InfoIcon } from '../assets/svg/info.svg';
import { ReactComponent as LockIcon } from '../assets/svg/lock-mobile.svg';
import { useTheme } from '../contexts/ThemeContext';

const MobileDaySelector = () => {
  const [activeDay, setActiveDay] = useState(1);
  const { theme, toggleTheme } = useTheme();

  const days = Array.from({ length: 9 }, (_, i) => ({
    day: i + 1,
    completed: i < 1, // Day 1 completed
    locked: i > 0, // Days after 1 locked
  }));

  const handleDayClick = (day) => {
    setActiveDay(day);
  };

  return (
    <div className="mobile-day-selector">
      <div className="mobile-header">
        <div className="left-section-mobile">
            <span className="back-arrow-mobile" onClick={() => {alert('Back Pressed')}} title="Go Back">
                <BackIcon className="back-arrow-icon-mobile" />
            </span>
            <span className="days-mobile">9-Day Fitness Challenge</span>
        </div>
        <div className="right-section-mobile">
          <button className="icon-button-mobile" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
            <span  className="info-mobile">
                <InfoIcon className="info-icon-mobile" />
            </span>
        </div>
      </div>
      <div className="selector-container">
        {days.map(({ day, completed, locked }) => (
          <button
            key={day}
            className={`day-pill ${activeDay === day ? 'active' : ''} ${locked ? 'locked' : ''} ${completed ? 'completed' : ''}`}
            onClick={() => handleDayClick(day)}
          >
            <span className="day-number">Day {!locked ? '' : day}</span>
            {locked && <LockIcon className="lock" />}
            {!locked && <span className="active-day">{day}</span>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileDaySelector;