import { useEffect, useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { NEPDatepicker, NEPInput, NEPRadio, NEPSelect } from "../../forms/NEPFormComponets";

const PersonalForm = () => {

    const { reset, control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {}
    });

    const sampleOptions = [
        {label: 'Select Option 1', value: 'Select Option 1'},
        {label: 'Select Option 2', value: 'Select Option 2'}, 
        {label: 'Select Option 3', value: 'Select Option 3'}, 
        {label: 'Select Option 4', value: 'Select Option 4'}
    ]

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
            key={`dob`}
            name={`dob`}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <NEPDatepicker 
                    id={`dob`}
                    title={'Date of Birth'}
                    cssClass={'half_'}
                    customHeader={true}
                    years={[1989, 2010]}
                    controller={{...field}}
                    error={errors.dob}
                />

            )}
        />

        <Controller
            key={'gender'}
            name={'gender'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <NEPRadio 
                    id={'gender'}
                    title={'Gender'}
                    cssClass={'half_'}
                    type={'radio'}
                    data={[{name: 'Male', value: 'male'}, {name: 'Female', value: 'female'}]}
                    error={errors.gender}
                    controller={{...field}}
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
            key={'phone_number'}
            name={'phone_number'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <NEPInput 
                    id={'phone_number'}
                    title={'Phone Number'}
                    cssClass={'half_'}
                    type={'number'}
                    controller={{...field}}
                    error={errors.phone_number}
                />

            )}
        />

        <Controller
            key={'country'}
            name={'country'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <NEPSelect 
                    id={'country'}
                    title={'Country'}
                    cssClass={'half_'}
                    placeholder={'Choose Country'}
                    controller={{...field}}
                    data={sampleOptions}
                    error={errors.country}
                />

            )}
        />

        <Controller
            key={'emirates_of_residence'}
            name={'emirates_of_residence'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <NEPSelect 
                    id={'emirates_of_residence'}
                    title={'Emirate of Residence'}
                    cssClass={'half_'}
                    placeholder={'Choose Emirate'}
                    controller={{...field}}
                    data={sampleOptions}
                    error={errors.emirates_of_residence}
                />

            )}
        />

        <Controller
            key={'outside_uae'}
            name={'outside_uae'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <NEPRadio 
                    id={'outside_uae'}
                    title={'If you are currently outside the UAE, are you willing to relocate in order to participate in the program?'}
                    cssClass={'full_'}
                    type={'radio'}
                    data={[{name: 'Yes', value: 'yes'}, {name: 'No', value: 'no'}, {name: 'I live in the UAE', value: 'i_live_in_the_uae'}]}
                    error={errors.outside_uae}
                    controller={{...field}}
                /> 
            )}
        />

        <Controller
            key={'is_referel'}
            name={'is_referel'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <NEPRadio 
                    id={'is_referel'}
                    title={'Were you nominated by a National Experts community member? (You can continue to complete the application without a nomination.)'}
                    cssClass={'full_'}
                    type={'radio'}
                    data={[{name: 'Yes', value: 'yes'}, {name: 'No', value: 'no'}]}
                    error={errors.is_referel}
                    controller={{...field}}
                /> 
            )}
        />
    </form>
  )
}

export default PersonalForm