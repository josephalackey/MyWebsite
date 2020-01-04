import React from 'react';
import selfPortrait from "./images/portrait.jpg";
import './App.css';

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
  }

  render() {
    return <div className="websiteBody" >
      <p style={bodyStyle}>
        <div className="menuBar">
          <a href=""> Home </a>
          <a href=""> Experience </a>
          <a href=""> Blog </a>
          <a href=""> About Me </a>
        </ div>
        <h1 className="portraitHeader"> Joseph Lackey <br /> Project Manager - Web Developer </ h1>
      </p>
    </div>
  }
}

export default App;
