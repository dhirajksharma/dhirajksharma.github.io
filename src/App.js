import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faLinkedinIn, faMedium} from '@fortawesome/free-brands-svg-icons'
import Head from "./Head.js"
import Tab from "./Tab.js"
import { Fragment, useEffect } from 'react'

function App() {
  useEffect(()=>{
    const blob= document.getElementById("blob");
    document.body.onpointermove=event=>{
      const {clientX, clientY}=event;
      blob.animate({
        left:`${clientX}px`,
        top:`${clientY}px`
      },{duration: 3000, fill: "forwards"})
    }
  })
    
  return (
    <Fragment>
    <div className='min-h-screen h-max flex flex-col antialiased dark:bg-[#0f1728]'>
      <div className='grow z-20'>
    <div id="blur" className='min-h-screen h-max bg-slate-400 absolute z-10 backdrop-blur-xl'></div>
    <div id="blob" className='hidden dark:lg:block bg-gradient-to-r from-amber-100 to-blue-500 h-[140px] aspect-square blur-2xl absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full pointer-events-none animate-blobrotate'></div>
      <Head/>
      <Tab/>
      </div>
      <div id="foot" className='text-2xl flex flex-row text-slate-700 justify-center dark:text-gray-300 dark:sm:text-gray-400 z-20'>
        <a href="https://in.linkedin.com/in/dhirajksharma29" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} className="socialinks"/></a>
        <a href="mailto:dhirajksharma.official@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} className="socialinks"/></a>
        <a href="https://github.com/dhirajksharma" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithubAlt} className="socialinks"/></a>
        <a href="https://dhirajksharma.medium.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faMedium} className="socialinks"/></a>
      </div>
    </div>
    </Fragment>
  );
}

export default App;