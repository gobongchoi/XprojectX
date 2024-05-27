import React, { useState } from 'react';
import './header.css'; // Adjust the path as necessary

function Header() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getMonthYear = (date: Date) => {
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    return { month, year };
  };

  const { month, year } = getMonthYear(currentDate);

  const handlePreviousMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    setCurrentDate(newDate);
  };

  return (
    <div className='Titel'>
      <button className='Arrow' onClick={handlePreviousMonth}>&lt;</button>
      <div className='Month'>
        {month}
      </div>
      <div className='Year'>
        {year}
      </div>
      <button className='Arrow' onClick={handleNextMonth}>&gt;</button>
    </div>
  );
}

export default Header;
