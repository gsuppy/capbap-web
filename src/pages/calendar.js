import {Calendar as ReactCalendar} from 'react-calendar';

// TODO: Import live events onto calendar
function Calendar() {
  return (
    <div>
      <div className='banner'>
        <img src={process.env.PUBLIC_URL + 'chbc.jpg'} alt=''></img>
      </div>
      <div className="body-text">
      <h2>Calendar</h2>
      <ReactCalendar/>
      </div>
    </div>
  );
}

export default Calendar;