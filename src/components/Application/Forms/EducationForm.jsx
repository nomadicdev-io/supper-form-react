import { useEffect, useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { NEPInput, NEPSelect, NEPUpload } from "../../forms/NEPFormComponets";
import { FaPlus } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { useAtom } from "jotai";
import { applicationFormContext } from "../../../App";

const EducationForm = () => {

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

    const [educationArray, setEducationArray] = useState([])

    const addEducation = ()=> {setEducationArray([...educationArray, 1])}

    const removeEducation = (value)=> {
        let newArray = [...educationArray];
        value > 0 ? newArray.splice(value, 1) : newArray = []
        setEducationArray(newArray)
    }

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
            tabIndex: 1,
            activeVideoURL: 'https://api-hcms-textract.s3.eu-west-2.amazonaws.com/open/bot/nep/registration/academic_background.mp4'
        })
    }, [])

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

        {
            educationArray.length > 0 &&
            educationArray.map((item, index)=> (
                <div className="nep_subform_fields full_" key={'education_list' + index}>
                    <div className="nep_stepper_grid">

                        <div className="nep_form_title_wrapper">
                            <h3 className="nep_form_subtitle">Education Information - <span>{index + 1 < 10 ? '0'+(index + 1): (index + 1)}</span></h3>
                            <button className="nep_icon_btn red_ sm_" type="button" onClick={()=> removeEducation(index)} >
                                <i><FaTrashAlt /></i>
                            </button>
                        </div>

                        <Controller
                            key={'extra_degree_earned_year'}
                            name={'extra_degree_earned_year'}
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <NEPInput 
                                    id={'extra_degree_earned_year'}
                                    title={'Degree earned and year conferred'}
                                    cssClass={'half_'}
                                    type={'number'}
                                    controller={{...field}}
                                    error={errors.extra_degree_earned_year}
                                />

                            )}
                        />

                        <Controller
                            key={'extra_field_of_study'}
                            name={'extra_field_of_study'}
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <NEPInput 
                                    id={'extra_field_of_study'}
                                    title={'Field of study'}
                                    cssClass={'half_'}
                                    type={'text'}
                                    controller={{...field}}
                                    error={errors.extra_field_of_study}
                                />

                            )}
                        />

                        <Controller
                            key={'extra_issuing_school_university'}
                            name={'extra_issuing_school_university'}
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <NEPInput 
                                    id={'extra_issuing_school_university'}
                                    title={'Issuing school or university'}
                                    cssClass={'half_'}
                                    type={'text'}
                                    controller={{...field}}
                                    error={errors.extra_issuing_school_university}
                                />

                            )}
                        />

                        <Controller
                            key={'extra_country_of_school_university'}
                            name={'extra_country_of_school_university'}
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <NEPSelect 
                                    id={'extra_country_of_school_university'}
                                    title={'Country of school or university'}
                                    cssClass={'half_'}
                                    placeholder={'Choose Experience'}
                                    controller={{...field}}
                                    data={sampleOptions}
                                    error={errors.extra_country_of_school_university}
                                />

                            )}
                        />
                        
                    </div>
                </div>
            ))
        }

        <div className="nep_btn_group">
            <button className="nep_btn dark_" type="button" onClick={addEducation}>
                <span>Add More Education History</span>
                <i><FaPlus /></i>
            </button>
        </div>

        

    </form>
  )
}

export default EducationForm