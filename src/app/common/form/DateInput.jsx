import React,{useState} from "react";
import DatePicker from "react-datepicker";
import {Form,Label} from 'semantic-ui-react'
 
import "react-datepicker/dist/react-datepicker.css";



const DateInput = ({meta:{touched,error},...rest}) => {
    const [date,setDate] = useState(new Date())

    const handleChange = date => {
        setDate(date);
      };
  return (
      <Form.Field error={touched && !!error}>
    <DatePicker {...rest}
        selected={date}
        onChange={handleChange}
      />
      {touched && error && <Label basic color ='red'>{error}</Label>}
      </Form.Field>
  )
}

export default DateInput
