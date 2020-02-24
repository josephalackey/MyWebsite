import React from 'react';
import './App.css';

const menuStyle = {
    margin: '0 auto',
    height: '0px',
    width: '50%',
    textAlign: 'center',
    backgroundColor: 'transparent'
}
const buttonStyle = {
    backgroundColor: 'transparent',
    outline: 'none',
    border: 'none',
    color: 'white',
    fontSize: '120%',
    paddingTop: '3vh',
    transition: 'color 0.1s'
}
const headerStyle = {
    padding: "0",
    marginLeft: "5vh",
    marginTop: "20%",
    fontSize: "200%"
    }

const nameText = ['J','o','s','e','p','h',' ','L','a','c','k','e','y',<br key="carriage0"/>,'P','r','o','j','e','c','t',' ','M','a','n','a','g','e','r'];
let newText = [];
let testHeader = '';
let testNumber = 3000;

export class NameHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.TypeHeader = this.TypeHeader.bind(this);
    }

    TypeHeader = (character) => {
        //Adds new character to state
        newText.push(character);
        this.setState({ text: newText});
    }

    setDelay(i) {
        //Delay the Header character rendering
        setTimeout(() => this.TypeHeader(nameText[i]), i * 80);
    }

    render() {
        
        return <h1 className="portraitHeader" name="Primary" key="name-header" >{this.state.text}</h1>

    }
    
    componentDidMount() {
        //Loop for Header delay
        for (let i = 0; i < nameText.length; i++) {
            this.setDelay(i);
            console.log(`loop interval ${i}`);

        }
        
    }
}

export class MenuButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: buttonStyle
        };
    }

    render() {
        return (
            <div style={menuStyle}>
                <button className="menuButtons" style={buttonStyle} name="index" onClick={e => this.props.onClick(e.target.name)} onMouseEnter={e => {this.props.onMouseEnter(e.target.style)}} onMouseLeave={e => {this.props.onMouseLeave(e.target.style)}} >Home</button>
                <button className="menuButtons" style={buttonStyle} name="Skills" onClick={e => this.props.onClick(e.target.name)} onMouseEnter={e => {this.props.onMouseEnter(e.target.style)}} onMouseLeave={e => {this.props.onMouseLeave(e.target.style)}}>Skills</button>
                <button className="menuButtons" style={buttonStyle} name="Blog" onClick={e => this.props.onClick(e.target.name)} onMouseEnter={e => {this.props.onMouseEnter(e.target.style)}} onMouseLeave={e => {this.props.onMouseLeave(e.target.style)}}>Blog</button>
                <button className="menuButtons" style={buttonStyle} name="About me" onClick={e => this.props.onClick(e.target.name)} onMouseEnter={e => {this.props.onMouseEnter(e.target.style)}} onMouseLeave={e => {this.props.onMouseLeave(e.target.style)}}>About me</button>
            </div>
        )
    }
}

