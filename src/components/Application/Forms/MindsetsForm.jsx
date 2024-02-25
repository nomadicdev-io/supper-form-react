import { useEffect, useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { NEPTextarea } from "../../forms/NEPFormComponets";
import NEPFormSectionDescription from "../../forms/NEPFormSectionDescription";

const MindsetsForm = () => {
    
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

        <NEPFormSectionDescription
            description={'Throughout the NEP academic program, participants work to develop five mindsets for lifelong learning — Worldly, Action, Reflective, Analytical and Collaborative (NEP Mindsets). The questions below gauge how you currently employ these mindsets.'}
            isIcon={false}
        />

        <Controller
            key={'minedset_1'}
            name={'minedset_1'}
            control={control}
            rules={{ required: false }}
            render={({ field }) => (
                <NEPTextarea 
                    id={'minedset_1'}
                    title={'Please give us an example of having to adapt your point of view to find a solution to a problem. What did you learn in the process? (300 words max.)'}
                    cssClass={'full_'}
                    type={'text'}
                    controller={{...field}}
                    error={errors.minedset_1}
                />

            )}
        />

        <Controller
            key={'minedset_2'}
            name={'minedset_2'}
            control={control}
            rules={{ required: false }}
            render={({ field }) => (
                <NEPTextarea 
                    id={'minedset_2'}
                    title={'Describe a time when you were part of instituting a change that was not entirely well received. What was the most important lesson you learned? (300 words max.)'}
                    cssClass={'full_'}
                    type={'text'}
                    controller={{...field}}
                    error={errors.minedset_2}
                />

            )}
        />

        <Controller
            key={'minedset_3'}
            name={'minedset_3'}
            control={control}
            rules={{ required: false }}
            render={({ field }) => (
                <NEPTextarea 
                    id={'minedset_3'}
                    title={'What strategies do you use to take stock of your own performance? (300 words max.)'}
                    cssClass={'full_'}
                    type={'text'}
                    controller={{...field}}
                    error={errors.minedset_1}
                />

            )}
        />

        <Controller
            key={'minedset_4'}
            name={'minedset_4'}
            control={control}
            rules={{ required: false }}
            render={({ field }) => (
                <NEPTextarea 
                    id={'minedset_4'}
                    title={'Give an example of approaching a complex problem inside your organization where you successfully broke down the issue into smaller tasks that your team was then able to act on. (300 words max.)'}
                    cssClass={'full_'}
                    type={'text'}
                    controller={{...field}}
                    error={errors.minedset_1}
                />

            )}
        />

        <Controller
            key={'minedset_5'}
            name={'minedset_5'}
            control={control}
            rules={{ required: false }}
            render={({ field }) => (
                <NEPTextarea 
                    id={'minedset_5'}
                    title={'How do you ensure that colleagues ideas have been considered and valued when working with a group? (300 words max.)'}
                    cssClass={'full_'}
                    type={'text'}
                    controller={{...field}}
                    error={errors.minedset_5}
                />

            )}
        />

    </form>
  )
}

export default MindsetsForm