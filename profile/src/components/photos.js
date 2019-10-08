import React from 'react';
import Bounce from 'react-reveal/Bounce';
import pic1 from './images/image1.jpg'
import pic2 from './images/image2.jpg'
import pic3 from './images/image3.jpg'
import pic4 from './images/image4.jpg'
import pic5 from './images/image5.JPG'
import pic6 from './images/image6.jpg'

function Pictures(){
    return(
        <Bounce left cascade>
        <div className="hot">
            <h1>Some of my pictures</h1>
            <div className="photo">
            <img src={pic1} alt="image"/>
            <img src={pic2} alt="image"/>
            <img src={pic3} alt="image"/>
            <br/>
            <img src={pic4} alt="image"/>
            <img src={pic5} alt="image"/>
            <img src={pic6} alt="image"/>
            </div>
        </div>
        </Bounce>
    )
}

export default Pictures;