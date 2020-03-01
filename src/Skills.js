import React from 'react';
import './App.css';
import Dialog from 'react-dialog';


export class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDialogOpen: false
            
        };
        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
    }

    openDialog() {
        this.setState({isDialogOpen: true});
        console.log('clicked');
    }

    closeDialog() {
        this.setState({isDialogOpen: false});
    }

    render() {

        return (<div>
            <div className="skillItem" >
                    <h1 className="skillLabel">{this.props.title}</h1>
                    <img className="skillImage" src={this.props.image} alt={this.props.title} onClick={this.openDialog} />
                    
                </div>
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
