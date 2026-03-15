import React from 'react';
import './SidebarDayItem.css';
import { ReactComponent as TickIcon } from '../assets/svg/tick.svg';
import { ReactComponent as LockIcon } from '../assets/svg/lock.svg';

function SidebarDayItem({ day, active, locked, onClick }) {
  const className = `sidebar-day-item${active ? ' active' : ''}${locked ? ' locked' : ''}`;

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      aria-current={active ? 'step' : undefined}
    >
      <span className="sidebar-day-label">{day}</span>
      <span className="sidebar-day-icon" aria-hidden="true">
        { locked ? <LockIcon className={'lock-icon' + (active ? ' active' : '')} /> : <TickIcon className={'tick-icon' + (active ? ' active' : '')} /> }
      </span>
    </button>
  );
}

export default SidebarDayItem;
