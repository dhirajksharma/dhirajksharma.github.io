import React from "react";
import './Experience.css';
import { experienceData } from "../Data/Data";
class Experience extends React.Component{

observer=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('showExp');
    }
  })
})

expBtnobserver=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('showExpBtn');
    }
  })
})

componentDidMount(){
  const hiddenElements=document.querySelectorAll('.hidingExp');
  hiddenElements.forEach(ele=>this.observer.observe(ele));

  if(window.innerWidth > 1024)
    this.expBtnobserver.observe(document.querySelector('.expBtn'));
}

render(){
    return (
      <div className="flex flex-col items-center lg:items-start w-full h-full">
        {
          (window.innerWidth >=1024 &&
            <div className="font-outfit text-lg 2xl:text-2xl mt-2 2xl:mb-2 -translate-x-[4px]">
              Experience
            </div>)
        }
        {
          experienceData.map(exp => (
            <div className="w-[90vw] lg:w-[90%] border-l border-solid border-black relative hidingExpDiv">
              <div className="w-[14px] 2xl:w-4 aspect-square bg-slate-700 rounded-full absolute -left-[7px] top-[18px]">
              </div>
              <h2 className="mt-3 2xl:mt-[10px] translate-x-6 text-sm sm:text-base 2xl:text-xl font-serif text-slate-600 tracking-wide hidingExp">{exp.year}</h2>
              <h1 className="translate-x-6 text-xl sm:text-2xl lg:text-xl 2xl:text-2xl font-outfit hidingExp">{exp.title}</h1>
              <h3 className="translate-x-6 sm:text-lg lg:text-base 2xl:text-lg font-outfit font-extralight italic hidingExp">{exp.location}</h3>
              <p className="mt-2 translate-x-6 sm:text-lg lg:text-base 2xl:text-lg mb-4 font-montserrat w-[80vw] lg:w-[90%] text-justify hidingExp">{exp.details}</p>
            </div>
          ))
        }

        {
          (window.innerWidth >= 1024 &&
            <div className="flex justify-end w-[85%]">
            <a href="https://drive.google.com/file/d/19wB-lSbnTzGX7PNaIWRLbImAuQiZIML3/view" target="_blank" rel="noreferrer">
              <button
                  className="bg-blue-300 hover:opacity-[0.92] py-3 2xl:py-4 mt-4 mb-2 rounded-xl font-montserrat w-[200px] 2xl:w-[230px] 2xl:text-lg expBtn">
                  Checkout My Resume
              </button>
            </a>
            </div>)
        }
      </div>
    );
}
}

export default Experience;