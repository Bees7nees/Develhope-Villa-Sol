import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import styles from '../Styles/CalendarBooking.module.scss';
const CalendarComponent = ({setDate, prevDate, nextDate}) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker className={styles.myDatePicker} selected={startDate} onChange={(date) => {
      if (prevDate){
        if (prevDate < date){
          setDate(date)
          setStartDate(date)
        }
      }
      else if(nextDate){
        if (nextDate > date){
          setDate(date)
          setStartDate(date)
      }
    }
      else {
        setDate(date)
          setStartDate(date)
      }
      
      }}  calendarClassName={styles.myCustomCalendar} />
  );
};

export default CalendarComponent;
