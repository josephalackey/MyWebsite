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

var newButtonColor = {};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "index"
    };

    this.onClick = this.onClick.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onClick(button) {
    this.setState({
      page: button
    });
    console.log({button});
  }

  onMouseOver(buttonStyle) {
    
    newButtonColor = buttonStyle;
    newButtonColor.color = 'orange';
  }

  render() {
    return (<div className="websiteBody" page={this.state.page}>
      <div style={bodyStyle}>
        <div className="menuBar">
          <MenuButtons onClick={this.onClick} onMouseOver={this.onMouseOver} style={newButtonColor}/>
        </ div>
        <div className="headerContainer" >
          <h1 className="portraitHeader" style={headerStyle}> Joseph Lackey <br /> Project Manager - Web Developer </ h1>
        </div>
      </div>
    </div>)
  }
}

export default App;
