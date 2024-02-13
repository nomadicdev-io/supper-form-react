export const NEPInput = ({title, type, controller, cssClass, error})=> {
  return (
    <div className={`nep_form_inputfield ${cssClass ? cssClass : ''} ${error ? 'error_' :  ''}`}>
        <label htmlFor={'id'} >{'Label Name'}<em>*</em></label>
        <input type={'text'} id={'id'}/>
    </div>
  )
}