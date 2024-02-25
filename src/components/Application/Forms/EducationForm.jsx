import { useEffect, useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { NEPInput, NEPSelect, NEPUpload } from "../../forms/NEPFormComponets";

const EducationForm = () => {

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
            key={'years_of_work_experience'}
            name={'years_of_work_experience'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <NEPSelect 
                    id={'years_of_work_experience'}
                    title={'Years of Work Experience'}
                    cssClass={'half_'}
                    placeholder={'Choose Experience'}
                    controller={{...field}}
                    data={sampleOptions}
                    error={errors.years_of_work_experience}
                />

            )}
        />

        <Controller
            key={'current_employment_status'}
            name={'current_employment_status'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <NEPSelect 
                    id={'current_employment_status'}
                    title={'Current Employment Status'}
                    cssClass={'half_'}
                    placeholder={'Choose Status'}
                    controller={{...field}}
                    data={sampleOptions}
                    error={errors.current_employment_status}
                />

            )}
        />

        <Controller
            key={'recent_photo'}
            name={'recent_photo'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <NEPUpload 
                    id={'recent_photo'}
                    title={'Please upload a recent photo of yourself'}
                    cssClass={'half_'}
                    controller={{...field}}
                    error={errors.recent_photo}
                    infoText={'(File type: jpg,jpeg,png) (File size: 2MB max)'}
                    fileTypes={'.jpg,.png,.jpeg,.svg,.webp'}
                />

            )}
        />      

        <Controller
            key={'user_cv'}
            name={'user_cv'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <NEPUpload 
                    id={'user_cv'}
                    title={'Please upload your CV'}
                    cssClass={'half_'}
                    controller={{...field}}
                    error={errors.user_cv}
                    infoText={'(File type: pdf) (File size: 2MB max)'}
                    fileTypes={'.pdf'}
                />

            )}
        />      

        <Controller
            key={'degree_earned_year'}
            name={'degree_earned_year'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <NEPInput 
                    id={'degree_earned_year'}
                    title={'Degree earned and year conferred'}
                    cssClass={'half_'}
                    type={'number'}
                    controller={{...field}}
                    error={errors.degree_earned_year}
                />

            )}
        />

        <Controller
            key={'field_of_study'}
            name={'field_of_study'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <NEPInput 
                    id={'field_of_study'}
                    title={'Field of study'}
                    cssClass={'half_'}
                    type={'text'}
                    controller={{...field}}
                    error={errors.field_of_study}
                />

            )}
        />

        <Controller
            key={'issuing_school_university'}
            name={'issuing_school_university'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <NEPInput 
                    id={'issuing_school_university'}
                    title={'Issuing school or university'}
                    cssClass={'half_'}
                    type={'text'}
                    controller={{...field}}
                    error={errors.issuing_school_university}
                />

            )}
        />

        <Controller
            key={'country_of_school_university'}
            name={'country_of_school_university'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <NEPSelect 
                    id={'country_of_school_university'}
                    title={'Country of school or university'}
                    cssClass={'half_'}
                    placeholder={'Choose Experience'}
                    controller={{...field}}
                    data={sampleOptions}
                    error={errors.country_of_school_university}
                />

            )}
        />
        

    </form>
  )
}

export default EducationForm