import React from 'react';
import selfPortrait from "./images/portrait.jpg";
import './App.css';
import {MenuButtons} from './MenuBar.js';

var bodyStyle = {
  backgroundImage: `url(${selfPortrait})`,
  backgroundSize: "200vh",
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: "100vh",
  padding: "0",
  margin: "0"
}

var headerStyle = {
  padding: "0",
  marginLeft: "5vh",
  marginTop: "20%",
  fontSize: "200%"
  }


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "index"
    };

    this.onClick = this.onClick.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onClick(button) {
    this.setState({
      page: button
    });
    console.log({button});
  }
  
  //These two functions control mouse hover on Menu Bar
  onMouseEnter(buttonStyle) {
    buttonStyle.color = 'orange';
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
          <h1 className="portraitHeader" style={headerStyle}> Joseph Lackey <br /> Project Manager - Web Developer </ h1>
        </div>
      </div>
    </div>)
  }
}

export default App;
