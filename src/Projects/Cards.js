import React from "react";
import ReactModal from "react-modal";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Cards extends React.Component{
    constructor(props){
        super(props);
        this.state={
            modalIsOpen: false,
        }

        this.toggleModal=this.toggleModal.bind(this);
    }

    toggleModal() {
        let curr=this.state.modalIsOpen;
        this.setState({modalIsOpen: !curr});
    }
  
    render(){
        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                overflow:'scroll',
                maxHeight: `${window.innerWidth>=1024 ? "90vh":"95dvh"}`,
                maxWidth: `${window.innerWidth>=1024 ? "92dvw":"95dvw"}`,
                borderRadius: "8px",
                boxShadow: "0 15px 25px 0px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
            },
        };
    
        ReactModal.setAppElement('#root');
        return (
            <div className="w-[90vw] lg:w-[70%] rounded-xl flex flex-col pl-3 my-5 sm:my-8 lg:mt-2 lg:mb-5 shadow-md hover:shadow-xl border hidingPrj cursor-pointer"
                onClick={this.toggleModal}>
                
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

                <ReactModal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.toggleModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <button
                        onClick={this.toggleModal}
                        className="absolute z-10 right-2 top-2 lg:right-3 lg:top-3 px-2 text-2xl bg-white bg-opacity-50 rounded-full"
                    >
                        <FontAwesomeIcon icon={faTimes} className="shadow-2xl m-0 p-0"/>
                    </button>
                    <div id={this.props.prjid} className="lg:px-4 flex flex-col items-center">
                        <div className="relative lg:hidden">
                        <img alt='project-cover' src={this.props.prjcover} className="w-full rounded-t-lg"></img>
                        <img alt='project-main' loading="eager" src={this.props.prjimg} className="w-14 sm:w-16 lg:w-14 aspect-square rounded-md absolute -bottom-[1.3rem] left-[0.6rem] sm:left-[1rem] bg-gray-100"></img>
                        </div>

                        <div className="mt-7 lg:mt-2 ">
                            <h1 className="text-xl sm:text-2xl lg:text-xl 2xl:text-2xl font-outfit">{this.props.prjtitle}</h1>
                            <h2 className="mt-1 sm:mt-2 lg:mt-4 sm:text-xl lg:text-base 2xl:text-xl font-outfit font-medium tracking-wide lg:tracking-wider">Description</h2>
                            <p className="font-montserrat text-justify text-sm sm:text-base 2xl:text-lg lg:tracking-wide">{this.props.prjintro}</p>
                            <h2 className="mt-1 sm:mt-2 lg:mt-4 sm:text-xl lg:text-base 2xl:text-xl font-outfit font-medium tracking-wide lg:tracking-wider">Inspiration</h2>
                            <p className="font-montserrat text-justify text-sm sm:text-base 2xl:text-lg lg:tracking-wide">{this.props.prjinsp}</p>
                            <img alt='project-cover' src={this.props.prjcover} className="hidden lg:block w-2/3 mx-auto my-3 rounded-lg"></img>
                        
                            <h2 className="mt-1 -mb-3 sm:mt-2 lg:mt-4 sm:text-xl lg:text-base 2xl:text-xl font-outfit font-medium tracking-wide lg:tracking-wider">Journey</h2>
                            {
                                this.props.prjjrny.map(para=>(
                                <p className="font-montserrat text-justify text-sm my-3 sm:text-base 2xl:text-lg lg:tracking-wide">{para}</p>
                                ))
                            }
                        
                        {/* <div className="mx-auto lg:w-5/6">
                        <Slider {...sliderSettings}>
                            {this.props.prjcarousel.map((imgsrc) =>
                                <div className="w-[90vw] lg:w-auto">
                                <img alt='project-samples' src={imgsrc} className="rounded-lg w-[90vw] lg:w-auto"></img>
                                </div>
                            )}
                        </Slider>
                        </div> */}
                        <br></br>
                        {/* {
                            this.props.prjjrny.slice(2).map(para=>(
                            <p className="font-montserrat text-justify text-sm my-3 sm:text-base 2xl:text-lg lg:tracking-wide">{para}</p>
                            ))
                        } */}
                        </div>
                    </div>
                </ReactModal>
            </div>

        )
    }
}
export default Cards;