import React, { useState } from 'react';
import './Sidebar.css';
import SidebarDayItem from './SidebarDayItem';

const days = [
  { id: 1, name: 'Day - 1', locked: false },
  { id: 2, name: 'Day - 2', locked: true },
  { id: 3, name: 'Day - 3', locked: true },
  { id: 4, name: 'Day - 4', locked: true },
  { id: 5, name: 'Day - 5', locked: true },
  { id: 6, name: 'Day - 6', locked: true },
  { id: 7, name: 'Day - 7', locked: true },
  { id: 8, name: 'Day - 8', locked: true },
  { id: 9, name: 'Day - 9', locked: true },
];

function Sidebar() {
  const [activeDay, setActiveDay] = useState(1);

  return (
    <aside className="sidebar">
      <div className="sidebar-items">
        {days.map((day) => (
          <SidebarDayItem
            key={day.id}
            day={day.name}
            active={activeDay === day.id}
            locked={day.locked}
            onClick={() => {
              setActiveDay(day.id);
            }}
          />
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
