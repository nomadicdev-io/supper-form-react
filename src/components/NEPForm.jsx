import NEPFormAction from "./NEPFormAction"
import { NEPInput } from "./forms/NEPFormComponets"

const NEPForm = () => {
  return (
    <div className="nep_stepper_form">
        <form>
            <div className="nep_stepper_grid">
                <NEPInput />
                <NEPInput />
                <NEPInput />
                <NEPInput />
            </div>
            <NEPFormAction />
        </form>
    </div>
  )
}

export default NEPForm