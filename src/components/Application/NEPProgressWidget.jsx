
const NEPProgressWidget = () => {
  return (
    <div className="nep_progresswidget">
        <div className="circle_">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 81.8 81.8" enableBackground="new 0 0 81.8 81.8" xmlSpace="preserve">
            <circle fill="none" stroke="#231F20" strokeWidth="4" strokeLinecap="round" strokeMiterlimit="10" cx="40.9" cy="40.9" r="38.4"/>
            <circle fill="none" stroke="#231F20" strokeWidth="4" strokeLinecap="round" strokeMiterlimit="10" cx="40.9" cy="40.9" r="38.4" className="progress_stroke"/>
            </svg>

            
        </div>
        <div className="title_">
            <h4>15%</h4>
        </div>
    </div>
  )
}

export default NEPProgressWidget