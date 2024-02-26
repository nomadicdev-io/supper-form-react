import { useEffect, useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { NEPInput, NEPSelect, NEPUpload, NEPDatepicker, NEPCheckbox, NEPTextarea } from "../../forms/NEPFormComponets";
import NEPFormSectionDescription from "../../forms/NEPFormSectionDescription";
import { FaPlus } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { useAtom } from "jotai";
import { LS, applicationFormContext } from "../../../App";

const ExperienceForm = () => {

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

    const [experienceArray, setExperienceArray] = useState([])
    const [referenceArray, setReferenceArray] = useState([])
    const [eventsArray, setEventsarray] = useState([])

    const addExperience = ()=> {setExperienceArray([...experienceArray, 1])}
    const addReference = ()=> {setReferenceArray([...referenceArray, 1])}
    const addEvents = ()=> {setEventsarray([...eventsArray, 1])}

    const removeExperience = (value)=> {
        let newArray = [...experienceArray];
        value > 0 ? newArray.splice(value, 1) : newArray = []
        setExperienceArray(newArray)
    }

    const removeReference = (value)=> {
        let newArray = [...referenceArray];
        value > 0 ? newArray.splice(value, 1) : newArray = []
        setReferenceArray(newArray)
    }

    const removeEvents = (value)=> {
        let newArray = [...eventsArray];
        value > 0 ? newArray.splice(value, 1) : newArray = []
        setEventsarray(newArray)
    }

    const onSubmit = async (values) => {
        try{
            console.log(values)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=> {
        LS.setItem('tab_index', 1)
        setFormContext({
            ...formContext,
            tabIndex: 1,
            activeVideoURL: 'https://api-hcms-textract.s3.eu-west-2.amazonaws.com/open/bot/nep/registration/employment_history_and_contacts.mp4'
        })
    }, [])

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="nep_stepper_grid">
            <Controller
                key={'job_title'}
                name={'job_title'}
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <NEPInput 
                        id={'job_title'}
                        title={'Job Title'}
                        cssClass={'half_'}
                        type={'text'}
                        controller={{...field}}
                        error={errors.job_title}
                    />

                )}
            />

            <Controller
                key={'job_sector'}
                name={'job_sector'}
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <NEPSelect 
                        id={'job_sector'}
                        title={'Sector'}
                        cssClass={'half_'}
                        placeholder={'Choose Sector'}
                        controller={{...field}}
                        data={sampleOptions}
                        error={errors.job_sector}
                    />

                )}
            />

            <Controller
                key={'organization'}
                name={'organization'}
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <NEPInput 
                        id={'organization'}
                        title={'Organization'}
                        cssClass={'full_'}
                        type={'text'}
                        controller={{...field}}
                        error={errors.organization}
                    />

                )}
            />

            <Controller
                key={`start_date`}
                name={`start_date`}
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <NEPDatepicker 
                        id={`start_date`}
                        title={'Start Date'}
                        cssClass={'half_'}
                        customHeader={true}
                        years={[1989, 2010]}
                        controller={{...field}}
                        error={errors.start_date}
                    />

                )}
            />

            <Controller
                key={'current_work'}
                name={'current_work'}
                control={control}
                rules={{ required: false }}
                render={({ field }) => (
                    <NEPCheckbox 
                        id={'current_work'}
                        title={'I currently work here'}
                        cssClass={'half_'}
                        controller={{...field}}
                        error={errors.current_work}
                    />

                )}
            />

            {
                experienceArray.length > 0&&
                experienceArray.map((item, index)=> (
                    <div className="nep_subform_fields full_" key={'experience_list' + index}>
                        <div className="nep_stepper_grid">

                            <div className="nep_form_title_wrapper">
                                <h3 className="nep_form_subtitle">Work Experience - <span>{index + 1 < 10 ? '0'+(index + 1): (index + 1)}</span></h3>
                                <button className="nep_icon_btn red_ sm_" type="button" onClick={()=> removeExperience(index)}> 
                                    <i><FaTrashAlt /></i>
                                </button>
                            </div>

                            <Controller
                                key={'job_title'}
                                name={'job_title'}
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <NEPInput 
                                        id={'job_title'}
                                        title={'Job Title'}
                                        cssClass={'half_'}
                                        type={'text'}
                                        controller={{...field}}
                                        error={errors.job_title}
                                    />

                                )}
                            />

                            <Controller
                                key={'job_sector'}
                                name={'job_sector'}
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <NEPSelect 
                                        id={'job_sector'}
                                        title={'Sector'}
                                        cssClass={'half_'}
                                        placeholder={'Choose Sector'}
                                        controller={{...field}}
                                        data={sampleOptions}
                                        error={errors.job_sector}
                                    />

                                )}
                            />

                            <Controller
                                key={'organization'}
                                name={'organization'}
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <NEPInput 
                                        id={'organization'}
                                        title={'Organization'}
                                        cssClass={'full_'}
                                        type={'text'}
                                        controller={{...field}}
                                        error={errors.organization}
                                    />

                                )}
                            />

                            <Controller
                                key={`exp_start_date`}
                                name={`exp_start_date`}
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <NEPDatepicker 
                                        id={`exp_start_date`}
                                        title={'Start Date'}
                                        cssClass={'half_'}
                                        customHeader={true}
                                        years={[1989, 2010]}
                                        controller={{...field}}
                                        error={errors.exp_start_date}
                                    />

                                )}
                            />

                            <Controller
                                key={`exp_end_date`}
                                name={`exp_start_date`}
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <NEPDatepicker 
                                        id={`exp_start_date`}
                                        title={'End Date'}
                                        cssClass={'half_'}
                                        customHeader={true}
                                        years={[1989, 2010]}
                                        controller={{...field}}
                                        error={errors.exp_start_date}
                                    />

                                )}
                            />

                        </div>
                    </div>
                ))
            }

            <div className="nep_btn_group">
                <button className="nep_btn dark_" type="button" onClick={addExperience}>
                    <span>Add More Experience</span>
                    <i><FaPlus /></i>
                </button>
            </div>

            <Controller
                key={'work_history_gap'}
                name={'work_history_gap'}
                control={control}
                rules={{ required: false }}
                render={({ field }) => (
                    <NEPTextarea 
                        id={'work_history_gap'}
                        title={'If there are gaps in your work history (e.g., academia, national service), please explain here.'}
                        cssClass={'full_'}
                        type={'text'}
                        controller={{...field}}
                        error={errors.work_history_gap}
                    />

                )}
            />

            

            <hr className="full_" />

            <NEPFormSectionDescription
                description={'Please provide up to three references we may contact to confirm your credentials. Reference letters (In PDF form) are a plus'}
            />

            <div className="nep_subform_fields full_">
                <div className="nep_stepper_grid">

                    <div className="nep_form_title_wrapper">
                        <h3 className="nep_form_subtitle">Reference Information</h3>
                    </div>

                    <Controller
                        key={'refrence_full_name'}
                        name={'refrence_full_name'}
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <NEPInput 
                                id={'refrence_full_name'}
                                title={'Full Name'}
                                cssClass={'half_'}
                                type={'text'}
                                controller={{...field}}
                                error={errors.refrence_full_name}
                            />

                        )}
                    />

                    <Controller
                        key={'refrence_full_phone'}
                        name={'refrence_full_phone'}
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <NEPInput 
                                id={'refrence_full_phone'}
                                title={'Phone'}
                                cssClass={'half_'}
                                type={'number'}
                                controller={{...field}}
                                error={errors.refrence_full_phone}
                            />

                        )}
                    />

                    <Controller
                        key={'refrence_full_email'}
                        name={'refrence_full_email'}
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <NEPInput 
                                id={'refrence_full_email'}
                                title={'Email'}
                                cssClass={'half_'}
                                type={'email'}
                                controller={{...field}}
                                error={errors.refrence_full_email}
                            />

                        )}
                    />

                    <Controller
                        key={'refrence_full_letter'}
                        name={'refrence_full_letter'}
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <NEPUpload 
                                id={'refrence_full_letter'}
                                title={'Reference letter'}
                                cssClass={'full_'}
                                controller={{...field}}
                                error={errors.refrence_full_letter}
                                infoText={'(File type: pdf) (File size: 2MB max)'}
                                fileTypes={'.pdf'}
                            />

                        )}
                    />      
                </div>
            </div>

            {
                referenceArray.length > 0 &&
                referenceArray.map((item, index)=> (
                    <div className="nep_subform_fields full_" key={'refrence_list' + index}>
                        <div className="nep_stepper_grid">

                            <div className="nep_form_title_wrapper">
                                <h3 className="nep_form_subtitle">Reference Information - <span>{index + 1 < 10 ? '0'+(index + 1): (index + 1)}</span></h3>
                                <button className="nep_icon_btn red_ sm_" type="button" onClick={()=> removeReference(index)}> 
                                    <i><FaTrashAlt /></i>
                                </button>
                            </div>

                            <Controller
                                key={'refrence_full_name'}
                                name={'refrence_full_name'}
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <NEPInput 
                                        id={'refrence_full_name'}
                                        title={'Full Name'}
                                        cssClass={'half_'}
                                        type={'text'}
                                        controller={{...field}}
                                        error={errors.refrence_full_name}
                                    />

                                )}
                            />

                            <Controller
                                key={'refrence_full_phone'}
                                name={'refrence_full_phone'}
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <NEPInput 
                                        id={'refrence_full_phone'}
                                        title={'Phone'}
                                        cssClass={'half_'}
                                        type={'number'}
                                        controller={{...field}}
                                        error={errors.refrence_full_phone}
                                    />

                                )}
                            />

                            <Controller
                                key={'refrence_full_email'}
                                name={'refrence_full_email'}
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <NEPInput 
                                        id={'refrence_full_email'}
                                        title={'Email'}
                                        cssClass={'half_'}
                                        type={'email'}
                                        controller={{...field}}
                                        error={errors.refrence_full_email}
                                    />

                                )}
                            />

                            <Controller
                                key={'refrence_full_letter'}
                                name={'refrence_full_letter'}
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <NEPUpload 
                                        id={'refrence_full_letter'}
                                        title={'Reference letter'}
                                        cssClass={'full_'}
                                        controller={{...field}}
                                        error={errors.refrence_full_letter}
                                        infoText={'(File type: pdf) (File size: 2MB max)'}
                                        fileTypes={'.pdf'}
                                    />

                                )}
                            />      
                        </div>
                    </div>
                ))
            }

            <div className="nep_btn_group">
                <button className="nep_btn dark_" type="button" onClick={addReference}>
                    <span>Add More Reference</span>
                    <i><FaPlus /></i>
                </button>
            </div>

            <hr className="full_" />

            <Controller
                key={'is_speaker'}
                name={'is_speaker'}
                control={control}
                rules={{ required: false }}
                render={({ field }) => (
                    <NEPTextarea 
                        id={'is_speaker'}
                        title={'Have you ever been a speaker or presenter at an event that included local, national or international authorities and leaders? Please include a link to video, if available.'}
                        cssClass={'full_'}
                        type={'text'}
                        controller={{...field}}
                        error={errors.is_speaker}
                    />

                )}
            />

            {
                eventsArray.length > 0&&
                eventsArray.map((item, index)=> (
                    <div className="nep_subform_fields full_" key={'events_new' + index}>
                        <div className="nep_stepper_grid">

                            <div className="nep_form_title_wrapper">
                                <h3 className="nep_form_subtitle">Event Information - <span>{index + 1 < 10 ? '0'+(index + 1): (index + 1)}</span></h3>
                                <button className="nep_icon_btn red_ sm_" type="button" onClick={()=> removeEvents(index)} >
                                    <i><FaTrashAlt /></i>
                                </button>
                            </div>


                            <Controller
                                key={'event_session'}
                                name={'event_session'}
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <NEPInput 
                                        id={'event_session'}
                                        title={'Session'}
                                        cssClass={'full_'}
                                        type={'text'}
                                        controller={{...field}}
                                        error={errors.event_session}
                                    />

                                )}
                            />

                        <Controller
                            key={'event_details'}
                            name={'event_details'}
                            control={control}
                            rules={{ required: false }}
                            render={({ field }) => (
                                <NEPTextarea 
                                    id={'event_details'}
                                    title={'Details'}
                                    cssClass={'full_'}
                                    type={'text'}
                                    controller={{...field}}
                                    error={errors.is_speaker}
                                />

                            )}
                        />
                        </div>
                    </div>
                ))
            }

            <div className="nep_btn_group">
                <button className="nep_btn dark_" type="button" onClick={addEvents}>
                    <span>Add More Eevents</span>
                    <i><FaPlus /></i>
                </button>
            </div>


        </form>
    )
}

export default ExperienceForm