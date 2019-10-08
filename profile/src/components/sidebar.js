import React from 'react';
import Bounce from 'react-reveal/Bounce';

function SideBar(){
    return(
        <div className="Bar">
            <Bounce left cascade>
            <div className="child">
            <h3 className="link"><a href="/">Home</a></h3>
            <br/>
            <h3 className="link"><a href="/About">About Me</a></h3>
            <br/>
            <h3 className="link"><a href="/skills">Skills</a></h3>
            <br/>
            <h3 className="link"><a href="/Projects">Projects</a></h3>
            <br/>
            <h3 className="link"><a href="/Contact">Contact Me</a></h3>
            <br/>
            <h3 className="link"><a href="/Photography">Photography</a></h3>
            </div>
            </Bounce>
        </div>
    )
}

export default SideBar