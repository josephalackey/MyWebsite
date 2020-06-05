import React from 'react';
import selfPortrait from "./images/portrait4.jpg";
import AboutMePhoto from './images/AboutMe.jpg';
import './App.css';
import {MenuButtons, NameHeader} from './MenuBar.js';
import {Skills} from './Skills.js';
import resumeLink from "./Documents/Joseph Lackey Resume 1.6E.pdf";
import Dialog from 'react-dialog';

// Initialize Cloud Firestore through Firebase
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
firebase.initializeApp({
  apiKey: 'AIzaSyAxjmidzSR4I48SsbwYTS_Flqn0qnACD58',
  authDomain: 'personal-website-450d2.firebaseapp.com',
  projectId: 'personal-website-450d2'
});

const db = firebase.firestore();
let testSkillList = [];

//Start of variables and functions to prevent scrolling
const keys = {37: 1, 38: 1, 39: 1, 40: 1, 32: 1, 33: 1, 34: 1, 35: 1, 36: 1};
let supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; }
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false} : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

const preventDefault = (e) => {
  e.preventDefault();
}
const preventDefaultForScrollKeys = (e) => {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}
//End of variables and functions to prevent scrolling
  

//Portrait Style
const bodyStyle = {
  backgroundImage: `url(${selfPortrait})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  minHeight: "100vh",
  padding: "0",
  margin: "0"
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "index",
      text: "",
      skillArray: [],
      isDialogOpen: false,
      skillTitle: "",
      skillDescription: ""
    };

    this.onClick = this.onClick.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.getSkills = this.getSkills.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.openDialog = this.openDialog.bind(this);
    // this.preventDefault = this.preventDefault(this);
    this.getSkills();
  }

  //Pull skills from database
  getSkills() {
    let indexCounter = 0;
    db.collection("Skills").get().then( (querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        
        testSkillList.push({
          name: doc.data().name,
          src: doc.data().src,
          skillStyle: {backgroundColor: doc.data().color},
          currentIndex: indexCounter,
          description: doc.data().description,});
          indexCounter++;
          console.log(indexCounter);
      });
      this.setState({skillArray: testSkillList})
    })}
  
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

  //Dialog Controls
  openDialog(title, description) {
    console.log("open dialog");
    this.disableScroll();
    this.dim(true);
    this.setState({isDialogOpen: true, skillTitle: title, skillDescription: description});
    
  }

  closeDialog() {
    this.enableScroll();
    this.dim(false);
    this.setState({isDialogOpen: false});
  }
  
  //functions to control preventing scroll
  disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  }
  enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  }

  dim = (bool) => {
    if (typeof bool=='undefined') bool=true; // so you can shorten dim(true) to dim()
    document.getElementById('dimmer').style.display=(bool?'block':'none');
  }  

  render() {
    return (<div id="Home" style={{backgroundColor: "#E5E5E5"}}>
              <div className='skillDialogContainer'>
                {
                    this.state.isDialogOpen && 
                    <Dialog width="500px" title="" modal={true} onClose={this.closeDialog}
                        buttons={
                        [{
                            text: "Close",
                            className: "skillDialogButton",
                            onClick: () => this.closeDialog()
                            
                        }]
                    }>
                        <h1 className='skillDialogTitle'>{this.state.skillTitle}</h1>
                        <p className='skillDescription'>{this.state.skillDescription}</p>
                    </Dialog>
                    
                }
                
                </div>
                <div id="dimmer"></div>
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
                  <img className="aboutMeImage" src={AboutMePhoto} width="345" height="460"/>
                  <div className="aboutMeText">
                    <h1 className="aboutMeHeader" >My passion is creating things that are a benefit to others.</h1>
                    <p className="aboutMeBody">Whether it is designing a tool or organizing an event, 
                    I find the process of creation extremely enjoyable and take great pride in the final result. 
                    This feeling is amplified when it directly affects of benefits people.</p> 
                  </div>
                </div>
              </div>
              <h1 style={{textAlign: "center", backgroundColor: "#E5E5E5", fontFamily: "B612", margin: "0", paddingTop: "25px", fontSize: "50px", color: "#242F40"}}>PROFESSIONAL SKILLS</h1>
              <h2 style={{textAlign: "center", backgroundColor: "#E5E5E5", fontFamily: "B612", margin: "0", paddingTop: "25px", fontSize: "15px", color: "#242F40"}}>Click a skill to learn more.</h2>
              <div id="Skills" className="skillInfographic">
              
              {this.state.skillArray.map(skill => (
                    <Skills 
                      title={skill.name}
                      image={skill.src}
                      key={skill.name}
                      skillStyle={skill.skillStyle}
                      description={skill.description || 'Not found.'}
                      currentIndex={this.state.skillArray.indexOf(skill)}
                      openDialog={this.openDialog}
                    />
                  ))}
              </div> 
              <div className="footerContainer">
                <div className="footerEmail" >Contact me for more information.</div> 
                <a href="mailto:josephalackey@gmail.com" className="footerLink" width="40px" height="40px">
                  <img src={require("./images/mailicon2.png")} alt="josephalackey@gmail.com" className="footerGmailImage" />
                </a>
                <a href="https://www.linkedin.com/in/josephalackey" className="footerLink" width="40px" height="40px">
                  <img src={require("./images/linkedin.png")} alt="linkedin" className="footerLinkedInImage" />
                </a>
              </div>
              
            </div>)
  }
}

export default App;
