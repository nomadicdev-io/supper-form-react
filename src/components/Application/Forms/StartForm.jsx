import { useAtomValue } from "jotai";
import { FaArrowRight } from "react-icons/fa6";
import { applicationFormContext } from "../../../App";
import {motion} from 'framer-motion'
import NEPSectionBG from "../../NEPSectionBG";

const StartForm = ({onStart}) => {

  const formContext = useAtomValue(applicationFormContext)

  return (
    <motion.div 
      className="nep_application_formwrapper"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, ease: [0.5, 1, 0.89, 1], delay: 0.3 }}
  >
      <NEPSectionBG />
      <div className="nep_application_start">
        {
        formContext.activeIndex ?
        <div className="icon_">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 339.8 384.7" enableBackground="new 0 0 339.8 384.7" xmlSpace="preserve">
          <g>
            <path fill="#121212" d="M339.6,251.9c-0.2-20-15.1-35.5-35.6-37c-4.7-0.3-9.5-0.3-14.1-0.3c-2.2,0-4.3,0-6.5,0l-0.2,0
              c-2.6,0-4-0.1-4.5-0.6c-0.6-0.6-0.6-2.1-0.6-4.7v-53.2c0-36.8,0-73.5,0-110.3c0-14.1-6.5-21-20.4-21.9c-3.2-0.2-4.3-0.9-4.3-4.2
              C253.3,6.1,242.9,0,233.3,0c-0.1,0-0.1,0-0.2,0c-32.7,0.2-66,0.2-98.1,0.2c-12.1,0-24.2,0-36.2,0c-6.2,0-9.2,2-9.3,6.3
              c0,1.8,0.5,3.2,1.5,4.2c1.5,1.5,4.1,2.3,7.9,2.3l48.1,0c28.3,0,56.5,0,84.8,0c6.9,0,8.5,1.7,8.5,8.6c0,19.5,0,38.9,0,58.4l0,44
              c0,28.3,0,57.5,0.1,86.3c0,2-0.3,3.1-0.9,3.7c-0.6,0.6-1.7,0.8-3.3,0.7c-3.4-0.2-6.9-0.2-10.2-0.1c-1.7,0-3.4,0-5.1,0
              c-1.1,0-2.2,0-3.3,0c-5.6-0.1-11.4-0.1-17,0.9c-18.3,3.3-31.1,18.7-31.2,37.5c-0.1,16.1-0.1,32.1,0,47.5c0,1.7-0.2,2.7-0.8,3.2
              c-0.5,0.5-1.4,0.8-2.8,0.8c0,0,0,0,0,0c-32.4-0.1-65.2-0.1-97-0.1c-16.2,0-32.3,0-48.5,0c-5.1,0-6.7-1.6-6.7-6.7
              c0-21.2,0-42.5,0-63.7c0-50.6,0-103-0.1-154.5c0-1.5,0.2-2.4,0.8-2.9c0.5-0.5,1.4-0.7,3.1-0.7c11.2,0.1,22.5,0.1,33.5,0.1l5.8,0
              c12.2,0,19.8-7.7,19.8-19.9c0-8,0-16.1,0-24.1c0-7.5,0-15.1,0-22.6c0-3.3-0.3-6.7-4-8.4c-3.9-1.7-6.6,0.6-9.1,3l-2.9,2.9
              c-18.2,18.2-37,37.1-55.7,55.5C1.4,65.4,0,68.7,0,73.4l0,5.3C0.1,149.9,0.2,223.6,0,296c0,7,2.4,13.1,6.8,17
              c3.9,3.5,9,5.1,14.3,4.4c1.3-0.2,2.3,0,2.8,0.5c0.6,0.5,0.9,1.5,0.9,3.3c0,12.6,7.7,20.2,20.4,20.2c33.7,0,67.4,0,101,0l0.6,0
              c1.2,0,2.5,0,3.7-0.3c3.1-0.8,4.9-2.9,5.1-6c0.1-3.1-1.4-5.3-4.6-6.4c-1.7-0.6-3.3-0.6-5-0.6l-0.7,0l-34.2,0c-21.4,0-42.8,0-64.2,0
              l-0.8,0c-1.3,0-2.7,0-3.9-0.2c-3-0.5-4.3-3.2-4.1-8.2c0.1-1,0.3-1.6,0.7-2c0.6-0.5,1.6-0.4,2.6-0.4c0.4,0,0.8,0.1,1.1,0.1
              c0,0,0,0,0,0c16.7,0,33.5,0,50.2,0c24.2,0,48.4,0,72.6-0.1c1.6,0,2.8,0.1,3.4,0.8c0.5,0.5,0.8,1.5,0.7,3c-0.2,7.9-0.2,16-0.1,23.7
              l0,2.5c0.1,8.3,2.7,16,7.9,22.9c5.1,6.8,12.3,11.4,22.6,14.3l109.5,0l0.1,0c0.2-0.1,0.5-0.2,0.7-0.3c0.5-0.2,0.9-0.3,1.4-0.5
              c17.3-5.3,28.2-19.2,28.3-36.2C339.9,310.1,339.9,279.7,339.6,251.9z M253.5,40.6c-0.1-1.1-0.3-2.3,0.3-3c0.4-0.5,1.2-0.8,2.4-0.8
              h0c5.5-0.2,8.3,1.5,8.8,5.3c0.1,0.8,0.1,1.7,0.1,2.5c0,0.3,0,0.6,0,0.8c0,54.8,0,109.5,0,164.3c0,2.4,0,3.8-0.5,4.3
              c-0.5,0.5-1.9,0.5-4.4,0.5c-3.2,0-5,0-5.8-0.7c-0.7-0.7-0.7-2.6-0.7-6l0-99.5c0-21.7,0-44.2,0.1-66.3
              C253.6,41.6,253.6,41.1,253.5,40.6z M208.2,372.1c-7.8,0-14.6-2.9-19.4-8.1c-4.5-4.9-6.8-11.6-6.3-18.3c0-0.2,0-0.4,0-0.6l0-45.5
              c0-5,0-10,0-14.9c0-10.3,0-21,0-31.4c0.1-15.1,10.6-25.6,25.6-25.6c14.4,0,29.2,0,45.1,0c14.7,0,30.4,0,47.3,0
              c15.5,0,25.9,10.4,25.9,25.8c0,26.8,0,56.1,0,92.4c0,15.6-10.3,26.1-25.5,26.2C269,372.3,237.5,372.2,208.2,372.1z M63,26.6
              c0,9.8,0,20,0,29.9c0,2.8-1,6.2-5.8,6.3C48.9,63,40.7,63,32.1,63c-3,0-5.9,0-8.9,0l39.9-40c0,0.1,0,0.3,0,0.7c0,0.2,0,0.3,0,0.5
              L63,26.6z"/>
            <path fill="#FE6723" d="M156.7,189.3c5,0,10.1,0,15.2,0c7.6,0,15.2,0,22.8-0.1c10.4-0.1,16.4-6.1,16.5-16.6c0-4.2,0-8.4,0-12.7
              c0-2.9,0-5.8,0-8.7c0-4.4-1.8-8.1-5.3-11.1c-3.9-3.3-8.6-3.6-13-3.6c-43.9,0-87.8,0-131.7,0c-1.9,0-3.8,0.1-5.7,0.4
              c-7.5,1.2-12.6,7.1-12.7,14.7c0,4.3,0,8.7,0,12.9c0,3.2,0,6.3,0,9.5c0,3.2,0.9,6.1,2.8,8.7c3.2,4.4,7.8,6.4,14.5,6.4c0,0,0,0,0,0
              c16.5,0,33.1,0,49.6,0l31.2,0C146.1,189.3,151.4,189.3,156.7,189.3z M197.5,150.7c0.6,0.6,0.9,1.7,0.9,3.2c-0.1,6.9-0.1,12.6,0,18
              c0,1.5-0.3,2.6-0.9,3.2c-0.7,0.7-1.8,1-3.5,1c0,0,0,0-0.1,0c-11.4,0-22.9-0.1-34.4-0.1c-5.5,0-11,0-16.4,0l-30.4,0
              c-17.3,0-34.7,0-52,0c-4.7,0-4.8-0.1-4.8-4.8c0-6.3,0-11.8,0-16.8c0-4.4,0.2-4.6,4.7-4.6c28.6,0,57.1,0,85.7,0l24,0
              c2.3,0,4.7,0,7,0c5.6,0,11.3,0,17-0.1C195.7,149.8,196.8,150.1,197.5,150.7z"/>
            <path fill="#FE6723" d="M120.1,70.6c2.6,0,5.2,0,7.8,0c2.6,0,5.2,0,7.8,0c2.7,0,5.4,0,8.1,0c5.9,0,12.1,0,18.1,0
              c11.1-0.1,19.2-7.9,19.2-18.6c0-10.7-8.2-18.8-19.1-18.8c-16.5-0.1-33.5-0.1-52,0c-5.3,0-10.3,2.1-14,5.8
              c-3.5,3.5-5.4,8.2-5.3,13.1c0.1,10.3,8.5,18.4,19.1,18.5C113.3,70.6,116.7,70.6,120.1,70.6z M161.3,46.4c4.4,0,6.5,1.7,6.6,5.3
              c0,1.8-0.5,3.2-1.4,4.3c-1.1,1.1-2.8,1.8-5,1.8c-17.2,0.1-34.3,0.1-50.8,0c-3.8,0-6.5-2.4-6.5-5.7c0-1.6,0.4-2.9,1.4-3.9
              c1.1-1.2,3-1.8,5.4-1.8c5.9,0,11.9,0,17.7,0c2.5,0,4.9,0,7.4,0l7.4,0C149.2,46.3,155.3,46.3,161.3,46.4z"/>
            <path fill="#121212" d="M42.8,111.6c0,1.8,0.5,3.3,1.6,4.4c1.6,1.6,4.2,2.4,8.1,2.4c18.1,0,36.3,0,54.4,0l20,0l14.9,0
              c19.9,0,39.7,0,59.6,0c0.3,0,0.6,0,0.9,0c0.3,0,0.6,0,0.9,0c1.2,0,2.4-0.1,3.5-0.5c2.9-1.2,4.4-3.2,4.3-6.2c-0.1-3.1-1.7-5.2-4.5-6
              c-1.5-0.5-3.2-0.5-4.6-0.5c-49.9,0-99.8,0-149.7,0C46,105.1,42.8,107.2,42.8,111.6z"/>
            <path fill="#FE6723" d="M114.6,238.3l-0.4,0c-20.8,0-41.6,0-62.4,0l-0.5,0c-1.5,0-3,0-4.5,0.6c-2.6,1.2-4,3.2-4.1,6
              c0,2.7,1.4,4.8,4,6c1.5,0.7,3.1,0.7,4.6,0.7l0.3,0l38.5,0c2.5,0,5,0,7.5,0c5.3,0,10.7,0,16,0c1.4,0,3,0,4.6-0.4
              c3.3-0.8,5.1-3.1,5-6.4c-0.1-3.2-2-5.4-5.4-6.2C116.9,238.3,115.8,238.3,114.6,238.3z"/>
            <path fill="#121212" d="M121.9,207.5c-1.4-1.4-3.5-2.2-6.3-2.2c-7.7,0-15.4,0-23.1,0l-9.4,0l-9.4,0c-7.7,0-15.4,0-23.1,0
              c-4.8,0-7.7,2.3-7.8,6.2c-0.1,1.8,0.5,3.3,1.6,4.4c1.4,1.4,3.5,2.2,6.2,2.2c10.7,0,21.4,0,32.2,0c11,0,21.9,0,32.9,0
              c4.8,0,7.7-2.3,7.8-6.2C123.5,210.1,122.9,208.6,121.9,207.5z"/>
            <path fill="#FE6723" d="M305.2,248c-11.2-10.9-25.5-10.9-36.5,0c-6.5,6.5-13,13-19.5,19.6c-12,12-24.3,24.4-36.6,36.5
              c-10.3,10.2-14.9,21.8-14.2,35.6c-0.2,3.2,0.2,6.7,0.5,10c0.1,0.7,0.1,1.4,0.2,2c0.4,4.5,2.8,6.7,7.3,6.8c1.3,0,2.7,0.1,4.1,0.1
              c1.9,0,3.9,0,6-0.1c12-0.4,21.5-4,29.2-10.7c6.2-5.4,12-11.4,17.6-17.2c2.7-2.7,5.5-5.6,8.2-8.3c0.7-0.7,1.3-1.5,1.7-2.2
              c1.5-3,1.1-5.7-1.2-7.8c-2.3-2.2-5.1-2.5-7.8-0.7c-1.3,0.8-2.4,1.9-3.5,3c-4.5,4.5-9.1,9-13.6,13.5c-2.6,2.6-5.2,5.2-7.9,7.9
              c-6.7,6.7-14.9,9.7-25.1,9.4c-1.8-0.1-2.4-0.6-2.6-2.3c-1.6-11.3,1.6-21,9.5-29c3.8-3.8,7.5-7.5,11.3-11.3
              c7.4-7.4,15.1-15,22.5-22.6c0.9-0.9,1.5-1.3,2.1-1.3c0,0,0,0,0,0c0.6,0,1.2,0.4,2.2,1.4c7.3,7.5,14.9,15,21.9,22
              c3.4,3.4,6.7,3.5,9.9,0.5l2.4-2.2c5.8-5.5,11.9-11.2,17.1-17.6c4.1-5.1,5.7-11.1,4.7-17.9C314.2,257.7,309.8,252.5,305.2,248z
              M297.7,277.7c-1,1-2.1,2.1-3.1,3.1c-2.1,2.1-4.3,4.2-6.4,6.4c-0.8,0.8-1.3,1.1-1.8,1.1c0,0,0,0,0,0c-0.5,0-1-0.3-1.7-1
              c-4.9-5-10.2-10.3-16.7-16.7c-0.8-0.7-1.1-1.3-1.1-1.8c0-0.5,0.3-1.1,1-1.7c2.4-2.3,4.7-4.6,7-6.9c1.4-1.4,2.8-2.8,4.2-4.2
              c2-2,4.6-3,7.8-3.1c7.1,0.5,11.1,5.6,14.3,11C303.8,268.3,302.7,272.7,297.7,277.7z"/>
          </g>
        </svg>

        </div>
        :
        <div className="icon_">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 312 240.2" enableBackground="new 0 0 312 240.2" xmlSpace="preserve">
            <g>
              <g>
                <path fill="#121212" d="M220.8,188.2c11,0,21.9,0,32.9,0c2.6,0,4.5,1.1,5.3,3.6c0.7,2.3,0.1,4.4-1.8,5.9c-1,0.8-2.3,1-3.6,1
                  c-22.1,0-102.3,0-124.5,0c-3.4,0-5.5-2.1-5.6-5.1c-0.1-3.2,2.1-5.4,5.7-5.4C140.3,188.2,209.6,188.2,220.8,188.2z"/>
                <path fill="#121212" d="M220.2,77.3c-11,0-80,0-91,0c-3.5,0-5.8-2.3-5.7-5.4c0.1-3,2.3-5,5.6-5.2c0.9,0,1.9,0,2.8,0
                  c18.9,0,95.8,0,114.7,0c2.1,0,4.2,0,6.3,0c3.8,0.1,6.2,2,6.2,5.2c0,3.2-2.3,5.3-6.1,5.3C242.1,77.3,231.2,77.3,220.2,77.3z"/>
                <path fill="#121212" d="M220.3,138c-10.7,0-79.6,0-90.3,0c-4.1,0-6.5-2-6.5-5.3c0-3.3,2.4-5.3,6.4-5.3c21.6,0,101.3,0,122.9,0
                  c4,0,6.4,2.1,6.3,5.4c-0.1,3.2-2.4,5.1-6.3,5.1C242,138.1,231.2,138,220.3,138z"/>
                <path fill="#FE6723" d="M70.8,77.2c-1.6,0.1-2.9-0.5-4-1.6c-4.1-4.1-8.3-8.1-12.3-12.3c-2.3-2.4-2.3-5.5-0.3-7.6
                  c2.1-2.2,5.3-2.2,7.9,0.2c2.2,2,4.3,4.1,6.3,6.3c1.6,1.9,2.7,1.9,4.5,0.1c5.6-5.8,11.3-11.4,17-17c0.6-0.6,1.2-1.2,1.8-1.8
                  c2.7-2.5,5.9-2.7,8.1-0.4c2.1,2.2,2,5.3-0.5,7.9c-2,2.1-4.2,4.2-6.2,6.3c-5.9,5.9-11.8,11.8-17.7,17.7
                  C74.1,76.1,72.8,77.3,70.8,77.2z"/>
                <path fill="#FE6723" d="M70.9,138c-1.7,0.1-3-0.5-4.1-1.6c-4.1-4.1-8.2-8.1-12.3-12.3c-2.3-2.4-2.3-5.5-0.3-7.6
                  c2.1-2.2,5.3-2.2,7.9,0.2c1.9,1.8,3.7,3.7,5.6,5.6c2.9,2.9,2.9,2.9,5.8,0.1c5.9-5.9,11.8-11.8,17.7-17.7c1-1,2.1-2.1,3.6-2.4
                  c2.4-0.4,4.4,0.4,5.7,2.5c1.5,2.5,0.9,4.8-1.2,6.9c-8.1,8.1-16.2,16.2-24.4,24.4c-0.4,0.4-0.8,0.7-1.2,1
                  C72.8,137.7,71.9,138.1,70.9,138z"/>
                <path fill="#FE6723" d="M70.7,198.8c-1.9,0.1-3.2-0.8-4.3-1.9c-3.9-3.9-7.8-7.7-11.6-11.6c-2.6-2.7-2.7-5.9-0.4-8.1
                  c2.2-2.1,5.3-2,7.9,0.5c2.2,2.1,4.4,4.2,6.5,6.5c1.4,1.5,2.4,1.5,3.8,0c6.2-6.3,12.5-12.5,18.7-18.8c1.6-1.6,3.3-2.7,5.6-2.2
                  c4.1,0.8,5.7,5.6,2.8,8.9c-2.3,2.6-4.9,5-7.3,7.4c-5.7,5.7-11.3,11.3-17,17C74.1,197.7,72.7,199,70.7,198.8z"/>
                <path fill="#121212" d="M148.7,52c-6.3,0-12.6,0-18.9,0c-3.8,0-6.2-2-6.2-5.2c0-3.2,2.3-5.3,6.1-5.3c12.9,0,84,0,96.9,0
                  c3.8,0,6.1,2.2,6,5.4c-0.1,3.2-2.4,5.2-6.2,5.2C219.8,52,155.2,52,148.7,52z"/>
                <path fill="#121212" d="M149.1,102.2c6.4,0,70.9,0,77.4,0c3.8,0,6.1,2.1,6.1,5.3c0,3.2-2.3,5.2-6.2,5.2c-12.8,0-83.8,0-96.6,0
                  c-3.9,0-6.2-2-6.2-5.2c-0.1-3.3,2.3-5.4,6.3-5.4C136.3,102.1,142.7,102.2,149.1,102.2z"/>
                <path fill="#121212" d="M148.7,173.5c-6.3,0-12.6,0-18.9,0c-3.9,0-6.2-2-6.2-5.2c-0.1-3.3,2.3-5.4,6.4-5.4c12.7,0,83.6,0,96.3,0
                  c4,0,6.4,2.1,6.4,5.3c0,3.3-2.4,5.2-6.5,5.2C219.6,173.5,155.1,173.5,148.7,173.5z"/>
              </g>
              <g>
                <path fill="#121212" d="M177,227.6c34,0,68.1,0,102.1,0c5.7,0,10.9-1.1,15.1-5.3c4.2-4.2,5.3-9.4,5.3-15.1c0-41.9,0-83.8,0-125.7
                  c0-1.4-0.1-2.8,0.1-4.1c0.4-3.2,2.9-5.4,6.1-5.4c3.2,0,5.8,2.1,6.2,5.3c0.2,1.2,0.1,2.5,0.1,3.7c0,42.5,0,85,0,127.6
                  c0,19-12.6,31.6-31.7,31.6c-68.5,0-136.9,0-205.4,0c-1.2,0-2.5,0.1-3.7-0.1c-3.2-0.6-5-2.6-5.2-5.9c-0.1-3.2,2-5.9,5.1-6.3
                  c1.3-0.2,2.7-0.1,4.1-0.1C109.1,227.6,143.1,227.6,177,227.6z"/>
                <path fill="#FE6723" d="M228,0c17.7,0,35.4,0,53.1,0c17.8,0,30.7,12.9,30.8,30.6c0,5.6,0.1,11.2,0,16.8c-0.1,4.2-2.5,6.9-6.2,6.9
                  c-3.7,0-6.1-2.7-6.2-6.9c-0.1-5.1,0-10.2,0-15.3c-0.1-12.2-7.4-19.5-19.7-19.6c-23.7-0.1-47.4,0-71.1,0c-12.1,0-24.2,0-36.3,0
                  c-5,0-7.6-2.2-7.6-6.2c0-4,2.6-6.3,7.5-6.3C190.9,0,209.5,0,228,0z"/>
                <path fill="#121212" d="M141.8,0.1c-1.2-0.2-2.5-0.1-3.7-0.1c-18,0-35.9,0-53.9,0C66.6,0,49,0,31.4,0C12.7,0,0.1,12.7,0,31.6
                  c0,3,0,6.1,0,9.1h0V42c0,2,0,4,0,6h0v139.9h0c0,7.5,0,15,0,22.5c0.1,13.9,9.6,25.8,23.2,29c6.2,1.5,12.4,0.6,18.6,0.7
                  c3.9,0.1,6.5-2.6,6.5-6.2c0-3.6-2.6-6.1-6.5-6.2c-3.6-0.1-7.2,0.1-10.9-0.1c-10.7-0.4-18-7.2-18.4-17.8
                  c-0.2-7.3-0.2-14.6-0.1-21.9h0V48h0.1c0-5.5,0-11,0-16.5c0.1-8.8,4.7-15.6,12.2-17.9c2.9-0.9,5.8-1.1,8.9-1.1
                  c33.6,0,67.1,0,100.7,0c2.5,0,5,0.1,7.5-0.1c3.2-0.3,5.4-3,5.4-6.1C147.2,3.2,145,0.5,141.8,0.1z"/>
              </g>
            </g>
          </svg>
        </div>
        }
        {
          formContext.activeIndex ?
          <h3>Not <span>finished</span> yet ? You can <span>start</span> <br/> from where you left off</h3>
          :
          <h3>Join the next generation of <br/> <span>Emirati technical</span> leaders</h3>
        }
        
        <div className="nep_btn_group center_">
          {
            formContext.activeIndex ?
            <button type="button" className="nep_btn" onClick={onStart}>
              <span>Continue Your Applicaiton</span>
              <i><FaArrowRight /></i>
            </button>
            :
            <button type="button" className="nep_btn" onClick={onStart}>
              <span>Start Your Applicaiton</span>
              <i><FaArrowRight /></i>
            </button>
          }
          
        </div>
      </div>
    </motion.div>
  )
}

export default StartForm