import React from 'react';

const exports = {};

//Player views must be extended. Export to DeployerView and AttacherView
//It does not have its own Wrapper view.

exports.GetFortune = class extends React.Component {
    render() {
        const {parent, playable, fortune, isAlice} = this.props;
        return (
            <div className='contentDorA'>
                <p>
                    {fortune ? "It's wrong, try again! " : ""}
                    {!playable ? 'Please wait... ' : ''}
                    {isAlice ? 'Choose your fortune' : 'Guess her fortune'}
                </p>
                <div className='buttonFortune'>
                    <button disabled={!playable} onClick={() => parent.playFortune('Dog')}>Dog</button>
                    <button disabled={!playable} onClick={() => parent.playFortune('Cat')}>Cat</button>
                    <button disabled={!playable} onClick={() => parent.playFortune('Chicken')}>Chicken</button>
                </div>
            </div>
        );
    }
}

exports.WaitingForResult = class extends React.Component {
    render() {
        return(
            <div className='contentDorA'>
                <p>Waiting for results...</p>
            </div>
        );
    }
}

exports.SeeOutcome = class extends React.Component {
    render() {
        const {wager} = this.props;
        return (
            <div className='contentDorA'>
                <p>
                    Bob wins the challenge and receive the payment: <strong>{wager}</strong>
                    <br/>
                    Thanks for playing!
                </p>
            </div>
        );
    }
}

exports.InformTimeout = class extends React.Component {
    render() {
        return (
            <div className='contentDorA'>
                <p>
                    There's been a timeout. (Someone took time too long.)
                </p>
            </div>
        );
    }
}

export default exports;

