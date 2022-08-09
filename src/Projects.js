import React from "react";
import $ from "jquery";
import Cards from "./Cards";
import CardsLeft from "./CardsLeft";
import { fa } from '@fortawesome/free-solid-svg-icons'

class Projects extends React.Component{
    constructor(props) {
        super(props);
        this.handleToggle=this.handleToggle.bind(this);
    }
    handleToggle(evt){
        let tabclicked=evt.target.value;
      ["Projects","Education","Skills","Experience"].map(tb => {
          if(tb===tabclicked)
            $(`#${tb}`).slideToggle();
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
          <div className="flex flex-col items-center">
            <button
            id="Projects-btn"
            value="Projects"
            className="tabs bg-[rgb(42,50,53,255)] text-white my-3 w-3/4 h-12 rounded-xl hover:w-[78%] hover:h-[3.2rem] ease-in duration-200 hover:bg-blue-400 active:bg-blue-400 sm:hidden"
            onClick={this.handleToggle}
            >
                Projects
            </button>
            <div id="Projects" className="hidden sm:mt-5">
              <div className="relative container mx-auto px-6 flex flex-col space-y-8 lg:w-4/5">
              <div className="absolute z-0 w-2 h-[90%] rounded-md bg-blue-400 shadow-md inset-0 left-17 md:left-0 md:right-0 md:mx-auto"></div>
              <Cards
              img="https://github.com/dhirajksharma/dhirajksharma.github.io/blob/main/public/android-chrome-384x384.png?raw=true"
              tag="React.JS jQuery TailwindCSS"
              title="My Portfolio"
              body="Well, you are currently here! A single place to showcase my skills, the projects I have worked upon, the work experiences I have and a peek at my resume!"
              link="https://dhirjksharma.github.io/"
              />
              <CardsLeft
              img="https://github.com/dhirajksharma/reactgames/blob/main/src/logo.png?raw=true"
              tag="React.JS"
              title="React Games"
              body="A set of simple games built using React.js. Games currently include Hangman, and Lights Out, with Yahtzee soon to be added."
              link="https://dhirajksharma.github.io/reactgames/"
              />
              <Cards
              img="https://github.com/dhirajksharma/pokeduel/blob/main/res/pokeball.png?raw=true"
              tag="JavaScript jQuery"
              title="Poké Duel"
              body="A Basic Pokémon game where 2 players choose their Pokémons from a randomly generated group and duel against each other. The Pokémon with more power remaining at the end of the duel, wins!"
              link="https://dhirjksharma.github.io/pokeduel/"
              />
              </div>
            </div>
          </div>
        );
    }
}

export default Projects;