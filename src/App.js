import React from "react";
import $ from 'jquery';
import Head from "./Head/Head.js"
import Skills from "./Skills/Skills.js";
import Projects from './Projects/Projects.js';
import Experience from "./Experience/Experience.js";
import Resume from "./Resume/Resume.js";
import About from "./About/About.js";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile, faFileAlt, faBriefcase, faPalette, faPaintBrush } from '@fortawesome/free-solid-svg-icons'
import { Fragment } from "react";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      activeTab:2,
    }

    this.handleMobileNav=this.handleMobileNav.bind(this);
  }

  handleMobileNav(nextCardIndx){
    $(".containerDiv").animate({ scrollTop: 0 }, "fast");
    if(nextCardIndx!==2)
      $('#bottom-nav').slideDown(200);
    else
      $('#bottom-nav').slideUp(200);
    this.setState({activeTab:nextCardIndx});
  }

  componentDidMount(){
    setTimeout(() => {
      $('#typewriterContainer').fadeOut(500);
      $('#appHolder').fadeIn(500).css('display','flex');
    }, 3500);
  }
  render(){
    const menus = [
      { name: "Skills", icon: faPalette},
      { name: "Projects", icon: faPaintBrush},
      { name: "Profile", icon: faSmile},
      { name: "Experience", icon: faBriefcase},
      { name: "Resume", icon: faFileAlt},
    ];

    return (
        <Fragment>
        <div id='typewriterContainer' className="h-[100dvh] w-full bg-white flex items-center justify-center">
          <div class="typewriter w-fit">
            <h1 className="text-xl sm:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl font-montserrat font-semibold">Greetings Visitor!</h1>
          </div>
        </div>
        
        <div id='appHolder' className="hidden justify-center items-center h-[100dvh]">
          <div id='app' className="h-[100dvh] lg:h-[95dvh] lg:aspect-[3/5] flex flex-col items-center xl:items-start lg:ml-4 lg:border lg:rounded-2xl border-solid border-fuchsia-900">

            <div className="flex justify-between items-center pt-2 w-screen h-[80px] sm:h-[120px] lg:h-[70px] 2xl:h-[100px] lg:w-full">
              <h1 className="ml-5 sm:ml-6 mr-0 text-2xl sm:text-3xl lg:text-2xl 2xl:text-3xl font-bold font-outfit tracking-wider">Dhiraj</h1>
              <h1 className="mr-5 sm:mr-6 ml-0 text-right sm:text-xl lg:text-base 2xl:text-2xl font-outfit font-light leading-5">Frontend Designer<br></br> & Developer</h1>
            </div>

            <div id='' className="h-[calc(100dvh-140px)] sm:h-[calc(100dvh-200px)] lg:h-full w-screen lg:w-full overflow-scroll containerDiv">
              {
                (window.innerWidth < 1024 ? (
                  (this.state.activeTab===0 && <Skills/>) ||
                  (this.state.activeTab===1 && <Projects/>) ||
                  (this.state.activeTab===2 && <Head handleMobileNav={this.handleMobileNav}/>) ||
                  (this.state.activeTab===3 && <Experience/>) ||
                  (this.state.activeTab===4 && <Resume/>)
                ):
                  <Head handleMobileNav={this.handleMobileNav}/>
                )
              }
            </div>
            
            {
              (window.innerWidth < 1024 &&
              <div id='bottom-nav' className="hidden bg-[#f9fbfe] px-4 rounded-t-2xl rounded-b-lg w-[95vw] h-[59px] sm:h-[80px] absolute bottom-0 lg:!hidden">
                      
                    <ul className="flex justify-evenly">
                      {menus.map((menu, i) => (
                        <li key={i} className="w-16 sm:w-24">
                          <div
                          className={`rounded-b-2xl rounded-t-md ${i === this.state.activeTab && "bg-white"}`}>
                            <a
                              className="flex flex-col text-center pt-6"
                              onClick={() => this.handleMobileNav(i)}>
                              
                              <span
                                className={`text-2xl sm:text-3xl cursor-pointer duration-500 -translate-y-3 ${i === this.state.activeTab && "-mt-6"}`}>
                                <FontAwesomeIcon icon={menu.icon} className={i===this.state.activeTab?"text-blue-400 scale-125 duration-500":"text-cyan-800"}/>
                              </span>
                          
                            </a>
                          </div>
                        </li>
                      ))}
                    </ul>
              </div>)
            }   
          </div>
          {
            (window.innerWidth >= 1024 &&
            <div id='' className="w-[calc(100dvw-396px)] h-[95dvh] overflow-scroll pl-10 containerDiv">
              {
                (this.state.activeTab===0 && <Skills/>) ||
                (this.state.activeTab===1 && <Projects/>) ||
                (this.state.activeTab===2 && <About/>) ||
                (this.state.activeTab===3 && <Experience/>)
              }
            </div>)
          }
          </div>
        </Fragment>
    );
  }
}

export default App;