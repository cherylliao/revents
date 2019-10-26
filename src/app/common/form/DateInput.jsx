import React,{useState} from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";



const DateInput = () => {
    const [date,setDate] = useState(new Date())

    const handleChange = date => {
        setDate(date);
      };
  return (
    <DatePicker
        selected={date}
        onChange={handleChange}
      />
  )
}

export default DateInput
