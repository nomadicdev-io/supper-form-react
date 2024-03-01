const questions = {
    statusCode: 200,
    message: "Questions fetched successfully",
    data: [
      {
        text: "Welcome to the AI interview. We're delighted to have you here as a candidate for this exciting opportunity. Please describe the transformative project you worked on, its impact and your exact role.",
        url: "https://api-hcms-textract.s3.eu-west-2.amazonaws.com/open/bot/nep/interview/question1.mp4"
      },
      {
        text: "Please provide up to 3 examples of important disruptive innovations and mega-trends in tech, socio and geo-political fields and their implications for your organization.",
        url: "https://api-hcms-textract.s3.eu-west-2.amazonaws.com/open/bot/nep/interview/question2.mp4"
      },
      {
        text: "Please provide one specific example of how you fostered and managed creativity and innovation in your team.",
        url: "https://api-hcms-textract.s3.eu-west-2.amazonaws.com/open/bot/nep/interview/question3.mp4"
      },
      {
        text: "Can you share one specific example of how you successfully managed and implemented strategic change in your organization or sector?",
        url: "https://api-hcms-textract.s3.eu-west-2.amazonaws.com/open/bot/nep/interview/question4.mp4"
      }
    ]
  }

const getQuestions = async (index)=> {
    try{
        let res = {}

        if(index > questions.data.length){
            res = {
                status: 'completed',
                title: 'Interview Completed !',
                message: 'Thank you for your participation. Your insights are invaluable. We will be in touch soon. Appreciate your time and cooperation. Have a great day!',
            }

            return res
        }else{
            res = {
                status: 'progress',
                data: {
                    ...questions.data[index]
                }
            }

            return res
        }

    }catch(error){
        return error
    }

}



export const getTime = (value)=> {
    const d = new Date(value)
    const h = d.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'})
    return h;
}



export default getQuestions