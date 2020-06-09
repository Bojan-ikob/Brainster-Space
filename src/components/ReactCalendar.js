import React, { useState, Fragment } from "react";
import Calendar from "react-calendar";
import "../css/calendar.css";
import 'react-calendar/dist/Calendar.css';

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());
  const onChange = date => {
    setDate(date);
  };
  return (
    <Fragment>
      <div className="calendar">
        <h1>Календар</h1>
        <Calendar onChange={onChange} value={date} />
      </div>
    </Fragment>
  );
};

export default ReactCalendar;
