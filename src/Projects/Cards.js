import React from "react";

class Cards extends React.Component{
    render(){
        return (
            <div className="w-[90vw] lg:w-[70%] rounded-xl flex flex-col pl-3 my-5 sm:my-8 lg:mt-2 lg:mb-5 shadow-md hover:shadow-xl border hidingPrj cursor-pointer"
                onClick={()=>this.props.handleProjectDetailsToggle(this.props.prjid)}>
                
                <div className="flex items-center justify-between pr-4 mt-4 mb-2 2xl:mb-3">
                    <img alt='project-thumbnail' src={this.props.prjimg} loading="eager" className="w-10 sm:w-14 lg:w-12 2xl:w-14 aspect-square rounded-md bg-gray-100"></img>
                </div>
                
                <h1 className="text-lg sm:text-2xl lg:text-lg 2xl:text-xl font-outfit">{this.props.prjtitle}</h1>
                
                <div className="flex w-[90%] flex-wrap">
                {
                    this.props.prjtag.map(tg=>(
                        <div className="mr-2 rounded-lg hover:bg-slate-200 bg-slate-100 px-2 py-1 text-sm mb-2 sm:text-base lg:text-sm 2xl:text-base lg:rounded-md sm:mt-1 lg:tracking-wide">{tg}</div>
                    ))}
                </div>
                
                <p className="font-montserrat text-sm sm:text-base lg:text-[14px] 2xl:text-lg 2xl:tracking-wide text-justify mr-3 mb-2 line-clamp-4">{this.props.prjintro}</p>
            </div>

        )
    }
}
export default Cards;