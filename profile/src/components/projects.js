import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Card from 'react-bootstrap/Card'

import proj1 from "./images/weather.png";
import proj2 from "./images/Snake.png"
import proj3 from "./images/convert.png"
import proj4 from "./images/list.png"


function Projects(){
    return(
        <div className="proj">
            <Bounce top>
                <h1>Projects</h1>
                <div className="pro">
                <Card className="skil" style={{ width: '18rem', float: "left" }}>
                 <a href="https://weather-fetch-app.herokuapp.com" className="live-app" ><Card.Img src={proj1}/></a>
                 <Card.Body>
                 <Card.Title>weather app</Card.Title>
                 <Card.Text className="text1">
                 A React App that asks users should enter a city and country when completed,
                the app responds with the weather in that city that was entered 
                 </Card.Text>
                 <p className="link"><a href="https://github.com/flame-jacobs/React-Weather-App/tree/master/src">Go to Code</a></p>
                 </Card.Body>
                </Card>
                <Card className="skil" style={{ width: '18rem', float: "left"  }}>
                 <a href="https://snakegame26.herokuapp.com/"><Card.Img variant="top" src={proj2}/></a>
                 <Card.Body>
                 <Card.Title>Snake Game</Card.Title>
                 <Card.Text className="text2">
                 A React game that uses state functions and lets the user play and increase points while it gets faster 
                 </Card.Text>
                 <p className="link"><a href="https://github.com/flame-jacobs/React-Snake-game/tree/master/game/src">Go to Code</a></p>
                 </Card.Body>
                </Card>
                <Card className="skil" style={{ width: '18rem', float: "left" }}>
                <a href="https://converter-winner.herokuapp.com/"><Card.Img src={proj3} /></a>
                 <Card.Body>
                 <Card.Title>Conveter win</Card.Title>
                 <Card.Text className="text3">
                 A react app that has a dropdown
                that when clicked on a page it either gives you the currency converter or a card game to win
                 </Card.Text>
                 <p className="link"><a href="https://github.com/flame-jacobs/React-app-converter-cardFilp/tree/master/src">Go to Code</a></p>
                 </Card.Body>
                </Card>
                <Card className="skil" style={{ width: '18rem', float: "left" }}>
                <a href="https://todo-list26.herokuapp.com/"><Card.Img src={proj4} /></a>
                 <Card.Body>
                 <Card.Title>TodoList</Card.Title>
                 <Card.Text className="text3">
                 A react app that uses states to ask users to add items to the list and clicked on to delete.
                 </Card.Text>
                 <p className="link"><a href="https://github.com/flame-jacobs/todoList/tree/master/src">Go to Code</a></p>
                 </Card.Body>
                </Card>
                </div>
            </Bounce>
        </div>
    )
}

export default Projects