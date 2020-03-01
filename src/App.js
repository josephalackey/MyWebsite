import React from 'react';
import selfPortrait from "./images/portrait.jpg";
import communication from './images/communication.jpeg';
import projectmanagement from './images/projectmanagement.png';
import programming from './images/programming.jpg';
import customerservice from './images/customerservice.jpg';
import sales from './images/sales.jpg'
import UX from './images/UX.jpg'
import networking from './images/networking.jpg';
import problemsolving from './images/problemsolving.png';
import nappers from './images/nappers.jpg';
import './App.css';
import {MenuButtons, NameHeader} from './MenuBar.js';
import {Skills} from './Skills.js';
import resumeLink from "./Documents/Joseph Lackey Resume 1.0E CW.pdf";

const bodyStyle = {
  backgroundImage: `url(${selfPortrait})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  minHeight: "100vh",
  
  padding: "0",
  margin: "0"
}

const skillList = [
  {label: 'Project Management', image: projectmanagement}, 
  {label: 'Programming', image: programming},
  {label: 'Customer Service', image: customerservice},
  {label: 'Communication', image: communication}, 
  {label: 'Sales', image: sales}, 
  {label: 'User Experience', image: UX}, 
  {label: 'Networking', image: networking},
  {label: 'Problem Solving', image: problemsolving}
]


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "index",
      text: ""
    };

    this.onClick = this.onClick.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    //this.headerChange = this.headerChange.bind(this);
  }

  //Meant to set state for page to show
  onClick(button) {
    this.setState({
      page: button
    });
  }
  
  resumeClick() {
    window.location.href=resumeLink;
  }

  //These two functions control mouse hover on Menu Bar
  onMouseEnter(buttonStyle) {
    buttonStyle.color = 'rgb(228, 159, 56)';
    this.setState({
        style: buttonStyle
    });
  }
  onMouseLeave(buttonStyle) {
    buttonStyle.color = 'white';
    this.setState({
        style: buttonStyle
    });
  }

  render() {
    return (<div>
              <div className="menuBar">
                  <MenuButtons onClick={this.onClick} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} />
              </ div>
              <div style={bodyStyle}>
                <div className="headerContainer" >
                  <NameHeader text={this.state.text} />
                </div>
                <div>
                  <button className="resumeButton" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onClick={this.resumeClick}>RESUME</ button>
                </div>
              </div>
              <div className="aboutMe">
                <div className="aboutMeContainer">
                  <img className="aboutMeImage" src={nappers} />
                  <div className="aboutMeText">
                    <h1 className="aboutMeHeader" >About me</h1>
                    <p className="aboutMeBody">Hello, my name is Joseph. I like to do stuff that is fun and fun stuff is really 
                     fun and I am putting a lot of fillwer stuff so that I will be able to keep
                     typing and make this look like a lot of words. These words are the best. In, 
                     fact, I love typing words so much that we will be read. Are you still reading?
                      Hello, my name is Joseph. I like to do stuff that is fun and fun stuff is really 
                     fun and I am putting a lot of fillwer stuff so that I will be able to keep
                     typing and make this look like a lot of words. These words are the best. In, 
                     fact, I love typing words so much that we will be read. Are you still reading?
                     Hello, my name is Joseph. I like to do stuff that is fun and fun stuff is really 
                     fun and I am putting a lot of fillwer stuff so that I will be able to keep
                     typing and make this look like a lot of words. These words are the best. In, 
                     fact, I love typing words so much that we will be read. Are you still reading?</p> 
                    </div>
                  </div>
              </div>
              <div className="skills">
                <h1 className="skillsHeader">Professional Skills</h1>
                <div className='skillContainer'>
                  {skillList.map(skill => (
                    <Skills className='skillItem'
                      title={skill.label}
                      image={skill.image}
                      key={skill.label}
                    />
                  
                  ))}
                </div>
              </div>
            </div>)
  }
}

export default App;
