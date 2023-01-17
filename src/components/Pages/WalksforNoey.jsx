import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './WalksforNoey.css';


function WalksforNoey() {
  const [ day ] = useState(new Date(2023, 1, 1));
  const [ dayArray, setDayArray ] = useState([]);
  const [ disabledDay, setDisabledDay ] = useState([]);

  const onClickDay = (day) => {
    const localDay = day.toLocaleDateString();
    setDayArray(dayArray.concat(localDay));
    setDisabledDay(disabledDay.concat(localDay))
  }

  const onClickClear = () => {
    setDayArray([]);
    setDisabledDay([]);
  }

  const tileDisabled = ({ date, view }) => {
    const local = date.toLocaleDateString();
    if (disabledDay.includes(local)) {
      return true
    }
  }

  return (
    <div className='container'>
      <header>
        <h1>Walks for Noey</h1>
      </header>       
      <div className='calendar'>
         <main className='calendar-container'>
            <Calendar 
                defaultActiveStartDate={new Date(2023, 1, 1)}
                value={day} 
                onClickDay={(day) => onClickDay(day)} 
                // these set the days that can be selected
                maxDate={new Date(2023, 2, 5)}
                minDate={new Date(2023, 1, 13)}
                tileDisabled={tileDisabled}
                 />
         </main>
      </div>
      <div className='calendar'>
        <main className='calendar-container'>
          <button 
            style={{
              margin: '5px',
              width: '200px',
              boxShadow: '0 0 8px rgba(0, 0, 0, 0.5)',
            }} 
            onClick={onClickClear}>CLEAR</button>
          <p 
            style={{
              fontSize: '1.15em',
              lineHeight: '1.5',
          }}>
            You've selected the following days to look after Noey:
          </p>
          <ul 
            style={{
              fontSize: '1.15em',
              lineHeight: '1.5',
          }}>
            {dayArray.map((date) => {
              return <li key={date}>{date}</li>
            })}
          </ul>
          <button 
            style={{
              margin: '50px',
              width: '200px',
              boxShadow: '0 0 8px rgba(0, 0, 0, 0.5)',
            }}
            onClick={onClickClear}>COMMIT</button>
        </main>
      </div>
      
      
    </div>
  )
}

export default WalksforNoey;
