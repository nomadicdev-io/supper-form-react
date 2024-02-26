import { useEffect, useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { NEPTextarea, NEPSelect } from "../../forms/NEPFormComponets";
import { useAtom } from "jotai";
import { LS, applicationFormContext } from "../../../App";

const MotivationForm = () => {
    
    const [formContext, setFormContext] = useAtom(applicationFormContext)
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

    useEffect(()=> {
        LS.setItem('tab_index', 2)
        setFormContext({
            ...formContext,
            tabIndex: 2,
            activeVideoURL: 'https://api-hcms-textract.s3.eu-west-2.amazonaws.com/open/bot/nep/registration/factors_to_inspire.mp4'
        })
    }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="nep_stepper_grid">

        <Controller
            key={'motivation_1'}
            name={'motivation_1'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <NEPTextarea 
                    id={'minedset_1'}
                    title={'Why are you interested in joining the National Experts Program? ( Minimum 100 Words )'}
                    cssClass={'full_'}
                    type={'text'}
                    controller={{...field}}
                    error={errors.motivation_1}
                />

            )}
        />

        <Controller
            key={'sectory_applied'}
            name={'sectory_applied'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <NEPSelect 
                    id={'sectory_applied'}
                    title={'Which sector would you like to apply for? '}
                    cssClass={'full_'}
                    placeholder={'Choose Sector'}
                    controller={{...field}}
                    data={sampleOptions}
                    error={errors.sectory_applied}
                />

            )}
        />

        <Controller
            key={'sector_experience'}
            name={'sector_experience'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <NEPSelect 
                    id={'sector_experience'}
                    title={'How many years have you worked in your sector?'}
                    cssClass={'full_'}
                    placeholder={'Select Experience'}
                    controller={{...field}}
                    data={sampleOptions}
                    error={errors.sector_experience}
                />

            )}
        />

        <Controller
            key={'motivation_2'}
            name={'motivation_2'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <NEPTextarea 
                    id={'minedset_2'}
                    title={'Describe your current role in your sector.'}
                    cssClass={'full_'}
                    type={'text'}
                    controller={{...field}}
                    error={errors.motivation_1}
                />

            )}
        />

        <Controller
            key={'motivation_3'}
            name={'motivation_3'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <NEPTextarea 
                    id={'minedset_3'}
                    title={'Provide 3 specific examples of global trends or technological innovations that you believe will change your sector in the next five years, and why?(200 words max.)'}
                    cssClass={'full_'}
                    type={'text'}
                    controller={{...field}}
                    error={errors.motivation_1}
                />

            )}
        />

        

    </form>
  )
}

export default MotivationForm