import React from 'react';
import PlayerViews from './PlayerViews';

//Import and extract the view as object
const exports = {...PlayerViews};

exports.Wrapper = class extends React.Component {
    render() {
        const {content} = this.props;
        return (
            <div className='Attacher'>
                <h2>Attacher (Bob)</h2>
                {content}
            </div>
        );
    }
}

//Attach Views
exports.Attach = class extends React.Component {
    render() {
        const {parent} = this.props;
        const {ctcInfoStr} = this.state || {};
        return (
            <div className='contentDorA'>
                <p>Please paste the contract info to attach to: </p>
                <textarea 
                    spellCheck="false" className='ContractInfo'
                    onChange={(e) => this.setState({ctcInfoStr: e.currentTarget.value})}
                    placeholder='{}'   
                />
                <br/>
                <button disabled={!ctcInfoStr} onClick={() => parent.attach(ctcInfoStr)}>
                    Attach
                </button>
            </div>
        );
    }   
}

exports.Attaching = class extends React.Component {
    render() {
        return (
            <div className='contentDorA'>
                <p>Attaching, please wait...</p>
            </div>
        )
    }
}

exports.AcceptChallenge = class extends React.Component {
    render() {
        const {parent, wager} = this.props;
        return (
            <div className='contentDorA'>
                <p>
                    The terms of the game are: <br/>
                    Wager: {wager}
                </p>
                <br/>
                <button onClick={() => parent.challengeAccepted()}>Accept terms and pay wager</button>
            </div>
        )
    }
}

exports.WaitingForTurn = class extends React.Component {
    render() {
        return (
            <div className='contentDorA'>
                <p>
                    Waiting for host to choose her fortune... <br/>
                    Think about which fortune you want to guess!
                </p>
            </div>
        )
    }
}

export default exports;

