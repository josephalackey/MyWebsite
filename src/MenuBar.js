import React from 'react';
import ReactDOM from 'react-dom';

var menuStyle = {
    margin: 'auto',
    width: '50%',
    textAlign: 'center',
    backgroundColor: 'transparent'
}
var buttonStyle = {
    backgroundColor: 'transparent',
    outline: 'none',
    border: 'none',
    color: 'white',
    fontSize: '120%',
    paddingTop: '3vh',
    transition: 'color 0.1s'
}

const nameText = ['J','o','s','e','p','h',' ','L','a','c','k','e','y'];
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
        this.testState = this.testState.bind(this);
    }

    TypeHeader = (character) => {
        newText.push(character);
        this.testState();
        testNumber += 1000;
        // setTimeout(newText.push(character), 3000);
        //testHeader = newText.join('').toString();
        //let stringText = newText.toString();
        //this.setState({ text: newText.join('')});
        //this.setState({ text: newText.join('')});
        console.log(newText);
        //setTimeout((testHeader = tempText), 3000);
        // return (
        //     <h1>{testHeader}</h1>
        // )
        //return newText.push(<h1>{currentValue}</h1>);
      }
    // handleChange() {
    //     const text = e.target.value;
    //     this.props.onChange(text);
    // }
    testState() {
        this.setState({ text: newText});
        testNumber++;
        
    }
    setDelay(i) {
        setTimeout(() => this.TypeHeader(nameText[i]), i * 100);
    }
    render() {
        
        return <h1 id="name-header" >{this.state.text}</h1>

    }
    
    componentDidMount() {
        for (let i = 0; i < nameText.length; i++) {
            this.setDelay(i);
            console.log(`loop interval ${i}`);

        }
        //nameText.forEach(this.TypeHeader, 3000);
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
                <button className="menuButtons" style={buttonStyle} name="experience" onClick={e => this.props.onClick(e.target.name)} onMouseEnter={e => {this.props.onMouseEnter(e.target.style)}} onMouseLeave={e => {this.props.onMouseLeave(e.target.style)}}>Experience</button>
                <button className="menuButtons" style={buttonStyle} name="blog" onClick={e => this.props.onClick(e.target.name)} onMouseEnter={e => {this.props.onMouseEnter(e.target.style)}} onMouseLeave={e => {this.props.onMouseLeave(e.target.style)}}>Blog</button>
                <button className="menuButtons" style={buttonStyle} name="about me" onClick={e => this.props.onClick(e.target.name)} onMouseEnter={e => {this.props.onMouseEnter(e.target.style)}} onMouseLeave={e => {this.props.onMouseLeave(e.target.style)}}>About me</button>
            </div>
        )
    }
}

