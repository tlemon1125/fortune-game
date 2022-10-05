//React Things
import React from 'react';
import './index.css';
import AppViews from './views/AppViews';
import DeployerViews from './views/DeloyerViews';
import AttacherViews from './views/AttacherViews';
import { renderDOM, renderView } from './views/render';

//Reach things
import { loadStdlib, ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

//put standard library as reach
const reach = loadStdlib(process.env);
//set WalletFallback when open the website to get account
reach.setWalletFallback(reach.walletFallback({
    providerEnv: 'TestNet',
    MyAlgoConnect
}));

const fortuneToInt = {'Dog': 0, 'Cat': 1, 'Chicken': 2};

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            view: 'ConnectAccount', //Initial view when open the web browser
        };
    }

    async componentDidMount() {
        const acc =  await reach.getDefaultAccount(); //get the account from web browswer
        const balAtomic = await reach.balanceOf(acc); //get balance of the account
        const bal = reach.formatCurrency(balAtomic, 4); //format balance

        this.setState({
            view: 'DeployerOrAttacher', //view select deployer or attacher
            acc, bal //set account and balance
        });
    }

    //Proceed to the deployer view by triggering Deployer Class
    selectDeployer () {
        this.setState({
            view: 'Wrapper',
            ContentView: Deployer
        });
    }

    selectAttacher () {
        this.setState({
            view: 'Wrapper',
            ContentView: Attacher
        })
    }

    render(){
        return renderView(this, AppViews);
    }
}

//Define the common interaction for Alice and Bob
class Player extends React.Component {
    //Alice and Bob's interaction
    random() {return reach.hasRandom.random();}

    async getFortune() {
        const fortune = await new Promise(resolveFortuneP => {
            this.setState({
                view: 'GetFortune' /*Choose Fortune View*/ , playable: true, resolveFortuneP
            });
        });

        this.setState({
            view:'WaitingForResult', fortune //Waiting For Result View
        });

        return fortuneToInt[fortune];
    }

    seeOutcome() {
        this.setState({
            view: 'SeeOutcome', //Outcome View
        });
    }

    informTimeout() {
        this.setState({
            view: 'InformTimeout' //Inform Timeout View
        });
    }

    playFortune(fortune) {
        this.state.resolveFortuneP(fortune);
    }
}

class Deployer extends Player {
    constructor(props) {
        super(props);
        this.state = {
            view: 'SetWager', isAlice: true //Initial View of Deployer
        };
    }

    //Proceed to deploy view
    setWager(wager) {
        this.setState({
            view: 'Deploy', wager
        });
    }

    //Deploy the contract here
    async deploy() {
        const ctc = this.props.acc.contract(backend); //acc.contract(backend);
        this.setState({
            view: 'Deploying', ctc //Proceed to deploying view
        });
        this.wager = reach.parseCurrency(this.state.wager); //Set interact.wager to Alice
        this.deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector]; //Set interact.deadline to Alice
        backend.Alice(ctc, this); //ctc.p.Alice(interact)
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2); //After deploy get info and stringify the JSON info
        this.setState({
            view: 'WaitingForAttacher', ctcInfoStr //Proceed to Waiting Attacher View
        });
    }

    render() {
        return renderView(this, DeployerViews);
    }
}

class Attacher extends Player {
    constructor(props) {
        super(props);
        this.state = {
            view: 'Attach', isAlice: false //Attach View
        }
    }

    //Attach and deploy the contract for Bob
    attach(ctcInfoStr) {
        const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
        this.setState({
            view: 'Attaching'
        });
        backend.Bob(ctc, this);
    }

    async acceptChallenge(wagerAtomic) {
        const wager = reach.formatCurrency(wagerAtomic, 4);
        return await new Promise(resolveAnswerP => {
            this.setState({
                view: 'AcceptChallenge', wager, resolveAnswerP
            });
        });
    }

    challengeAccepted() {
        this.state.resolveAnswerP();
        this.setState({
            view: 'WaitingForTurn'
        });
    }

    render() {
        return renderView(this, AttacherViews);
    }
}

renderDOM(<App/>);