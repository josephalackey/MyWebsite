import React from 'react';
import ReactDOM from 'react-dom';

var menuStyle = {
    margin: 'auto',
    width: '50%',
    textAlign: 'center'
}

export class MenuButtons extends React.Component {
    render() {
        return (
            <div style={menuStyle}>
                <button className="menuButtons" name="index" onClick={e => this.props.onClick(e.target.name)}>Home</button>
                <button className="menuButtons" name="experience" onClick={e => this.props.onClick(e.target.name)}>Experience</button>
                <button className="menuButtons" name="blog" onClick={e => this.props.onClick(e.target.name)}>Blog</button>
                <button className="menuButtons" name="about me" onClick={e => this.props.onClick(e.target.name)}>About me</button>
            </div>
        )
    }
}

ReactDOM.render(<MenuButtons />, document.getElementById("root"));