import React from "react";
import $ from "jquery";

class Resume extends React.Component{
    constructor(props) {
        super(props);
        this.handleToggle=this.handleToggle.bind(this);
    }
    handleToggle(evt){
        let tabclicked=evt.target.value;
      ["Projects","Resume","Skills","Experience"].map(tb => {
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
          <div className="flex flex-col items-center mb-auto">
            <button
            id="Resume-btn"
            value="Resume"
            className="tabs bg-[rgb(42,50,53,255)] text-white my-3 w-3/4 h-12 rounded-xl hover:w-[78%] hover:h-[3.2rem] ease-in duration-200 hover:bg-blue-400 active:bg-blue-400 sm:hidden"
            onClick={this.handleToggle}
            >
                Resume
            </button>
            <div id="Resume" className="hidden">
            <iframe id="resumeid" className="pdfembed" src="https://drive.google.com/file/d/19wB-lSbnTzGX7PNaIWRLbImAuQiZIML3/preview" allow="autoplay"></iframe>
            </div>
          </div>
        );
    }
}

export default Resume;