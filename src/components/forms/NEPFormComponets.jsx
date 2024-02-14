import Select from 'react-select';
import { FaCheck } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import { LuCalendarDays } from "react-icons/lu";
import "react-datepicker/dist/react-datepicker.css";
import { getMonth, getYear } from "date-fns";
import { useState } from 'react';

export const NEPInput = ({title, type, controller, cssClass, error, id})=> {
  return (
    <div className={`nep_form_inputfield ${cssClass ? cssClass : ''} ${error ? 'error_' :  ''}`}>
        <label htmlFor={id} >{title}<em>*</em></label>
        <input type={type} {...controller} id={id}/>
    </div>
  )
}

export const NEPTextarea = ({title, type, controller, cssClass, error})=> {
  return (
    <>

    </>
  )
}

export const NEPRadio = ({title, type, controller, cssClass, data, error})=> {
  return (
    <div className={`nep_form_inputfield ${cssClass ? cssClass : ''} ${error ? 'error_' :  ''}`}>
          <label>{title}</label>
          <div className='radio_group'>

              {
                  data?.map((e, i)=> (
                      <div className='radio_' key={`genderID${i}`}>
                          <input type={type} name={title} value={e.value} {...controller}/>
                          <span></span>
                          <p>{e.name}</p>
                      </div>
                  ))
              }

          </div>
      </div>
  )
}

export const NEPCheckbox = ({children, cssClass, controller, error})=> {
  return (
    <>
      
    </>
  )
}

export const NEPSelect = ({title, controller, cssClass, data, placeholder, isSearchable, error, id})=> {
  return (
    <div className={`nep_form_inputfield ${cssClass ? cssClass : ''} ${error ? 'error_' :  ''}`}>
        <label >{title}</label>
        <Select
            options={data}
            className="r_select"
            placeholder={placeholder}
            classNamePrefix={'r_select_pre'}
            {...controller}
            id={id}
            instanceId={id}
            isSearchable={isSearchable ? isSearchable : true}
        />
    </div>
  )
}

export const NEPDatepicker = ({title, controller, cssClass, customHeader, years, error, id})=> {
    const [date] = useState(years ? new Date(years[0], 0) : new Date());

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

    const datePickerHeader = ({ date,changeYear,changeMonth,decreaseMonth,increaseMonth,prevMonthButtonDisabled,nextMonthButtonDisabled,}) => (
        <div className="custom_datepicker_header">
          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            {"<"}
          </button>
          <select value={getYear(date)} onChange={({ target: { value } }) => changeYear(value)}>
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select value={months[getMonth(date)]} onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            {">"}
          </button>
        </div>
    )

    return (
        <div className={`nep_form_inputfield ${cssClass} ${error ? 'error_' :  ''}`}>
            <label htmlFor={id} >{title}</label>
            <div className='datepicker_'>
                <DatePicker 
                renderCustomHeader={customHeader ? datePickerHeader : null}
                {...controller} 
                selected={controller.value ? controller.value : date}
                />
                <div className='icon_'>
                    <LuCalendarDays />
                </div>
            </div>
        </div>
    )
}