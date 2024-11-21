import React from "react";
import $ from "jquery";
import './Project.css';
import {projectData} from "../Data/Data";
import Cards from "./Cards";

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
              <Cards
                prjid={prj.id}
                prjimg={prj.img}
                prjtitle={prj.title}
                prjtag={prj.tag}
                prjintro={prj.intro}
                prjjrny={prj.jrny}
                prjcover={prj.cover}
                prjinsp={prj.insp}
                prjcarousel={prj.carousel}
              />
            ))
          }

        </div>
      </div>
      )
    }
}

export default Projects;