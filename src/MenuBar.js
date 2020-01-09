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

ReactDOM.render(<MenuButtons />, document.getElementById("root"));