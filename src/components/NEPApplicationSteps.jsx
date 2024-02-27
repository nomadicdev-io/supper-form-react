import { useAtomValue } from "jotai"
import NEPProgressWidget from "./Application/NEPProgressWidget"
import { applicationFormContext } from "../App"

const NEPApplicationSteps = () => {

    const formContext = useAtomValue(applicationFormContext)

    const steps = [
        'Personal Information',
        'Professional Experience',
        'Motivation',
        'AI Interview'
    ]
  return (
    <div className="nep_application_steps">
        <ul>
            {
                steps.map((item, index)=> (
                    <li key={'steps' + index} className={`${index <= formContext.tabIndex ? 'active_' : ''} ${index <= (formContext.tabIndex - 1) ? 'completed_' : ''}`}><span>{'0'+(index + 1)}</span><p>{item}</p></li>
                ))
            }
        </ul>

        <NEPProgressWidget progress={formContext.activeIndex}/>
    </div>
  )
}

export default NEPApplicationSteps