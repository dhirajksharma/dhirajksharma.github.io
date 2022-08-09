import React from "react";
import $ from "jquery";
import "devicon";
class Skills extends React.Component{
    constructor(props) {
        super(props);
        this.handleToggle=this.handleToggle.bind(this);
    }
    handleToggle(evt){
        let tabclicked=evt.target.value;
      ["Projects","Resume","Skills","Experience"].map(tb => {
          if(tb===tabclicked) {
            $(`#${tb}`).slideToggle();
          }
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
          <div className="flex flex-col items-center sm:mt-5">
            <button
            id="Skills-btn"
            value="Skills"
            className="bg-[rgb(42,50,53,255)] text-white my-3 w-3/4 h-12 rounded-xl hover:w-[78%] hover:h-[3.2rem] ease-in duration-200 hover:bg-blue-400 active:bg-blue-400 sm:hidden"
            onClick={this.handleToggle}
            >
              Skills
            </button>
            <div id="Skills" className="hidden w-11/12 max-w-2xl">
            <div className="flex flex-wrap justify-center ">
            <div className="bg-gray-200 w-max rounded-xl inline-flex m-2 items-center"><i class="devicon-cplusplus-plain font-medium text-base sm:text-xl p-2">C++</i></div>
            <div className="bg-gray-200 w-max rounded-xl inline-flex m-2 items-center"><i class="devicon-css3-plain font-medium text-base sm:text-xl p-2">CSS</i></div>
            <div className="bg-gray-200 w-max rounded-xl inline-flex m-2 items-center"><i class="devicon-express-original font-medium text-base sm:text-xl p-2">Express.js</i></div>
            <div className="bg-gray-200 w-max rounded-xl inline-flex m-2 items-center"><i class="devicon-git-plain font-medium text-base sm:text-xl p-2">Git</i></div>
            <div className="bg-gray-200 w-max rounded-xl inline-flex m-2 items-center"><i class="devicon-html5-plain font-medium text-base sm:text-xl p-2">HTML5</i></div>
            <div className="bg-gray-200 w-max rounded-xl inline-flex m-2 items-center"><i class="devicon-javascript-plain font-medium text-base sm:text-xl p-2">JavaScript</i></div>
            <div className="bg-gray-200 w-max rounded-xl inline-flex m-2 items-center"><i class="devicon-jquery-plain font-medium text-base sm:text-xl p-2">jQuery</i></div>
            <div className="bg-gray-200 w-max rounded-xl inline-flex m-2 items-center"><i class="devicon-nodejs-plain font-medium text-base sm:text-xl p-2">Node.js</i></div>
            <div className="bg-gray-200 w-max rounded-xl inline-flex m-2 items-center"><i class="devicon-react-original font-medium text-base sm:text-xl p-2">React.js</i></div>
            <div className="bg-gray-200 w-max rounded-xl inline-flex m-2 items-center"><i class="devicon-tailwindcss-plain font-medium text-base sm:text-xl p-2">TailwindCSS</i></div>
            </div>
            </div>
          </div>
        );
    }
}

export default Skills;