import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Mailto from 'react-mailto'

function Contact(){
    return(
        <div className="call">
        <Bounce right cascade>
        <h1>Contact Me</h1>
        <h3>If you need to contact me :</h3>
        <Mailto email="kylejacobs423@gmail.com" obfuscate={true}> Email:  kylejacobs423@gmail.com</Mailto>
        </Bounce>
        <Bounce bottom>
        <h3 className="link"><a href="https://github.com/flame-jacobs">Github account:CLick to go to GitHub</a>
        </h3>
        <br/>
        </Bounce>
        </div>
        
    )
}

export default Contact