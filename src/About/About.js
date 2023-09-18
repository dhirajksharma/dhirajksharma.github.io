import React from "react";
import './About.css';

class About extends React.Component{

nameobserver=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('showAbtName');
    }
  })
})

desobserver=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('showAbtDes');
    }
  })
})

psobserver=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('showAbtPs');
    }
  })
})


componentDidMount(){
  this.nameobserver.observe(document.querySelector('.abtName'));
  this.desobserver.observe(document.querySelector('.abtDes'));
  this.psobserver.observe(document.querySelector('.abtPs'));
}

render(){
    return (
      <div className="flex flex-col w-full h-full">
        <div className="font-outfit text-lg 2xl:text-2xl mt-2">
          Hello there!
        </div>
        
        <div className="h-[80vh] flex flex-col justify-between">
          <div>
          <h1 className="abtName font-julius font-semibold text-8xl 2xl:text-[8rem] mt-14 text-[rgb(82,20,85)]">I'm Dhiraj</h1>
          <p className="abtDes mt-5 2xl:mt-10 font-montserrat tracking-wide 2xl:tracking-wider text-lg 2xl:text-[22px] 2xl:leading-8 w-4/5 text-justify text-gray-800">An enthusiastic undergrad student pursuing Computer Science. My passion lies in crafting seamless and user-friendly interfaces using frontend technologies. When I'm not immersed in coding, you might catch me engrossed in comic books or preparing delightful meals for my loved ones.</p>
          </div>

        <div className="abtPs flex">
          <h1 className="font-montserrat font-light text-lg 2xl:text-2xl text-justify mr-2 italic">ps:</h1>  
          <p className="font-outfit font-light text-lg 2xl:text-2xl w-4/6 text-justify">I love to talk to people and share stories with them. Do checkout my blog for some. In the meantime, while you're here, allow me to regale you with my professional life.</p>
        </div>
      </div>
      </div>
    );
}
}

export default About;
