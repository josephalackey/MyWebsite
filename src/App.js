import React from 'react';
import selfPortrait from "./images/portrait.jpg";
import communication from './images/chat.png';
import projectmanagement from './images/pie-chart.png';
import programming from './images/macbook.png';
import customerservice from './images/girl.png';
import sales from './images/tag.png'
import UX from './images/user.png'
import networking from './images/server.png';
import problemsolving from './images/mind.png';
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
const testStyle1 = {backgroundColor: "#8D99AE", textAlign: "left"};
const testStyle2 = {backgroundColor: "#242F40", textAlign: "right"};
const testStyle3 = {backgroundColor: "#242F40", textAlign: "left"};
const testStyle4 = {backgroundColor: "#CCA43B", textAlign: "right"};
const testStyle5 = {backgroundColor: "#CCA43B", textAlign: "left"};
const testStyle6 = {backgroundColor: "#8D99AE", textAlign: "right"};
const testStyle7 = {backgroundColor: "#8D99AE", textAlign: "left"};
const testStyle8 = {backgroundColor: "#242F40", textAlign: "right"};
const skillList = [
  {label: 'Project Management', image: projectmanagement, skillStyle:{backgroundColor: "#8D99AE"}}, 
  {label: 'Programming', image: programming, skillStyle:{backgroundColor: "#242F40"}},
  {label: 'Customer Service', image: customerservice, skillStyle:{backgroundColor: "#242F40"}},
  {label: 'Communication', image: communication, skillStyle:{backgroundColor: "#CCA43B"}}, 
  {label: 'Building Solutions', image: sales, skillStyle:{backgroundColor: "#CCA43B"}}, 
  {label: 'User Experience', image: UX, skillStyle:{backgroundColor: "#8D99AE"}}, 
  {label: 'Networking', image: networking, skillStyle:{backgroundColor: "#8D99AE", }},
  {label: 'Problem Solving', image: problemsolving, skillStyle:{backgroundColor: "#242F40"}}
];


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
    document.getElementById(button).scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }
  
  resumeClick() {
    window.location.href=resumeLink;
  }

  //These two functions control mouse hover on Menu Bar
  onMouseEnter(buttonStyle) {
    buttonStyle.color = 'rgb(204, 164, 59)';
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
    return (<div id="Home">
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
              <div className="aboutMe" id="aboutMe">
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
              <h1 style={{textAlign: "center", backgroundColor: "#E5E5E5", fontFamily: "B612", margin: "0", paddingTop: "50px", fontSize: "50px", color: "#242F40"}}>PROFESSIONAL SKILLS</h1>
              <div id="Skills" className="skillInfographic">
                  {skillList.map(skill => (
                    <Skills 
                      title={skill.label}
                      image={skill.image}
                      key={skill.label}
                      skillStyle={skill.skillStyle}
                      currentIndex={skillList.indexOf(skill)}
                    />
                  ))}
                
              </div>
            </div>)
  }
}

export default App;
