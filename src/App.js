import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faLinkedinIn, faMedium} from '@fortawesome/free-brands-svg-icons'
import Head from "./Head.js"
import Tab from "./Tab.js"

function App() {
  return (
    <div className='min-h-screen h-max flex flex-col antialiased dark:bg-[#2a3235]'>
      <div className='grow'>
      <Head/>
      <Tab/>
      </div>
      <div id="foot" className='text-2xl flex flex-row text-slate-700 justify-center dark:sm:text-rose-300 dark:text-slate-200'>
        <a href="https://in.linkedin.com/in/dhirajksharma29" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} className="socialinks"/></a>
        <a href="mailto:dhirajksharma.official@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} className="socialinks"/></a>
        <a href="https://github.com/dhirajksharma" target="_blank"><FontAwesomeIcon icon={faGithubAlt} className="socialinks"/></a>
        <a href="https://dhirajksharma.medium.com" target="_blank"><FontAwesomeIcon icon={faMedium} className="socialinks"/></a>
      </div>
    </div>
  );
}

export default App;