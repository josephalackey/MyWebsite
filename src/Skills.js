import React from 'react';
import './App.css';




export class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.checkSide = this.checkSide.bind(this);

        // Sets state based on current order of Skills
        if ((this.props.currentIndex + 1 ) % 2) {
            this.state = {
                isDialogOpen: false,
                title: "",
                skillStyle: "",
                image: "",
                iconAlign: {marginRight: "0"},
                titleAlign: {textAlign: "left"},
                skillSide: "left"
            };
        } else {
            this.state = {
                isDialogOpen: false,
                title: "",
                skillStyle: "",
                image: "",
                iconAlign: {marginLeft: "0"},
                titleAlign: {textAlign: "right"},
                skillSide: "right"
            };
        }

    }
    checkSide(side) {
        //Checks checks which side the skill is on from skillSide, then creates
        //the icon and header order accordingly
        if (side === "left") {
            return (<div className="skill" style={this.props.skillStyle}  onClick={e => {this.props.openDialog(this.props.title)}}>
                    <div className="skillHeader" style={this.state.titleAlign} >{this.props.title}</div>
                    <img className="skillIcon" width="80px" height="80px" src={require(`./images/${this.props.image}`)} alt={this.props.title} style={this.state.iconAlign} />
                </div>)
        } else {
            return (<div className="skill" style={this.props.skillStyle}  onClick={e => this.props.openDialog(this.props.title)}>
                    <img className="skillIcon" width="80px" height="80px" src={require(`./images/${this.props.image}`)} alt={this.props.title} style={this.state.iconAlign} />
                    <div className="skillHeader" style={this.state.titleAlign} >{this.props.title}</div>
                </div>)
        }
    }
    

    render() {

        return (<div className="skillContainer" style={this.props.skillStyle}>
                {this.checkSide(this.state.skillSide)}
                
                
            </div>);
    }
}
