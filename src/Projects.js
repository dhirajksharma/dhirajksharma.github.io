import React from "react";
import $ from "jquery";
import Cards from "./Cards";
import CardsLeft from "./CardsLeft";
import {projectData} from "./Data.js";

class Projects extends React.Component{
    constructor(props) {
        super(props);
        this.handleToggle=this.handleToggle.bind(this);
    }
    componentDidMount(){
      const observer=new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){
            entry.target.classList.add('projshow');
          }
        })
      })

      document.querySelectorAll('.projhidden, .projhiddenleft').forEach((el,i)=>{
        el.style.transitionDelay = i * 300 + "ms";
        observer.observe(el)
      });
    }

    handleToggle(evt){
        let tabclicked=evt.target.value;
      ["Projects","Resume","Skills","Experience"].map(tb => {
          if(tb===tabclicked) {
            $(`#${tb}`).slideToggle('slow');
          }
          else
            $(`#${tb}`).slideUp('slow');
      });
      [...document.querySelectorAll(".tabs")].map(btn => {
        if(btn.value===tabclicked) {
          if(btn.classList.contains('bg-blue-400'))
            btn.classList.remove('bg-blue-400')
          else
            btn.classList.add('bg-blue-400')
        }
        else
          btn.classList.remove('bg-blue-400')
      });      
      
    }
    render(){
        return (
          <div className="flex flex-col items-center">
            <button
            id="Projects-btn"
            value="Projects"
            className="tabtnlite"
            onClick={this.handleToggle}
            >
                Projects
            </button>
            <div id="Projects" className="hidden sm:mt-5">
              <div className="relative container mx-auto px-6 flex flex-col space-y-8 lg:w-4/5">
              <div id="bar" className="absolute z-0 w-2 h-[90%] rounded-md bg-blue-400 shadow-md inset-0 left-17 md:left-0 md:right-0 md:mx-auto"></div>
              {
                projectData.map(obj=>{
                  if(obj.itr%2===0)
                    return <Cards
                    img={obj.img}
                    tag={obj.tag}
                    title={obj.title}
                    body={obj.body}
                    link={obj.link}
                    />
                  else
                  return <CardsLeft
                  img={obj.img}
                  tag={obj.tag}
                  title={obj.title}
                  body={obj.body}
                  link={obj.link}
                  />
                })
              }
              </div>
            </div>
          </div>
        );
    }
}

export default Projects;