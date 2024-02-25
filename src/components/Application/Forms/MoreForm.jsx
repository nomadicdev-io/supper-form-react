import { useEffect, useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { NEPInput } from "../../forms/NEPFormComponets";
import NEPFormSectionDescription from "../../forms/NEPFormSectionDescription";
import { useAtom } from "jotai";
import { applicationFormContext } from "../../../App";

const MoreForm = () => {

    const [formContext, setFormContext] = useAtom(applicationFormContext)
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

    useEffect(()=> {
        setFormContext({
            ...formContext,
            tabIndex: 2
        })
    }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="nep_stepper_grid">
        <NEPFormSectionDescription
            description={'Please submit two 1-minute videos (one in English and one in Arabic) in which you present yourself, your vision for your sector, and why you should be selected for NEP 4.0. In each video, please begin by stating your name, position, organization, and emirate of residence. Then, please tell us about the following:'}
            isIcon={false}
        >
            <ul>
                <li>Your vision for the future of your sector</li>
                <li>Your leadership experience, including any leadership roles outside of work</li>
                <li>Why you are an excellent candidate for NEP 4.0</li>
                <li>Any other interesting information that would help us get to know you better – hobbies, activities, etc</li>
            </ul>

            <p>Please upload both videos to YouTube with privacy set to “Unlisted” and share the video URLs below.</p>
        </NEPFormSectionDescription>

        <Controller
            key={'english_video_url'}
            name={'english_video_url'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <NEPInput 
                    id={'english_video_url'}
                    title={'English video URL'}
                    cssClass={'half_'}
                    type={'text'}
                    controller={{...field}}
                    error={errors.english_video_url}
                />

            )}
        />

        <Controller
            key={'arabic_video_url'}
            name={'arabic_video_url'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <NEPInput 
                    id={'arabic_video_url'}
                    title={'Arabic video URL'}
                    cssClass={'half_'}
                    type={'text'}
                    controller={{...field}}
                    error={errors.arabic_video_url}
                />

            )}
        />

        <hr className="full_" />

        <NEPFormSectionDescription description={'Optionally, you may add links to your social media account in the fields below'} isIcon={false}/>

        <Controller
            key={'linkedin_url'}
            name={'linkedin_url'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <NEPInput 
                    id={'linkedin_url'}
                    title={'Linkedin URL'}
                    cssClass={'half_'}
                    type={'text'}
                    controller={{...field}}
                    error={errors.linkedin_url}
                />

            )}
        />

        <Controller
            key={'instagram_url'}
            name={'instagram_url'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <NEPInput 
                    id={'instagram_url'}
                    title={'Instagram URL'}
                    cssClass={'half_'}
                    type={'text'}
                    controller={{...field}}
                    error={errors.instagram_url}
                />

            )}
        />

        <Controller
            key={'twitter_url'}
            name={'twitter_url'}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
                <NEPInput 
                    id={'twitter_url'}
                    title={'Twitter URL'}
                    cssClass={'half_'}
                    type={'text'}
                    controller={{...field}}
                    error={errors.twitter_url}
                />

            )}
        />

    </form>
  )
}

export default MoreForm