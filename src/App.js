import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faLinkedinIn, faMedium} from '@fortawesome/free-brands-svg-icons'
import Head from "./Head.js"
import Tab from "./Tab.js"

function App() {
  return (
    <div className='min-h-screen h-max flex flex-col antialiased dark:bg-[#0f1728]'>
      <div className='grow'>
      <Head/>
      <Tab/>
      </div>
      <div id="foot" className='text-2xl flex flex-row text-slate-700 justify-center dark:text-gray-300 dark:sm:text-gray-400'>
        <a href="https://in.linkedin.com/in/dhirajksharma29" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} className="socialinks"/></a>
        <a href="mailto:dhirajksharma.official@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} className="socialinks"/></a>
        <a href="https://github.com/dhirajksharma" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithubAlt} className="socialinks"/></a>
        <a href="https://dhirajksharma.medium.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faMedium} className="socialinks"/></a>
      </div>
    </div>
  );
}

export default App;