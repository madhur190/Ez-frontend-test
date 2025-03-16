  import './App.css'
  import Card from './components/Card'
  import presDesignIconSmall from "./assets/Research@4x-5.png"
  import audioProductionIconSmall from "./assets/Research@4x.png"
  import translationServicesIconSmall from "./assets/Research@4x-2.png"
  import graphicDesignIconSmall from "./assets/Research@4x-1.png"
  import researchAnalyticsIconSmall from "./assets/Research@4x-4.png"
  import dataProcessingIconSmall from "./assets/Research@4x-3.png"
  import logoBig from "./assets/EZ Works Blue@2x.png"
  import logoSmall from "./assets/EZ Works Blue.png"
  import { useEffect, useState } from 'react'
  import axios from 'axios'

  function App() {
    const onClickHandler =async ()=>{
      setSuccess(false);
      if(email === ""){
        setError("Email field is empty");
        return;
      }
      setLoading(true);
      try{
        await axios.post("https://test.ezworks.ai/api",{
          email:email
        });
        setError("");
        setSuccess(true);
      }
      catch{
        setError("Invalid email");
      }
      setLoading(false);
    }
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState("");
    const [success,setSuccess] = useState(false);
    const [email,setEmail] = useState('');
    useEffect(()=>{
      if(error){
        const timer = setTimeout(()=>setError(""),10000);
        return ()=>clearTimeout(timer);
      }
    },[error])


    return (
    <div className='mx-10 3xl:mx-8 flex flex-col xl:flex-row items-center justify-center  min-h-screen pb-36 xl:pb-0'>
      <div className='grid grid-cols-1 xl:grid-cols-2  min-w-0 auto-rows-auto'>
        <div className='order-1 space-y-10 max-w-5xl pr-2'> 
          <div className='flex pt-12 xl:pt-0 justify-center xl:justify-normal'>
            <img src={logoBig} className='hidden md:block'/>
            <img src={logoSmall} className=' pl-4 block md:hidden'/>
          </div>
          <div className='text-5xl text-center xl:text-5xl 2xl:text-5xl 3xl:text-6xl'>
            Suite Of Business Support Services
          </div>
          <div className='text-3xl text-center xl:text-left 2xl:pt-9 xl:text-2xl 2xl:text-3xl 3xl:text-4xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          </div>
        </div>
        <div className='order-3 flex md:flex-row flex-col w-full space-x-5 pl-4 pr-0 2xl:pr-0 xl:pr-3 pt-12 xl:pt-0 items-center justify-center'>
          <div>
            {(error || success) && <div className='relative text-2xl'>
              <div className='absolute bottom-full'>
                {error && <div className='text-red-600'>
                  *{error}
                </div>}
                {success && <div className='text-green-600'>
                  Form Submitted
                </div>}
              </div>
            </div>}
            <input className='w-xs md:w-82 xl:w-sm 2xl:w-md lg:w-auto 3xl:w-2xl rounded-xl border h-18 xl:h-16 2xl:h-18 text-4xl text-[#ABABAB] px-5 py-3 ' placeholder='Email Address' value={email} onChange={(e)=>setEmail(e.target.value)} onKeyDown={(e)=>e.key === "Enter" && onClickHandler()}/>
          </div>
          <div>
            <button className='mt-5 md:mt-0 h-18 xl:h-16 2xl:h-18 text-white text-4xl xl:text-2xl 2xl:text-4xl bg-[#EA7B2C] rounded-xl flex items-center relative justify-center w-57 xl:w-42 2xl:w-57' disabled={loading} onClick={onClickHandler}>
              {loading?<div className='flex justify-center w-full'> <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"/></div>:"Contact me"}
            </button>
          </div>
        </div>
        <div className='order-2 pt-12 xl:pt-0 row-span-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-5 2xl:gap-8 3xl:gap-12 mx-auto xl:mx-0 self-center xl:max-w-4xl'>
          <Card title='Presentation Design' image={presDesignIconSmall}/>
          <Card title='Audio - Visual Production' image={audioProductionIconSmall}/>
          <Card title='Translation Services' image={translationServicesIconSmall}/>
          <Card title='Graphic Design' image={graphicDesignIconSmall}/>
          <Card title='Research & Analytics' image={researchAnalyticsIconSmall}/>
          <Card title='Data Processing' image={dataProcessingIconSmall}/>
        </div>
      </div>
    </div>)
  }

  export default App
