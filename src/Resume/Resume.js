import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDown } from '@fortawesome/free-solid-svg-icons'

class Resume extends React.Component{
    
    render(){
        return (
          <div className="flex flex-col items-center w-full justify-center">
            <iframe id="resumeframe" loading="eager" className="pdfembed" src="https://drive.google.com/file/d/19wB-lSbnTzGX7PNaIWRLbImAuQiZIML3/preview" allow="autoplay"></iframe>

            <a href="https://drive.google.com/uc?export=download&id=19wB-lSbnTzGX7PNaIWRLbImAuQiZIML3" target="_blank" rel="noreferrer">
              <button
                  className="bg-blue-300 py-3 mt-4 mb-2 sm:my-8 rounded-xl font-montserrat w-[250px] sm:w-[400px] flex justify-center items-center sm:text-xl">
                      <FontAwesomeIcon icon={faCircleDown} className="text-2xl mr-2"/>
                      Download
              </button>
            </a>
          </div>
        );
    }
}

export default Resume;