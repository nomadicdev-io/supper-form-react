import { useEffect, useState } from 'react';
import Select from 'react-select';
import { FaCheck } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import { RiUploadCloud2Line } from "react-icons/ri";
import { LuCalendarDays } from "react-icons/lu";
import "react-datepicker/dist/react-datepicker.css";
import { getMonth, getYear } from "date-fns";
import { MdOutlinePermMedia } from "react-icons/md";
import { IoMdClose } from "react-icons/io";


import { 
  TbFileTypePng, 
  TbFileTypeJpg, 
  TbFileTypePdf, 
  TbFileTypeSvg, 
  TbFileTypeZip,  
  TbFileTypeDoc,
  TbFileTypeDocx,
  TbFileTypeTxt
} from "react-icons/tb";


export const NEPInput = ({title, type, controller, cssClass, error, id})=> {
  return (
    <div className={`nep_form_inputfield ${cssClass ? cssClass : ''} ${error ? 'error_' :  ''}`}>
        <label htmlFor={id} >{title}<em>*</em></label>
        <input type={type} {...controller} id={id}/>
    </div>
  )
}

export const NEPTextarea = ({title, type, controller, cssClass, error, id})=> {
  return (
    <div className={`nep_form_inputfield ${cssClass ? cssClass : ''} ${error ? 'error_' :  ''}`}>
        <label htmlFor={id} >{title}<em>*</em></label>
        <textarea type={type} {...controller} id={id}/>
    </div>
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

export const NEPCheckbox = ({title, controller, cssClass, error, id, label})=> {
  return (
    <div className={`nep_form_inputfield ${cssClass ? cssClass : ''} ${error ? 'error_' :  ''}`}>
      <label htmlFor={id} >{label}</label>
      <div className='checkbox_'>
        <input type={'checkbox'} {...controller} id={id}/>
        <span>
          <FaCheck />
        </span>
        <p>{title}</p>
      </div>
  </div>
  )
}
export const NEPUpload = ({title, controller, cssClass, error, id, infoText, fileTypes})=> {

  const [isDragged, setIsDragged] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [uploadArray, setUploadArray] = useState([])

  const deleteFile = (value)=> {

      let updatedFiles = [...uploadArray];
      value > 0 ? updatedFiles.splice(value, 1) : updatedFiles = []

      setUploadArray(updatedFiles)

  }

  const uploadFn = async (event)=> {

    try{  
      
      setIsDragged(false)
      setIsLoading(true)

      const uploadSchema = {}
      const file = event.target.files[0];

      if(!file) return

      const fileTypeArray = fileTypes.split(',')
      const fileExtension = file.type.split('/').slice(-1)[0]

      if(!fileTypeArray.includes(`.${fileExtension}`)){
        alert('Unsupported File Type!')
        setIsLoading(false)
        return
      }

      const formData = new FormData();
      formData.append('file', file);      

      uploadSchema.name = file.name
      uploadSchema.size = (file.size / 1048576).toFixed(2)
      uploadSchema.type = file.type
      uploadSchema.extension = fileExtension
      uploadSchema.file = formData

      setUploadArray([...uploadArray, uploadSchema])

      setTimeout(()=> {
        setIsLoading(false)
      }, 300)

    }catch(error){
      console.log(error)
    }

    
  }

  return (
    <div className={`nep_form_inputfield ${cssClass ? cssClass : ''} ${error ? 'error_' :  ''}`}>
        <label htmlFor={id} >{title}<em>*</em></label>
        <div 
          className={`file_upload ${isDragged ? 'dragged_' : ''}`} 
          onDragEnter={()=> setIsDragged(true)} 
          onDragLeave={()=> setIsDragged(false)}
        >
            <div className='icon_'>
              <RiUploadCloud2Line />
            </div> 
            <div className='upload_title'><span>Click to upload</span> or drag and drop</div>
            <div className='helper_text'>{infoText}</div>
            <input type={'file'} {...controller} id={id} onChange={uploadFn} accept={fileTypes}/>

            {
              isLoading &&
              <div className='upload_loader'>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="24px" height="30px" viewBox="0 0 24 30" xmlSpace="preserve">
                  <rect x="0" y="0" width="4" height="10" fill="#333">
                    <animateTransform attributeType="xml"
                      attributeName="transform" type="translate"
                      values="0 0; 0 20; 0 0"
                      begin="0" dur="0.6s" repeatCount="indefinite" />
                  </rect>
                  <rect x="10" y="0" width="4" height="10" fill="#333">
                    <animateTransform attributeType="xml"
                      attributeName="transform" type="translate"
                      values="0 0; 0 20; 0 0"
                      begin="0.2s" dur="0.6s" repeatCount="indefinite" />
                  </rect>
                  <rect x="20" y="0" width="4" height="10" fill="#333">
                    <animateTransform attributeType="xml"
                      attributeName="transform" type="translate"
                      values="0 0; 0 20; 0 0"
                      begin="0.4s" dur="0.6s" repeatCount="indefinite" />
                  </rect>
                </svg>
              </div>
            }
        </div>

        {
          uploadArray.length > 0 &&

          <div className='file_uploaded_list'>
            {
              uploadArray.map((item, index)=> (
                <div className='upload_item' title={item.name} key={'upploadList' + (Math.random())}>
                  <div className='icon_'>

                      {
                        item.extension == 'png' ?
                        <TbFileTypePng /> :
                        item.extension == 'jpg' || item.extension == 'jpeg' ?
                        <TbFileTypeJpg /> :
                        item.extension == 'svg' ?
                        <TbFileTypeSvg /> :
                        item.extension == 'pdf' ?
                        <TbFileTypePdf /> :
                        item.extension == 'doc' ?
                        <TbFileTypeDoc /> :
                        item.extension == 'docx' ?
                        <TbFileTypeDocx /> :
                        item.extension == 'txt' ?
                        <TbFileTypeTxt /> :
                        item.extension == 'zip' ?
                        <TbFileTypeZip /> :
                        <MdOutlinePermMedia />
                      }
                    
                  </div>
                  <div className='info_'>
                    <div className='name_'>{item.name}</div>
                    <div className='size_'>{item.size} MB</div>
                  </div>
                  <div className='progress_'>100%</div>
                  <button className='close_' type='button' onClick={()=> deleteFile(index)}><IoMdClose /></button>
                </div>
              ))
            }
          </div>
        }

    </div>
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
          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled} type='button'>
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

          <button onClick={increaseMonth} disabled={nextMonthButtonDisabled} type='button'>
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