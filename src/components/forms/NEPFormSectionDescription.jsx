import { IoMdInformationCircleOutline } from "react-icons/io";

const NEPFormSectionDescription = ({description, children, isIcon}) => {
  return (
    <div className="form_section_description full_">
        {
          isIcon &&

          <div className="icon_">
              <IoMdInformationCircleOutline />
          </div>
        }
        
        <div className="description_">
          <p>{description}</p>
          {children}
        </div>
    </div>

  )
}

export default NEPFormSectionDescription