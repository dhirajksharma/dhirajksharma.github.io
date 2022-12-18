import React from "react";
import Projects from "./Projects.js";
import Skills from "./Skills.js";
import Experience from "./Experience.js";
import Resume from "./Resume.js";
import $ from "jquery";

class Tab extends React.Component{
    constructor(props) {
        super(props);
        this.handleTabClick=this.handleTabClick.bind(this);
    }
    handleTabClick(evt){
      let tabclicked=evt.target.value;
      ["Projects","Resume","Skills","Experience"].map(tb => {
          if(tb===tabclicked && tb!=="Projects")
            $(`#${tb}`).fadeToggle();
          else if(tb===tabclicked && tb==="Projects")
            $(`#${tb}`).slideToggle("slow");
          else
            $(`#${tb}`).hide();
            
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
    generateTabs() {
        return ["Skills","Projects","Experience", "Resume"].map(ltr => (
          <button
            value={ltr}
            className="tabtn"
            onClick={this.handleTabClick}
          >
            {ltr}
          </button>
        ));
    }
    render(){
        return (
          <div>
            <div className="hidden sm:flex sm:flex-row sm:justify-center">
                {this.generateTabs()}
            </div>
            <Skills/>
            <Projects/>
            <Experience/>
            <Resume/>
          </div>
        );
    }
}

export default Tab;