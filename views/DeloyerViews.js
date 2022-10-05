import React from 'react';
import PlayerViews from './PlayerViews';

//Import and extract the view as object
const exports = {...PlayerViews};

//Set timing for the copy button change from copied to original word
const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
    render() {
        const {content} = this.props;
        return (
            <div className='Deployer'>
                <h2>Deployer (Alice)</h2>
                {content}
            </div>
        );
    }
}

exports.SetWager = class extends React.Component {
    render() {
        const wager = (this.state || {}).wager || 1; //Get the wager from state, if state undefined, get default wager : 1 
        const {parent, bal} = this.props;
        return (
            <div className='wager'>
                {/* Set Wager */}
                <input type="number" onChange={(e) => this.setState({wager: e.currentTarget.value})} /* set state wager and change time to time if the input box changed */ 
                    min="0" max={bal} placeholder="1"
                />
                <button onClick={() => parent.setWager(wager) /* pass the value to parent and set state at parent class */}>Set Wager</button>
            </div>
        );
    }
}

//Button to confirm deploy
exports.Deploy = class extends React.Component {
    render() {
        const {wager, parent} = this.props
        return (
            <div className="contentDorA">
                <p>Wager to deploy: <strong>{wager}</strong></p>
                <button onClick={() => parent.deploy()}>Deploy</button>
            </div>
        );
    }
}

//Deploying View while waiting for the contract deploy
exports.Deploying = class extends React.Component {
    render() {
        return (
            <div className="contentDorA">
                <p>Deploying ...</p>
            </div>
        )
    }
}

//Display contract info to the user to attach the contract info
exports.WaitingForAttacher = class extends React.Component {
    async copyToClipBoard(button){
        const {ctcInfoStr} = this.props;
        navigator.clipboard.writeText(ctcInfoStr); //Let user copy to their clipboard
        const origInnerHTML = button.innerHTML; //store original button word to temporarily var
        button.innerHTML = 'Copied!'; //Change button word
        button.disabled = true; //Disable button
        await sleep(2000); //Wait for 2 second
        button.innerHTML = origInnerHTML; //Change back to ori word
        button.disabled = false; //Enable button
    }

    render() {
        const {ctcInfoStr} = this.props
        return (
            <div className='contentDorA'>
                <p>
                    Waiting for Attacher to join ... <br/>
                    Please give them this contract info:
                </p>
                <pre className='ContractInfo'>
                    {ctcInfoStr}
                </pre>
                <button onClick={(e) => this.copyToClipBoard(e.currentTarget) /*Call the button*/}>Copy to Clipboard</button>
            </div>
        );
    }
}

export default exports;