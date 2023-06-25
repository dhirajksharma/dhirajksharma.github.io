import React from "react";
import './Experience.css';
import { experienceData } from "./Data";
class Experience extends React.Component{
  constructor(props) {
    super(props);
    
}

observer=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('showExp');
    }
  })
})

componentDidMount(){
  const hiddenElements=document.querySelectorAll('.hidingExp');
  hiddenElements.forEach(ele=>this.observer.observe(ele));
}

render(){
    return (
      <div className="flex flex-col items-center lg:items-start w-full h-full">
        {
          (window.innerWidth >=1024 &&
            <div className="font-outfit text-lg mt-2 -translate-x-[4px]">
              Experience
            </div>)
        }
        {
          experienceData.map(exp => (
            <div className="w-[90vw] lg:w-[90%] border-l border-solid border-black relative hidingExpDiv">
              <div className="w-[14px] h-[14px] bg-slate-700 rounded-full absolute -left-[7px] top-[18px]">
              </div>
              <h2 className="mt-4 translate-x-6 text-sm sm:text-base font-serif text-slate-600 tracking-wide hidingExp">{exp.year}</h2>
              <h1 className="translate-x-6 text-xl sm:text-2xl lg:text-xl font-outfit hidingExp">{exp.title}</h1>
              <h3 className="translate-x-6 sm:text-lg lg:text-base font-outfit font-extralight hidingExp">{exp.location}</h3>
              <p className="mt-2 translate-x-6 sm:text-lg lg:text-base mb-4 font-montserrat w-[80vw] lg:w-[90%] text-justify hidingExp">{exp.details}</p>
            </div>
          ))
        }
      </div>
    );
}
}

export default Experience;