import React from "react";
import './About.css';

class About extends React.Component{
  constructor(props) {
    super(props);
    
}

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
        <div className="font-outfit text-lg mt-2">
          Hello there!
        </div>
        
        <div>
          <h1 className="abtName font-julius font-semibold text-8xl mt-14 text-[rgb(82,20,85)]">I'm Dhiraj</h1>
          <p className="abtDes font-montserrat tracking-wide text-lg w-[720px] text-justify mt-5 text-gray-800">An enthusiastic undergrad student pursuing Computer Science. My passion lies in crafting seamless and user-friendly interfaces using frontend technologies. When I'm not immersed in coding, you might catch me engrossed in comic books or preparing delightful meals for my loved ones.</p>
        </div>

        <div className="abtPs flex mt-16">
          <h1 className="font-montserrat font-light text-lg text-justify mr-2 italic">ps:</h1>  
          <p className="font-outfit font-light text-lg w-[600px] text-justify">I love to talk to people and share stories with them. Do checkout my blog for some. In the meantime, while you're here, allow me to regale you with my professional life.</p>
        </div>
      </div>
    );
}
}

export default About;
