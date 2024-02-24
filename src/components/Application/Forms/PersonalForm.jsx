import { useEffect, useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { NEPInput } from "../../forms/NEPFormComponets";

const PersonalForm = () => {

    const { reset, control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {}
    });


    const onSubmit = async (values) => {
        try{
            console.log(values)
        }catch(error){
            console.log(error)
        }
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="nep_stepper_grid">
        <Controller
            key={'first_name'}
            name={'first_name'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <NEPInput 
                    id={'first_name'}
                    title={'First Name'}
                    cssClass={'half_'}
                    type={'text'}
                    controller={{...field}}
                    error={errors.first_name}
                />

            )}
        />

        <Controller
            key={'last_name'}
            name={'last_name'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <NEPInput 
                    id={'last_name'}
                    title={'Last Name'}
                    cssClass={'half_'}
                    type={'text'}
                    controller={{...field}}
                    error={errors.last_name}
                />

            )}
        />

        <Controller
            key={'email'}
            name={'email'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <NEPInput 
                    id={'email'}
                    title={'Email'}
                    cssClass={'half_'}
                    type={'email'}
                    controller={{...field}}
                    error={errors.email}
                />

            )}
        />

        <Controller
            key={'last_name'}
            name={'last_name'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <NEPInput 
                    id={'last_name'}
                    title={'Last Name'}
                    cssClass={'half_'}
                    type={'text'}
                    controller={{...field}}
                    error={errors.last_name}
                />

            )}
        />
    </form>
  )
}

export default PersonalForm