import React from 'react';
import selfPortrait from "./images/portrait.jpg";
import './App.css';
import {MenuButtons} from './MenuBar.js';

var bodyStyle = {
  backgroundImage: `url(${selfPortrait})`,
  backgroundSize: "200vh",
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: "75vh"
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "index"
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(button) {
    this.setState({
      page: button
    });
    console.log({button});
  }
  render() {
    return (<div className="websiteBody" page={this.state.page}>
      <p style={bodyStyle}>
        <div className="menuBar">
          <MenuButtons onClick={this.onClick}/>
        </ div>
        <h1 className="portraitHeader"> Joseph Lackey <br /> Project Manager - Web Developer </ h1>
      </p>
    </div>)
  }
}

export default App;
