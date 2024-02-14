import { useEffect, useState } from "react";
import NEPFormAction from "./NEPFormAction"
import { NEPDatepicker, NEPInput, NEPRadio, NEPSelect } from "./forms/NEPFormComponets"
import { useForm, Controller } from "react-hook-form"

const NEPForm = ({data, lang}) => {

    const [dValues, setDValues] = useState({})
    const { reset, control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {...data.defaultValues}
    });

    const onSubmit = async (values) => {
        try{
            console.log(values)
        }catch(error){
            console.log(error)
        }
    }

    const gettingDefaultValues = ()=> {
        const defaultValue = {}

        data.formFields?.map(item=> defaultValue[item.key] = '')

        setDValues(defaultValue)

    }

    useEffect(()=> {
        gettingDefaultValues();
    }, [])

  return (
    <div className="nep_stepper_form">
        {
            data?.formFields && 
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="nep_stepper_grid">

                    {
                        data.formFields?.map((item)=> (
                            item.field.type == 'input' ? 
                            <Controller
                                key={`${data.key}_${item.key}`}
                                name={item.key}
                                control={control}
                                rules={{ required: item.field.require }}
                                render={({ field }) => (
                                    <NEPInput 
                                        id={item.id}
                                        title={item.label[lang]}
                                        cssClass={'half_'}
                                        type={item.field.inputType}
                                        controller={{...field}}
                                        error={errors[item.key]}
                                    />

                                )}
                            />
                            :
                            item.field.type == 'select' ?
                            <Controller
                                key={`${data.key}_${item.key}`}
                                name={item.key}
                                control={control}
                                rules={{ required: item.field.require }}
                                render={({ field }) => (
                                    <NEPSelect 
                                        id={item.id}
                                        title={item.label[lang]}
                                        cssClass={'half_'}
                                        placeholder={item.field.placeholderText}
                                        controller={{...field}}
                                        data={item.field.options}
                                        error={errors[item.key]}
                                    />

                                )}
                            />
                            :
                            item.field.type == 'datepicker' ?
                            <Controller
                                key={`${data.key}_${item.key}`}
                                name={item.key}
                                control={control}
                                rules={{ required: item.field.require }}
                                render={({ field }) => (
                                    <NEPDatepicker 
                                        id={item.id}
                                        title={item.label[lang]}
                                        cssClass={'half_'}
                                        customHeader={true}
                                        years={item.field.range}
                                        controller={{...field}}
                                        error={errors[item.key]}
                                    />

                                )}
                            />
                            :
                            item.field.type == 'radio' ?
                            <Controller
                                key={`${data.key}_${item.key}`}
                                name={item.key}
                                control={control}
                                rules={{ required: item.field.require }}
                                render={({ field }) => (
                                    <NEPRadio 
                                        id={item.id}
                                        title={item.label[lang]}
                                        cssClass={'full_'}
                                        type={item.field.inputType}
                                        data={item.value[lang]}
                                        error={errors[item.key]}
                                        controller={{...field}}
                                    /> 
                                )}
                            />
                            
                            :
                            undefined
                        ))
                    }
                
                </div>
                <NEPFormAction />
            </form>
        }
    </div>
  )
}

export default NEPForm