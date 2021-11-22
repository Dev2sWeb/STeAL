import React from 'react'
import "./home.css"
import Home2 from './Home2';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
    Link
  } from "react-router-dom";
import Art from './Art';  
import Ques from './Ques'
import News from './News';
import Chat from './Chat';
function Home() {
    return (
        <div>
            <Router>      
            <nav class="navbar sticky-top navbar-dark bg-primary navbar-expand-lg">
            <div class="container-fluid">
                {/* <a class="navbar-brand" id="home" href="">STeAL</a> */}
                <Link to="/Home2" class="navbar-brand" id="home">STeAL</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    {/* <a class="nav-link active" aria-current="page" id="home" href="#home" >Home</a> */}
                    <Link to="/Home2" class="nav-link active">Home</Link>
                    </li>
                  
                  
                    <li class="nav-item">
                    {/* <a class="nav-link active" id="news" href="#news">News</a> */}
                    <Link to="/News" class="nav-link active">News</Link>
                    </li>
                  
                    <li class="nav-item">
                    {/* <a class="nav-link active" id="chat" href="#chat">Chat</a> */}
                    <Link to="/Chat" class="nav-link active">Chat</Link>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" id="study" href="#study">Study resource</a>
                    {/* <Link to="/Study" class="nav-link active">Study Resource</Link> */}
                    </li>
                    <li class="nav-item">
                    {/* <a class="nav-link active" id="ques" href="#ques">Questions</a> */}
                    <Link to="/Ques" class="nav-link active">Questions</Link>
                    </li>
                    <li class="nav-item">
                    {/* <a class="nav-link active" href="#art" id="art">Art Gallery</a> */}
                    <Link to="/Art" class="nav-link active">Art Gallery</Link>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" id="help" href="#help">Help</a>
                    {/* <Link to="/Help" class="nav-link active">Help</Link> */}
                    </li>
                </ul>
                </div>
            </div>
            </nav>            
            <Switch>
          <Route exact path="/Home2">
            <Home2 />
          </Route>
          <Route exact path="/News">
            <News />
          </Route>          
          <Route exact path="/Art">
            <Art></Art>
          </Route>
          <Route exact path="/Ques">
            <Ques/>
          </Route>
          <Route exact path="/Chat">
            <Chat/>
          </Route>
          <Redirect to="/Home2"></Redirect>
            </Switch>      
            </Router>
        {/* <Home2/> */}
    </div>
    )
}

export default Home
