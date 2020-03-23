import React from 'react';
import './App.css';
import Dialog from 'react-dialog';



export class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
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
            return (<div className="skill"style={this.props.skillStyle}>
                    <div className="skillHeader" style={this.state.titleAlign} >{this.props.title}</div>
                    <img className="skillIcon" width="80px" height="80px" src={require(`./images/${this.props.image}`)} alt={this.props.title} onClick={this.openDialog} style={this.state.iconAlign} />
                </div>)
        } else {
            return (<div className="skill"style={this.props.skillStyle}>
                    <img className="skillIcon" width="80px" height="80px" src={require(`./images/${this.props.image}`)} alt={this.props.title}  onClick={this.openDialog} style={this.state.iconAlign} />
                    <div className="skillHeader" style={this.state.titleAlign} >{this.props.title}</div>
                </div>)
        }
    }
    openDialog() {
        this.setState({isDialogOpen: true});
    }

    closeDialog() {
        this.setState({isDialogOpen: false});
    }

    render() {

        return (<div className="skillContainer" style={this.props.skillStyle}>
                {this.checkSide(this.state.skillSide)}
                
                <div className='skillDialogContainer'>
                {
                    this.state.isDialogOpen && 
                    <Dialog width="50vw" title="" modal={true} onClose={this.closeDialog}
                        buttons={
                        [{
                            text: "Close",
                            className: "skillDialogButton",
                            onClick: () => this.closeDialog()
                            
                        }]
                    }>
                        <h1 className='skillDialogTitle'>{this.props.title}</h1>
                        <p className='skillDescription'>More Content. Anything goes here
                        this is a lot of content. A matter of fact, this is so much content
                        that you will love having all the content that I have. You love contentas 
                        as much as I love giving content, wouldn't you say?</p>
                    </Dialog>
                    
                }
                
                </div>
            </div>);
    }
}
