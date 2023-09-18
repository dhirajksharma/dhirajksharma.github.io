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
                    className="bg-blue-300 py-3 mt-4 mb-2 sm:my-8 rounded-full font-montserrat w-[250px] sm:w-[400px] flex justify-center items-center sm:text-xl">
                        <FontAwesomeIcon icon={faCircleDown} className="text-2xl mr-2"/>
                        Download
                </button>
              </a>
              </div>
          </div>
        );
    }
}

export default Resume;