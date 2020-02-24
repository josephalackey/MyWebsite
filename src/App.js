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
    console.log({button});
    window.location.href='./Skills.js';
  }
  
  resumeClick() {
    window.location.href=resumeLink;
  }

  //These two functions control mouse hover on Menu Bar
  onMouseEnter(buttonStyle) {
    buttonStyle.color = 'cyan';
    this.setState({
        style: buttonStyle
    });
    console.log('orange');
  }
  onMouseLeave(buttonStyle) {
    buttonStyle.color = 'white';
    this.setState({
        style: buttonStyle
    });
    console.log('white');
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
                  <button className="resumeButton" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onClick={this.resumeClick}>Resume</ button>
                </div>
              </div>
              <div className="skills">
                <h1 className="skillsHeader">Professional Skills</h1>
                <div className='skillContainer'>
                  {skillList.map(skill => (
                    <Skills className='skillItem'
                      title={skill.label}
                      image={skill.image}
                    />
                  
                  ))}
                </div>
              </div>
            </div>)
  }
}

export default App;
