import React from "react";
import $ from "jquery";
import "devicon";
import { skillData } from "./Data";

class Skills extends React.Component{
    constructor(props) {
        super(props);
        this.handleToggle=this.handleToggle.bind(this);
    }
    componentDidMount(){
      const observer=new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){
            entry.target.classList.add('skillshow');
          }else{
            entry.target.classList.remove('skillshow');
          }
        })
      })

      document.querySelectorAll('.skillhidden').forEach((el,i)=>{
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
          <div className="flex flex-col items-center sm:mt-5">
            <button
            id="Skills-btn"
            value="Skills"
            className="tabtnlite"
            onClick={this.handleToggle}
            >
              Skills
            </button>
            <div id="Skills" className="hidden w-11/12 max-w-2xl">
            <div className="flex flex-wrap justify-center ">
            {skillData.map(obj=>(
              <div className="skillhidden bg-gray-200 w-max rounded-xl inline-flex m-2 items-center"><i class={obj.classlist}>{obj.skill}</i></div>
            ))}
            </div>
            </div>
          </div>
        );
    }
}

export default Skills;