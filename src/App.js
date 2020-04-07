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



let testSkillList = [];
const newTestSkillList = [];

const renderSkill = (doc) => {
  let skill = document.createElement("Skills");
  skill.title = doc.data().name;
  skill.src = doc.data().src;
  
  const skillsSelector = document.getElementById('Skills');
  skillsSelector.appendChild(skill);
}

// const getSkills = async () => {
// let indexCounter = 0;
// await db.collection("Skills").get().then( (querySnapshot) => {
//   querySnapshot.docs.forEach((doc) => {
//     testSkillList.push({
//       name: doc.data().name,
//       src: doc.data().src,
//       key: doc.data().name,
//       skillStyle: doc.data().color,
//       currentIndex: indexCounter});
//       console.log(testSkillList);
    
//     newTestSkillList.push(<Skills 
//       title={doc.data().name}
//       image={doc.data().src}
//       key={doc.data().name}
//       skillStyle={doc.data().skillStyle}
//       currentIndex={1}
//     />)
//     console.log(doc.data().name)
        
//   });
// });

// newTestSkillList = await testSkillList.json();





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
    this.createSkills = this.createSkills.bind(this);
    this.getSkills = this.getSkills.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.getSkills();
    //this.headerChange = this.headerChange.bind(this);
  }
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
    createSkills() {
      let tempList = [];
      console.log(skillList);
      console.log(testSkillList)
      testSkillList.map(skill => {
        console.log(skill.name);
    })
      
      console.log("state set")
      // for (let i = 0; i < testSkillList.length; i++) {
      // tempList.push((<Skills 
      //   title={tempList[i].name}
      //   image={tempList[i].src}
      //   key={tempList[i].name}
      //   skillStyle={tempList[i].skillStyle}
      //   currentIndex={i}
        
      // />));
      // console.log(tempList[i])
      // };
      console.log(testSkillList)
      console.log(tempList)
      console.log(newTestSkillList)
      
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

  //Dialog Controls
  openDialog(title, description) {
    console.log("open dialog");
    this.setState({isDialogOpen: true, skillTitle: title, skillDescription: description});
    
  }

  closeDialog() {
    this.setState({isDialogOpen: false});
  }

  componentDidUpdate() {
    this.createSkills();
    console.log("render");
    console.log(this.state.skillArray);
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
                  <img className="aboutMeImage" src={nappers} />
                  <div className="aboutMeText">
                    <h1 className="aboutMeHeader" >About me</h1>
                    <p className="aboutMeBody">Hello, my name is Joseph. I like to do stuff that is fun and fun stuff is really 
                     fun and I am putting a lot of fillwer stuff so that I will be able to keep
                     typing and make this look like a lot of words. These words are the best. In, 
                     fact, I love typing words so much that we will be read. Are you still reading?
                      Hello, my name is Joseph. </p> 
                    </div>
                  </div>
              </div>
              <h1 style={{textAlign: "center", backgroundColor: "#E5E5E5", fontFamily: "B612", margin: "0", paddingTop: "50px", fontSize: "50px", color: "#242F40"}}>PROFESSIONAL SKILLS</h1>
              
              <div id="Skills" className="skillInfographic">
              
              {this.state.skillArray.map(skill => (
                    <Skills 
                      title={skill.name}
                      image={skill.src}
                      key={skill.name}
                      skillStyle={skill.skillStyle}
                      description={skill.description || 'Not found.'}
                      currentIndex={this.state.skillArray.indexOf(skill)}
                      test={console.log(skill.name)}
                      openDialog={this.openDialog}
                    />
                    
                  ))}
                           
                  
              </div> 
            </div>)
  }
}

export default App;
