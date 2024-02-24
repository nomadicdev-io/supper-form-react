import React from 'react'
import { TbEdit } from "react-icons/tb";

const NEPApplicationForm = ({children, title, description}) => {
  return (

    <div className='nep_application_formarea'>    
      <div className="form_title">
          <div className='icon_'>
            <TbEdit />
          </div>
         <div className='text_'>
          <h3>{title}</h3>
            <p>{description}</p>
         </div>
      </div>

      <div className="nep_application_formbody">
        
          {children}

      </div>
    </div>

  )
}

export default NEPApplicationForm