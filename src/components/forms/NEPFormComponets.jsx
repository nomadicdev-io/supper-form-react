export const NEPInput = ({title, type, controller, cssClass, error})=> {
  return (
    <div className={`nep_form_inputfield ${cssClass ? cssClass : ''} ${error ? 'error_' :  ''}`}>
        <label htmlFor={'id'} >{'Label Name'}<em>*</em></label>
        <input type={'text'} id={'id'}/>
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
    <>

    </>
  )
}

export const NEPCheckbox = ({children, cssClass, controller, error})=> {
  return (
    <>
      
    </>
  )
}

export const NEPSelect = ({title, controller, cssClass, data, placeholder, isSearchable, error})=> {
  return (
    <>
      
    </>
  )
}

export const NEPDatepicker = ({title, controller, cssClass, customHeader, years, error})=> {
  return (
    <>
      
    </>
  )
}