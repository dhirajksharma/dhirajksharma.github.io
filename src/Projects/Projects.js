import React from "react";
import $ from "jquery";
import './Project.css';
import {projectData} from "../Data/Data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'

class Projects extends React.Component{
    constructor(props) {
        super(props);
        this.handleProjectDetailsToggle=this.handleProjectDetailsToggle.bind(this);
    }
    
    observer=new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          entry.target.classList.add('showPrj');
        }
      })
    })
    
    componentDidMount(){
      const hiddenElements=document.querySelectorAll('.hidingPrj');
      hiddenElements.forEach(ele=>this.observer.observe(ele));
    }
    
    handleProjectDetailsToggle(id){
      $(".containerDiv").animate({ scrollTop: 0 }, 1200);
      if($('#projectcards').css('display')!=='none'){
        $('#projectcards').slideUp(1200);
        $('#'+id).css('display','flex');
        setTimeout(() => {
          $('#back'+id).animate(
            {opacity:1},
            3000
          )
        }, 1200);
      }else{
        $('#back'+id).css('opacity','0');
        $('#projectcards').slideDown(1200);
        setTimeout(() => {
          $('#'+id).css('display','none');
        }, 1000);
      }
    }

    render(){
      return(
        <div className="flex flex-col items-center lg:items-start w-full justify-start">
        <div id="projectcards" className="">
          {
            (window.innerWidth >=1024 &&
              <div className="font-outfit text-lg 2xl:text-2xl mt-2 2xl:mb-2 tracking-wide">
                My Work
              </div>)
          }
          {
            projectData.map(prj => (
              <div className="w-[90vw] lg:w-[70%] rounded-lg flex flex-col pl-3 my-5 sm:my-8 lg:mt-2 lg:mb-5 shadow shadow-gray-300 hidingPrj cursor-pointer"
                onClick={()=>this.handleProjectDetailsToggle(prj.id)}>
                
                <div className="flex items-center justify-between pr-4 mt-4 mb-2 2xl:mb-3">
                  <img src={prj.img} loading="eager" className="w-10 sm:w-14 lg:w-12 2xl:w-14 aspect-square rounded-md bg-gray-100"></img>
                  <a href={prj.link} target="_blank" rel="noreferrer" onClick={(e)=>e.stopPropagation()}>
                    <FontAwesomeIcon icon={faArrowRight} className="text-xl lg:text-lg -rotate-45 text-blue-400 border-2 border-solid rounded-full py-[5px] px-[6px] border-blue-400 hover:rotate-[10]"/>
                  </a>
                </div>
                
                <h1 className="text-lg sm:text-2xl lg:text-lg 2xl:text-xl font-outfit">{prj.title}</h1>
                
                <div className="flex w-[90%] flex-wrap">
                  {prj.tag.map(tg=>(
                    <div className="mr-2 rounded-lg bg-slate-100 px-2 py-1 text-sm mb-2 sm:text-base lg:text-sm 2xl:text-base lg:rounded-md sm:mt-1 lg:tracking-wide">{tg}</div>
                    ))
                  }
                </div>
                
                <p className="font-montserrat text-sm sm:text-base lg:text-[14px] 2xl:text-lg 2xl:tracking-wide text-justify mr-3 mb-2 line-clamp-4">{prj.intro}</p>
              </div>
            ))
          }

        </div>

        {
          projectData.map(prj =>(
            <div id={prj.id} className="w-[95vw] lg:w-full hidden flex-col items-center">
              <div className="w-full relative lg:hidden">
                <button
                  id={'back'+prj.id}
                  onClick={()=>this.handleProjectDetailsToggle(prj.id)}
                  className="absolute top-2 left-3 text-white text-xl sm:text-2xl mix-blend-difference opacity-0">
                  <FontAwesomeIcon icon={faArrowLeft} className=""/>
                </button>
                <img src={prj.cover} className="w-full rounded-t-lg"></img>
                <img src={prj.img} className="w-14 sm:w-16 lg:w-14 aspect-square rounded-md absolute -bottom-[1.3rem] left-[0.6rem] sm:left-[1rem] bg-gray-100"></img>
              </div>

              <div className="w-[95%] lg:w-full mt-7 lg:mt-2 lg:pr-10">
                <h1 className="text-xl sm:text-2xl lg:text-xl 2xl:text-2xl font-outfit">{prj.title}</h1>
                <h2 className="mt-1 sm:mt-2 lg:mt-4 sm:text-xl lg:text-base 2xl:text-xl font-outfit font-medium tracking-wide lg:tracking-wider">Description</h2>
                <p className="font-montserrat text-justify text-sm sm:text-base 2xl:text-lg lg:tracking-wide">{prj.intro}</p>
                <h2 className="mt-1 sm:mt-2 lg:mt-4 sm:text-xl lg:text-base 2xl:text-xl font-outfit font-medium tracking-wide lg:tracking-wider">Inspiration</h2>
                <p className="font-montserrat text-justify text-sm sm:text-base 2xl:text-lg lg:tracking-wide">{prj.insp}</p>
                <img src={prj.cover} className="hidden lg:block w-4/5 mx-auto my-3 rounded-lg"></img>
                <h2 className="mt-1 -mb-3 sm:mt-2 lg:mt-4 sm:text-xl lg:text-base 2xl:text-xl font-outfit font-medium tracking-wide lg:tracking-wider">Journey</h2>
                {
                  prj.jrny.map(para=>(
                    <p className="font-montserrat text-justify text-sm my-3 sm:text-base 2xl:text-lg lg:tracking-wide">{para}</p>
                  ))
                }
              </div>

              <div className="flex justify-center w-full">
                <a href={prj.link} target="_blank" rel="noreferrer">
                  <button
                    className="bg-blue-300 hover:opacity-90 py-3 my-4 sm:mb-8 sm:text-xl lg:text-base 2xl:text-xl sm:rounded-xl lg:rounded-lg rounded-lg font-montserrat w-[90vw] max-w-[500px] lg:w-[250px] flex justify-center items-center lg:mx-2">
                      Checkout!
                  </button>
                </a>
                <button
                  onClick={()=>this.handleProjectDetailsToggle(prj.id)}
                  className="hidden bg-gray-100 opacity-80 hover:opacity-100 py-3 mt-4 mb-8 text-base 2xl:text-xl rounded-lg font-montserrat w-[250px] lg:flex justify-center items-center lg:mx-2">
                    Go Back
                </button>
              </div>
            </div>
          ))
        }
      </div>
      )
    }
}

export default Projects;