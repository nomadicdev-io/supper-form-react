import { atom, useAtom } from 'jotai'
import './assets/scss/app.scss'
import { formData } from './store'
import { useEffect, useState } from 'react'
import NEPSkeletonLoader from './components/NEPSkeletonLoader'
import NEPStepperArea from './components/NEPStepperArea'

const formContext = atom(null)

function App() {

  const [skeletonLoader, setSkeletonLoader] = useState(true) 
  const [data, setData] = useAtom(formContext)
  const lang = document.documentElement.lang == 'ar' ? 'ar' : 'en'

  const formDataFn = async ()=> {
    try {
      const stepperTab = await formData.map(item=> {return {key: item.key, title: item.title[lang]}})
      const dataModeling = await {
        lang: lang,
        forms: formData,
        stepperTab,
        stepperCount: stepperTab.length
      }
      console.log(dataModeling)
      setData(dataModeling)
      setSkeletonLoader(false)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=> {
    formDataFn();
  }, [])

  return (
    <>
      <div className='container_'>
        <h2 className='page_title'>Apply Now</h2>
        {
          skeletonLoader ? <NEPSkeletonLoader /> : <NEPStepperArea data={data}/>
        }
       </div>
    </>
  )
}

export default App
