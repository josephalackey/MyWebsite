import React from 'react';
import selfPortrait from "./images/portrait.jpg";
import './App.css';
import {MenuButtons, NameHeader} from './MenuBar.js';
import resumeLink from "./Documents/Joseph Lackey Resume 1.0E CW.pdf";

const bodyStyle = {
  backgroundImage: `url(${selfPortrait})`,
  backgroundSize: "200vh",
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: "100vh",
  padding: "0",
  margin: "0"
}




// const nameText = ['J','o','s','e','p','h',' ','L','a','c','k','e','y'];
// let newText = [];

// const TypeHeader = (character) => {
//   setTimeout(newText.push(character), 1000);
//   //let stringText = nameText.toString();
//   let stringText = 'Joseph Lackey'
//   return stringText;
  
// }

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
    return (<div className="websiteBody" page={this.state.page}>
      <div style={bodyStyle}>
        <div className="menuBar">
          <MenuButtons onClick={this.onClick} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} />
        </ div>
        <div className="headerContainer" >
        <NameHeader text={this.state.text} />
        </div>
        <div>
          <button className="resumeButton" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onClick={this.resumeClick}>Resume</ button>
        </div>
      </div>
    </div>)
  }
}

export default App;
