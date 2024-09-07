import React from "react";
import './Resume.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDown } from '@fortawesome/free-solid-svg-icons'

class Resume extends React.Component{
    constructor(props){
      super(props)
      this.resumeDiv=React.createRef()
      this.loader=React.createRef()
      this.handlleLoad=this.handlleLoad.bind(this)
    }

    handlleLoad(){
      this.loader.current.classList.add('hidden')
      this.resumeDiv.current.classList.remove('hidden')
    }
    render(){
        return (
          <div className="w-full h-full flex justify-center items-center">
            <div class="main-wrapper" ref={this.loader}>
              <div class="drive-loader">
                <div class="fold yellow"></div>
                <div class="fold blue"></div>
                <div class="fold green"></div>
              </div>
            </div>

            <div ref={this.resumeDiv} className="w-full h-full flex flex-col items-center hidden">
              <iframe title="resume" onLoad={this.handlleLoad} id="resumeframe" loading="eager" className="pdfembed" src="https://drive.google.com/file/d/19wB-lSbnTzGX7PNaIWRLbImAuQiZIML3/preview" allow="autoplay"></iframe>

              <a href="https://drive.google.com/uc?export=download&id=19wB-lSbnTzGX7PNaIWRLbImAuQiZIML3" target="_blank" rel="noreferrer">
                <button
                    className="transition-all bg-blue-300 hover:bg-blue-500 hover:text-white py-3 my-4 rounded-full font-montserrat min-w-[250px] flex justify-center items-center sm:text-xl lg:text-base 2xl:text-xl w-full sm:w-[360px] lg:w-full 2xl:w-[300px] sm:py-4 lg:py-3 sm:mt-6 lg:mt-4">
                        <FontAwesomeIcon icon={faCircleDown} className="text-2xl sm:text-3xl mr-2"/>
                        Download
                </button>
              </a>
              </div>
          </div>
        );
    }
}

export default Resume;