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

        return (<div className="skillItem">
                    <h1 className="skillLabel">{this.props.title}</h1>
                    <img className="skillImage" src={this.props.image} alt={this.props.title} onClick={this.openDialog} />
                     <div className='skillTextBox'>
                        {
                            this.state.isDialogOpen && 
                            <Dialog className='skillTextBox' title="Dialog Title" modal={true} onClose={this.closeDialog}
                                buttons={
                                [{
                                    text: "Close",
                                    onClick: () => this.closeDialog()
                                }]
                            }>
                                <h1 className='skillDescription'>Dialog Content</h1>
                                <p className='skillDescription'>More Content. Anything goes here</p>
                            </Dialog>
                            
                        }
                        
                    </div>
                </div>);
    }
}
