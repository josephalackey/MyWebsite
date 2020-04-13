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
import Dialog from 'react-dialog';

const firebaseConfig = {
  apiKey: "AIzaSyAxjmidzSR4I48SsbwYTS_Flqn0qnACD58",
  authDomain: "personal-website-450d2.firebaseapp.com",
  databaseURL: "https://personal-website-450d2.firebaseio.com",
  projectId: "personal-website-450d2",
  storageBucket: "personal-website-450d2.appspot.com",
  messagingSenderId: "639341114300",
  appId: "1:639341114300:web:5ecf700ce40e8cfa5971b9",
  measurementId: "G-GFWEW07PPQ"
};
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

const keys = {37: 1, 38: 1, 39: 1, 40: 1, 32: 1, 33: 1, 34: 1, 35: 1, 36: 1}

let testSkillList = [];

const bodyStyle = {
  backgroundImage: `url(${selfPortrait})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  minHeight: "100vh",
  padding: "0",
  margin: "0"
}
const skillList = [
  {name: 'Project Management', src: projectmanagement, skillStyle:{backgroundColor: "#8D99AE"}}, 
  {name: 'Programming', src: programming, skillStyle:{backgroundColor: "#242F40"}},
  {name: 'Customer Service', src: customerservice, skillStyle:{backgroundColor: "#242F40"}},
  {name: 'Communication', src: communication, skillStyle:{backgroundColor: "#CCA43B"}}, 
  {name: 'Building Solutions', src: sales, skillStyle:{backgroundColor: "#CCA43B"}}, 
  {name: 'User Experience', src: UX, skillStyle:{backgroundColor: "#8D99AE"}}, 
  {name: 'Networking', src: networking, skillStyle:{backgroundColor: "#8D99AE", }},
  {name: 'Problem Solving', src: problemsolving, skillStyle:{backgroundColor: "#242F40"}}
];


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
    this.setState({isDialogOpen: true, skillTitle: title, skillDescription: description});
    
  }

  closeDialog() {
    this.setState({isDialogOpen: false});
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
                  <img className="aboutMeImage" src={nappers} width="345" height="460"/>
                  <div className="aboutMeText">
                    <h1 className="aboutMeHeader" >My passions is creating things that are relevant to others.</h1>
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
                <a href="mailto:josephalackey@gmail.com" className="footerLink" width="37.22px" height="31px">
                  <img src={require("./images/gmailicon.png")} alt="josephalackey@gmail.com" className="footerGmailImage" />
                </a>
                <a href="https://www.linkedin.com/in/josephalackey" className="footerLink" width="34px" height="29.1px">
                  <img src={require("./images/linkedin.png")} alt="linkedin" className="footerLinkedInImage" />
                </a>
              </div> 
            </div>)
  }
}

export default App;
