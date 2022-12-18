import React from "react";

class Cards extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div class="relative z-10">
                <img
                    src={this.props.img}
                    alt=""
                    class="timeline-img bg-white"
                />
                <div class="timeline-container projhidden mb-6">
                    <div
                        class="timeline-pointer"
                        aria-hidden="true"
                    ></div>
                    <div class="bg-slate-100 p-4 xs:p-6 rounded-md shadow-md">
                        <span class="font-medium text-indigo-600 text-sm tracking-wide">{this.props.tag}</span>
                        <h1 class="text-xl xs:text-2xl font-bold pt-1">{this.props.title}</h1>
                        <p class="pt-1 text-sm xs:text-base font-montserrat tracking-wide">
                            {this.props.body}
                        </p>
                        <a href={this.props.link} target="_blank">
                        <button
                            className="tabs bg-green-600 hover:bg-green-500 text-white my-3 w-28 h-10 rounded-lg sm:rounded-lg"
                            onClick={this.handleTabClick}
                        >
                        Visit
                        </button></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;