import {AnimatePresence} from 'framer-motion'
import { useEffect, useState } from 'react';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { LS, applicationFormContext, statusIndicatorContext } from '../../../App';
import NEPInfoSection from '../../sections/NEPInfoSection';

const ThankYouSection = ()=> {
    
    const setStatus = useSetAtom(statusIndicatorContext)

    useEffect(()=> {
        
        if(LS.getItem('is_form_session_finished') != 'true'){
            setTimeout(()=> {
                setStatus({
                    type: 'success',
                    title: 'Application submitted successfully!',
                    message: 'You can start attend the AI Interview.',
                    show: true
                })
            }, 500)
            LS.setItem('is_form_session_finished', true)
        }
        
    }, [])

    return (
        <NEPInfoSection
            imageUrl={'/thank-you.svg'}
            buttonArray={[{title: 'Start AI Interview', path: '/interview', type: 'primary'}]}
        >
            <h3><span>Thank You, </span> for your submission !</h3>
            <p>Form submitted!. Your submission is important to us and appreciated. Our team will carefully review the details provided. <strong>You can start your AI Interview.</strong></p>
        </NEPInfoSection>
    )
}

const UploadFormSection = ()=> {

    const [formContext, setFormContext] = useAtom(applicationFormContext)
   
    useEffect(()=> {
        setTimeout(()=> {
            LS.setItem('is_uploading_finished', true)
            setFormContext({
                ...formContext,
                isUploadingFinished: true
            })
        }, 6000)
    }, [])

    return (
        <NEPInfoSection>
            <div className="upload_progress">
                <div className="svg_">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve">
                        <circle fill="none" stroke="#000" strokeWidth="25" strokeMiterlimit="10" cx="256" cy="256" r="240.7"/>
                        <circle fill="none" stroke="#000" strokeWidth="25" strokeMiterlimit="10" cx="256" cy="256" r="240.7" className="progress_circle" strokeLinecap="round" />
                    </svg>
                </div>

                <div className="icon_anim">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 291.4 308.8" enableBackground="new 0 0 291.4 308.8" xmlSpace="preserve">
                        <g>
                            <path fill="#121212" d="M277.2,64.4c-0.1-13-10-22.8-23.1-22.9c-6.5,0-13,0-19.5,0c-2.9,0-5.8,0-8.7,0c-5,0-9.9,0-14.9,0
                                c-11.8,0-23.9,0-35.9,0c-7.9,0-13.7-5.3-14.1-12.8C159.8,10.5,148.6,0,130.3,0C97.1,0,63.8,0,30.6,0C11.7,0,0,11.7,0,30.6
                                c0,69.6,0,139.1,0,208.7c0,16.5,9.4,25.9,25.9,26c11.1,0,22.2,0,33.3,0c10.3,0,20.5,0,30.6,0l18.3,0c1.1,0,2.4,0,3.8-0.3
                                c4-0.7,6.8-3.7,6.5-7.1c-0.3-3.8-2.6-6.2-6.4-6.7c-1.8-0.3-3.7-0.3-5.2-0.3c-27.2,0-54.3,0-81.5,0c-8.5,0-11.2-2.8-11.2-11.4
                                c0-20.9,0-41.8,0-62.7l0-32.1c0-10,0-19.9,0-29.9c0-4.1,1.4-6.9,4.4-8.7c2.3-1.3,4.9-1.5,8-1.5c0,0,0,0,0,0c29.2,0,58.4,0,87.6,0
                                l55.6,0c27.3,0,54.6,0,81.9,0c8.3,0,11.5,3.2,11.5,11.4c0,4.4,0,8.7,0,13.1c0,6,0,12,0,17.9c0,5.5,2.5,8.6,6.9,8.6
                                c2,0,3.7-0.6,4.9-1.8c1.5-1.5,2.3-3.7,2.3-6.6l0-12.4C277.3,111.9,277.3,88,277.2,64.4z M14.1,60.4c0-3.5,0-7.1,0-10.6l0-6.1
                                c0-4.7,0-9.3,0-14c0-10.2,5.5-15.7,15.8-15.7c11.9,0,23.8,0,35.7,0l15.1,0l14.6,0c11.8,0,23.6,0,35.4,0c10.3,0,15.7,5.2,16.1,15.6
                                c0.6,14.3,13.1,26,27.9,26c17.5,0.1,35.2,0,52.4,0c8.1,0,16.3,0,24.4,0c8.8,0,11.6,2.8,11.6,11.4c0,2.4,0,4.9,0,7.3
                                c0,5.3,0,10.7,0,16.1c0,1.5-0.2,1.7-0.3,1.8c0,0-0.3,0.2-1.5-0.2c-3.2-1.1-6.5-1.4-10.4-1.4c0,0,0,0,0,0c-74.9,0-149.8,0-224.7,0
                                c-2.9,0-6.5,0-9.7,1.2c-1.6,0.6-2,0.4-2.1,0.3C14,91.9,14,90.2,14,89.7C14.1,79.9,14.1,70,14.1,60.4z"/>
                            <path fill="#121212" d="M74.8,150.7c1.2,0,2.5,0,3.7,0c1.2,0,2.4,0,3.7,0c1.3,0,2.7,0,4,0c3.1,0,6.2,0,9.3,0c4.9-0.1,8.2-2.9,8.3-7
                                c0-4.2-3.3-7-8.2-7c-8.7-0.1-17.3-0.1-25.6,0c-2.6,0-4.8,0.8-6.2,2.3c-1.2,1.3-1.8,2.9-1.8,4.9c0.1,4.1,3.1,6.8,7.9,6.9
                                C71.5,150.7,73.2,150.7,74.8,150.7z"/>
                            <path fill="#121212" d="M69.9,179.8c1.6,0,3.3,0,4.9,0c1.4,0,2.8,0,4.1,0c1.2,0,2.5,0,3.7,0h0c1.4,0,2.8,0,4.1,0c3,0,6,0,9-0.1
                                c4.6-0.1,7.9-3.1,7.8-7.1c0-4.1-3.2-6.8-7.9-6.9c-8.1-0.1-16.6-0.1-25.9,0c-4.9,0-7.8,2.6-7.9,6.8C61.9,177,65,179.7,69.9,179.8z"
                                />
                            <path fill="#121212" d="M46.5,138.9c-1.3-1.4-3.1-2.2-4.9-2.2c0,0-0.1,0-0.1,0c-3.6,0-6.8,3.1-7,6.7c-0.1,1.8,0.7,3.7,2,5.1
                                c1.3,1.4,3.1,2.2,4.9,2.2c0,0,0,0,0.1,0c3.6,0,6.8-3,6.9-6.7C48.5,142.1,47.8,140.2,46.5,138.9z"/>
                            <path fill="#121212" d="M48.4,172.9c0-1.9-0.7-3.6-2-5c-1.3-1.3-3.1-2-5-2c-3.7,0.1-6.8,3.2-6.9,6.8c0,1.8,0.8,3.6,2.2,5
                                c1.3,1.3,3.1,2.1,4.8,2.1c0,0,0.1,0,0.1,0h0C45.2,179.7,48.4,176.5,48.4,172.9z"/>
                            <g className="upload_icon_anim">
                                <path fill="#FE6723" d="M201,139.3c-0.1,0-0.2,0-0.4,0c-20.6,0.1-39.7,8.1-53.9,22.6c-14.1,14.3-22,33.7-21.7,53.2
                                    c-0.4,19.7,7.5,39.3,21.6,53.7c14.2,14.6,33.5,22.6,54.1,22.7c0.1,0,0.1,0,0.2,0c20.6,0,39.8-7.9,54-22.3
                                    c14.2-14.3,22-33.3,22-53.7c0-20.5-7.9-39.8-22.3-54.1C240.5,147.1,221.4,139.3,201,139.3z M200.9,153c16.8,0,32.4,6.3,43.9,17.8
                                    c11.7,11.7,18.5,27.9,18.5,44.5c0,16.8-6.6,32.6-18.7,44.5c-11.9,11.7-27.5,18.1-43.9,17.8c-17.2-0.2-33-7-44.6-19
                                    c-11.3-11.7-17.6-27.5-17.2-43.2v0c-0.4-16,5.9-32,17.4-43.8c11.6-12,27.4-18.6,44.5-18.6C200.8,153,200.8,153,200.9,153z"/>
                                <path fill="#FE6723" d="M168.3,216.9c1.3-0.7,2.4-1.8,3.3-2.7c3-3,5.9-5.9,8.9-8.9c3.8-3.8,7.7-7.7,11.6-11.5
                                    c0.2-0.2,0.5-0.5,0.7-0.8c0.4-0.5,0.8-0.9,1.1-1.1c0.2,0.6,0.1,1.3,0.1,2c0,0.4,0,0.7,0,1.1c0,10.4,0,20.8,0,31.2
                                    c0,8.5,0,17,0,25.5l0,0.5c0,1.5,0,3,0.4,4.5c0.9,3.5,3.3,5.5,6.5,5.5c0.2,0,0.4,0,0.6,0c3.6-0.3,5.9-2.6,6.2-6.4
                                    c0.1-1,0.1-2,0.1-3l0-0.8l0-13.9c0-14.5,0-29,0-43.5c0-0.3,0-0.7,0-1c-0.1-0.7-0.1-1.2,0-1.7c0.4,0.2,0.8,0.6,1.2,1.1
                                    c0.2,0.3,0.4,0.5,0.7,0.8c3.5,3.5,7,7,10.5,10.5c3.5,3.5,7,7,10.4,10.4c2.1,2.1,4.3,3.2,6.5,3.1c1.7,0,3.3-0.8,4.6-2.1
                                    c2.9-3.1,2.5-7.1-1.2-10.7c-12.6-12.6-23.1-23.1-33.1-33.1c-4.7-4.7-7.9-4.7-12.6,0c-11,11-22.1,22-33.1,33.1
                                    c-0.8,0.8-1.6,1.6-2.2,2.6c-1.7,2.8-1.4,5.8,1,8.2C162.6,218.1,165.4,218.5,168.3,216.9z"/>
                            </g>
                        </g>
                        </svg>
                </div>
            </div>
            <h3>We got your <span>Applicaiton</span>. Please wait!</h3>
            <p>This may take a moment. Your patience is valued. Thank you for understanding as we ensure a secure and successful upload process.</p>
        </NEPInfoSection>
    )
}

const FinishedSection = ()=> {

    return (
        <NEPInfoSection
            imageUrl={'/interview.svg'}
            buttonArray={[{title: 'Back To Home', path: '/', type: 'secondary'}, {title: 'Start AI Interview', path: '/interview', type: 'primary'}]}
        >
            <h3><span>Application</span> already submitted. <br /> You can start your <span>AI Interview!</span></h3>
        </NEPInfoSection>
    )
}

const SubmissionForm = () => {

    const [formContext, setFormContext] = useAtom(applicationFormContext)

    useEffect(()=> {
        if(LS.getItem('is_form_session_finished') == 'true'){
            setFormContext({
                ...formContext,
                isFormSessionFinished: true
            })
        }
    }, [])
   
  return (
    <AnimatePresence>
        {
            formContext.isUploadingFinished ? 
            <>
                {
                    formContext.isFormSessionFinished ?
                    <FinishedSection />
                    :
                    <ThankYouSection />
                }
            </>
            :
            <UploadFormSection />
        }
    </AnimatePresence>
  )
}

export default SubmissionForm