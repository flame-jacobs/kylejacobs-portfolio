import React from 'react';
import Bounce from 'react-reveal/Bounce';

import html from "./images/skills/HTML.jpg"
import css from "./images/skills/CSS.jpg"
import js from "./images/skills/JavaScript.jpg"
import phy from "./images/skills/Python.jpg"
import react from "./images/skills/React.jpg"

function skills(){
    return(
        <Bounce left cascade>
        <div className="skill">
            <h1>Skills</h1>
            <img classname="skil"src={phy}/>
            <img classname="skil"src={html}/>
            <img classname="skil"src={css}/>
            <img classname="skil"src={js}/>
            <img classname="skil"src={react}/>
        </div>
        </Bounce>
    )
}

export default skills;