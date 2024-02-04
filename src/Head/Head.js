import React from "react"
import me from './me1.jpg'
import $ from 'jquery'
import './Head.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLink, faBriefcase, faPalette, faPaintBrush, faCode } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

class Head extends React.Component{
    constructor(props){
        super(props);
        this.state={
            activeTab:2,
        }
        
        this.faceLoad=this.faceLoad.bind(this);
        this.toggleSocial=this.toggleSocial.bind(this);
    }

    toggleSocial(){
        if($('#socialink').css('display')==='none'){
            $('#socialink').css('display','flex');
            $('#socialink').animate({
                "opacity":"1"
            },200)
            $('#socialbtn').animate(
                { deg: 45 },
                {
                    duration: 250,
                    step: function(now) {
                        $(this).css({ transform: 'rotate(' + now + 'deg)'});
                    }})
            $('#socialbtn svg').addClass('text-blue-500 !border-blue-500');
        }else{
            $('#socialink').animate({
                "opacity":"0"
            },200)
            $('#socialbtn').animate(
                { deg: 0 },
                {
                    duration: 250,
                    step: function(now) {
                        $(this).css({ transform: 'rotate(' + now + 'deg)' });
                    }})
            setTimeout(() => {
                $('#socialink').css('display','none');
            }, 200);
            $('#socialbtn svg').removeClass('text-blue-500 !border-blue-500');
        }
    }
    
    Faceobserver=new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){
            entry.target.classList.add('showFace');
          }
        })
      })
      
    Introobserver=new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){
            entry.target.classList.add('showIntro');
          }
        })
      })

    Buttonobserver=new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){
            entry.target.classList.add('showButton');
          }
        })
      })

    componentDidMount(){
        this.Faceobserver.observe(document.querySelector('#myface'));
        document.querySelectorAll('.hideIntro').forEach(ele=>this.Introobserver.observe(ele));
        this.Buttonobserver.observe(document.querySelector('.hideButton'));
        this.faceLoad();
    }

    faceLoad(){
        const blurredImageDiv = document.querySelector(".blurred-img")
        const img = blurredImageDiv.querySelector("img")
        function loaded() {
            blurredImageDiv.classList.add("loaded")
        }

        if (img.complete) {
            loaded()
        } else {
            img.addEventListener("load", loaded)
        }
    }

    render(){
        return (
            <div className="flex flex-col items-center justify-evenly h-full">
                <div id="myface" className="blurred-img aspect-square rounded-md max-w-[65%] sm:max-w-[60%] hideFace">
                    <img alt='mypic' src={me} loading="eager" className="shadow-lg rounded-md shadow-slate-400"></img>
                </div>

                <div id='divi1' className="min-h-[140px] sm:min-h-[unset] flex flex-col justify-between">
                <p className="hideIntro my-3 sm:mt-8 lg:mt-2 w-[260px] sm:w-[470px] lg:w-[260px] 2xl:w-[300px] sm:text-2xl lg:text-base 2xl:text-xl text-center font-medium font-outfit text-gray-700">
                    {
                        ((window.innerWidth>=640 && window.innerWidth<1024)?"Hi, I'm Dhiraj Sharma. ":"")
                    }
                    An aspiring FrontEnd Developer, with particular interests in UI/UX design, and romantic comedies &#127871;
                    </p>
                <p className="hideIntro text-center font-bold text-2xl sm:text-4xl lg:text-2xl 2xl:text-3xl sm:mt-6 lg:mt-0 2xl:mt-4 text-gray-700 font-comforter tracking-widest">@Kolkata, India</p>
                </div>

                <div className="hideButton">
                    <div id="foot" className='sm:mt-5 lg:mt-0 flex flex-row text-cyan-800 justify-center'>
                        <button onClick={()=>{this.setState({activeTab:0}); this.props.handleMobileNav(0)}}><FontAwesomeIcon icon={faPalette} className={`socialinks ${this.state.activeTab===0 && "text-blue-500 border-blue-500 "}`}/></button>
                        <button onClick={()=>{this.setState({activeTab:1}); this.props.handleMobileNav(1)}}><FontAwesomeIcon icon={faPaintBrush} className={`socialinks ${this.state.activeTab===1 && "text-blue-500 border-blue-500"}`}/></button>
                        <button onClick={()=>{this.setState({activeTab:3}); this.props.handleMobileNav(3)}}><FontAwesomeIcon icon={faBriefcase} className={`socialinks ${this.state.activeTab===3 && "text-blue-500 border-blue-500"}`}/></button>
                        
                        <div className="flex flex-col relative">
                            <div id="socialink" className="absolute hidden bg-white opacity-0 right-[3.37rem] sm:right-[4.9rem] lg:right-[3.4rem] 2xl:right-[4rem]">
                                <button><a href="https://in.linkedin.com/in/dhirajksharma29" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} className="socialinks "/></a></button>
                                <button><a href="https://github.com/dhirajksharma" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithubAlt} className="socialinks "/></a></button>
                                <button><a href="https://leetcode.com/dhirajksharma" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCode} className="socialinks "/></a></button> 
                            </div>
                            <button
                                id="socialbtn"
                                onClick={this.toggleSocial}>
                                <FontAwesomeIcon icon={faLink} className="socialinks cursor-pointer"/>
                            </button>
                        </div>
                       
                    </div>
                    
                    <a href="mailto:dhirajksharma.official@gmail.com" target="_blank" rel="noreferrer">
                    <button
                        className="bg-blue-300 hover:bg-blue-400 hover:text-white py-3 my-4 rounded-full font-montserrat min-w-[250px] flex justify-center items-center sm:text-2xl lg:text-base 2xl:text-xl w-full sm:w-[400px] lg:w-full 2xl:w-[300px] sm:py-[18px] lg:py-3 sm:mt-6 lg:mt-4">
                            <FontAwesomeIcon icon={faEnvelope} className="text-2xl mr-2 sm:text-4xl lg:text-2xl 2xl:text-4xl"/>
                            Let's Connect!
                    </button>
                    </a>
                </div>
            </div>
        );
    }
}

export default Head;