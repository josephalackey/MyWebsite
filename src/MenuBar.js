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
    paddingTop: '3vh'
}

export class MenuButtons extends React.Component {
    render() {
        return (
            <div style={menuStyle}>
                <button className="menuButtons" style={buttonStyle} name="index" onClick={e => this.props.onClick(e.target.name)} onMouseOver={e => {this.props.onMouseOver({buttonStyle})}}>Home</button>
                <button className="menuButtons" style={buttonStyle} name="experience" onClick={e => this.props.onClick(e.target.name)}>Experience</button>
                <button className="menuButtons" style={buttonStyle} name="blog" onClick={e => this.props.onClick(e.target.name)}>Blog</button>
                <button className="menuButtons" style={buttonStyle} name="about me" onClick={e => this.props.onClick(e.target.name)}>About me</button>
            </div>
        )
    }
}

ReactDOM.render(<MenuButtons />, document.getElementById("root"));