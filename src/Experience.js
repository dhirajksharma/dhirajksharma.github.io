import React from "react";
import $ from "jquery";
import searchimg from "./search.jpg";
class Experience extends React.Component{
    constructor(props) {
        super(props);
        this.handleToggle=this.handleToggle.bind(this);
    }
    handleToggle(evt){
        let tabclicked=evt.target.value;
      ["Projects","Education","Skills","Experience"].map(tb => {
          if(tb===tabclicked)
            $(`#${tb}`).slideToggle();
          else
            $(`#${tb}`).slideUp();
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
            id="Experience-btn"
            value="Experience"
            className="bg-[rgb(42,50,53,255)] text-white my-3 w-3/4 h-12 rounded-xl hover:w-[78%] hover:h-[3.2rem] ease-in duration-200 hover:bg-blue-400 active:bg-blue-400 sm:hidden"
            onClick={this.handleToggle}
            >
                Experience
            </button>
            <div id="Experience" className="hidden font-mono">
            <div className="flex flex-col items-center ">
              <img src={searchimg} className="w-2/3 max-w-xl"></img>
            Looking Out For Some
            </div>
            </div>
          </div>
        );
    }
}

export default Experience;