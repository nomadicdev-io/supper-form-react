import NEPProgressWidget from "./Application/NEPProgressWidget"

const NEPApplicationSteps = ({activeIndex, progress}) => {
    const steps = [
        'Personal Information',
        'Professional Experience',
        'Motivation',
        'All Interview'
    ]
  return (
    <div className="nep_application_steps">
        <ul>
            {
                steps.map((item, index)=> (
                    <li key={'steps' + index} className={index <= activeIndex ? 'active_' : ''}><span>{'0'+(index + 1)}</span><p>{item}</p></li>
                ))
            }
        </ul>

        <NEPProgressWidget progress={progress}/>
    </div>
  )
}

export default NEPApplicationSteps