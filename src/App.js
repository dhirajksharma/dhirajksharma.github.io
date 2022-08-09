import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faLinkedinIn, faMedium} from '@fortawesome/free-brands-svg-icons'
import Head from "./Head.js"
import Tab from "./Tab.js"

function App() {
  return (
    <div className='h-screen flex flex-col antialiased'>
      <div className='grow'>
      <Head/>
      <Tab/>
      </div>
      <div id="foot" className='text-2xl flex flex-row text-slate-700 justify-center'>
        <a href="https://in.linkedin.com/in/dhirajksharma29" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} className="mt-5 mb-3 mx-1 hover:text-blue-500"/></a>
        <a href="mailto:dhirajksharma.official@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} className="mt-5 mb-3 mx-1 hover:text-blue-500"/></a>
        <a href="https://github.com/dhirajksharma" target="_blank"><FontAwesomeIcon icon={faGithubAlt} className="mt-5 mb-3 mx-1 hover:text-blue-500"/></a>
        <a href="https://dhirajksharma.medium.com" target="_blank"><FontAwesomeIcon icon={faMedium} className="mt-5 mb-3 mx-1 hover:text-blue-500"/></a>
      </div>
    </div>
  );
}

export default App;