import React from 'react';
import Bounce from 'react-reveal/Bounce';

import pic1 from "./images/about1.gif"
import pic2 from "./images/about2.gif"
// import pic3 from "./images/about3.gif"
// import pic4 from "./images/about4.gif"

function About(){
    return(
        <Bounce bottom>
        <div className="info">
        <h1>About Me</h1>
        <h3>I am a web developer who has always had an eye on technology
           and always wanted to be on the other side of the web interfaces.  
           Its always fun learning something new considering code, 
           but if im not near my computer im busy skating, surfing or just taking pictures of nature.</h3>
        </div>
        </Bounce>
    )
}

export default About;