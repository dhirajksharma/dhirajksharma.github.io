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
          <div className="flex flex-col items-center mb-auto">
            <button
            id="Resume-btn"
            value="Resume"
            className="tabtnlite"
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