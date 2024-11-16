import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


class Details extends React.Component{
    constructor(props){
        super(props);
        this.handleTouchMove=this.handleTouchMove.bind(this);
        this.handleTouchStart=this.handleTouchStart.bind(this);
        this.checkScrollDirection=this.checkScrollDirection.bind(this);
        this.checkScrollDirectionDelta=this.checkScrollDirectionDelta.bind(this);
    }

    componentDidMount(){
      var scrollableElement = document.getElementById(this.props.prjid);
      scrollableElement.addEventListener('wheel', this.checkScrollDirection);
      scrollableElement.addEventListener('touchstart', this.handleTouchStart);
      scrollableElement.addEventListener('touchmove', this.handleTouchMove);
    }

    componentWillUnmount(){
      var scrollableElement = document.getElementById(this.props.prjid);
      scrollableElement.removeEventListener('wheel', this.checkScrollDirection);
      scrollableElement.removeEventListener('touchstart', this.handleTouchStart);
      scrollableElement.removeEventListener('touchmove', this.handleTouchMove);
    }

    handleTouchStart(event) {
      this.touchStartY = event.touches[0].clientY;
    }
    
    handleTouchMove(event) {
      var nonscrollableElement = document.getElementById(`notscrollable-${this.props.prjid}`);
      if(nonscrollableElement.contains(event.target))
          return;
      
      var deltaY = event.touches[0].clientY - this.touchStartY;
      if (Math.abs(deltaY) > 19) { // adjust the threshold as needed
        this.checkScrollDirection({ deltaY: deltaY });
      }
    }

    checkScrollDirection(event) {
      if(this.checkScrollDirectionDelta(event, 20, 1)) {
        setTimeout(()=>{
          let btn=document.getElementById(`closebtn${this.props.prjid}`);
          btn.classList.remove('-translate-y-28', 'opacity-0');
        }, 200);
      }else if(this.checkScrollDirectionDelta(event, -30, -1)) {
        let btn=document.getElementById(`closebtn${this.props.prjid}`);
        btn.classList.add('-translate-y-28', 'opacity-0');
      }
    }

    checkScrollDirectionDelta(event, num, flag) {
        if(flag===1){
          if (event.wheelDelta)
            return event.wheelDelta > num;
          return event.deltaY > num;
        }else{
          if (event.wheelDelta)
            return event.wheelDelta < num;
          return event.deltaY > num;
        }
    }
    
    render(){
      const sliderSettings = {
        arrows:true,
        className: "center",
        infinite: true,
        centerPadding: `${window.innerWidth <1024 ? "0px": "60px"}`,
        centerMode: true,
        slidesToShow: 1,
        dots:true,
        speed: 500,
      };

        return (
            <div id={this.props.prjid} className="w-[95vw] lg:w-full hidden flex-col items-center overflow-hidden">
              <button
                id={"closebtn"+this.props.prjid}
                onClick={()=>{
                  let btn=document.getElementById(`closebtn${this.props.prjid}`);
                  btn.classList.add('-translate-y-28', 'opacity-0');
                  this.props.handleProjectDetailsToggle(this.props.prjid)
                }}
                className="font-outfit z-10 bg-gray-800 shadow-[0px_0px_15px_5px] shadow-gray-300 hover:shadow-gray-200 text-white hover:bg-gray-200 hover:text-black px-4 py-2 text-2xl rounded-full lg:mx-2 fixed top-14 opacity-0 -translate-y-28 opacity transition-transform ease-out duration-1000">
                  X
              </button>

              
                <div className="w-full relative lg:hidden">
                  <img alt='project-cover' src={this.props.prjcover} className="w-full rounded-t-lg"></img>
                  <img alt='project-main' src={this.props.prjimg} className="w-14 sm:w-16 lg:w-14 aspect-square rounded-md absolute -bottom-[1.3rem] left-[0.6rem] sm:left-[1rem] bg-gray-100"></img>
                </div>

                <div className="w-[95%] lg:w-full mt-7 lg:mt-2 lg:pr-10">
                  <h1 className="text-xl sm:text-2xl lg:text-xl 2xl:text-2xl font-outfit">{this.props.prjtitle}</h1>
                  <h2 className="mt-1 sm:mt-2 lg:mt-4 sm:text-xl lg:text-base 2xl:text-xl font-outfit font-medium tracking-wide lg:tracking-wider">Description</h2>
                  <p className="font-montserrat text-justify text-sm sm:text-base 2xl:text-lg lg:tracking-wide">{this.props.prjintro}</p>
                  <h2 className="mt-1 sm:mt-2 lg:mt-4 sm:text-xl lg:text-base 2xl:text-xl font-outfit font-medium tracking-wide lg:tracking-wider">Inspiration</h2>
                  <p className="font-montserrat text-justify text-sm sm:text-base 2xl:text-lg lg:tracking-wide">{this.props.prjinsp}</p>
                  <img alt='project-cover' src={this.props.prjcover} className="hidden lg:block w-4/5 mx-auto my-3 rounded-lg"></img>
                  <h2 className="mt-1 -mb-3 sm:mt-2 lg:mt-4 sm:text-xl lg:text-base 2xl:text-xl font-outfit font-medium tracking-wide lg:tracking-wider">Journey</h2>
                  {
                    this.props.prjjrny.map(para=>(
                      <p className="font-montserrat text-justify text-sm my-3 sm:text-base 2xl:text-lg lg:tracking-wide">{para}</p>
                    ))
                  }
                  
                  {/* <div id={`notscrollable-${this.props.prjid}`} className="mx-auto lg:w-5/6">
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
        )
    }
}

export default Details;