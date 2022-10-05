import React from 'react';

const exports = {};

//The parent of the view
exports.Wrapper = class extends React.Component {
    render() {
        const {content} = this.props;
        return (
            <div className='App'>
                <h1>Fortune Teller Game</h1>
                <p><strong>By Khew Jia Peng, Team 06</strong></p>
                {content}
            </div>
        );
    }
}

//Connect Children View
exports.ConnectAccount = class extends React.Component {
    render() {
        return(
            <div>
                We are connecting to your account now, Please wait...
            </div>
        );
    }
}

//Select Deployer or Attacher Children View
exports.DeployerOrAttacher = class extends React.Component {
    render() {
        const {parent} = this.props
        return (
            <div>
                <div class='contentDorA'>
                    <p>Your balance is {parent.state.bal}</p>
                    {/* Select deployer */}
                    <button onClick={() => parent.selectDeployer()}>Deployer</button>
                    <p>Set the wager, deploy the contract</p>
                    {/* Select attacher */}
                    <button onClick={() => parent.selectAttacher()}>Attacher</button>
                    <p>Attach to the deployer's contract.</p>
                </div>
            </div>
        );
    }
} //Khew1125

export default exports;