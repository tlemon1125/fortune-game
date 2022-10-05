import React from 'react';
import { createRoot, render } from 'react-dom/client';
import ReactDOM from 'react-dom';

//choose and render the child view
export function renderView(parent, Views) {
    parent.state = parent.state || {}; //Declare the parent state if doesn't have parent state
    const {view, ContentView} = parent.state; //get view from the parent state
    const View = view === 'Wrapper' 
                    ? ContentView 
                    : Views[view]; //get the child component from the parent component
    const Wrapper = Views['Wrapper']; //get the wrapper component from the parent component
    const props = {...parent.props, ...parent.state, parent}; //put all the parent's state, props and parent component
    const content = <View {...props} />; //pass the state and props into the child component
    return <Wrapper {...{content}} />; //pass the child component into wrapper component
}

export function renderDOM(app) {
    // const root = createRoot(document.getElementById('root'));
    // root.render(
    //     <React.StrictMode>
    //         {app}
    //     </React.StrictMode>
    // ); //React 18 Option, but not suitable for this project

    ReactDOM.render(
        <React.StrictMode>{app}</React.StrictMode>,
        document.getElementById('root')
    ); //React 17 Option
}