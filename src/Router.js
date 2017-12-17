// import React from 'react'
import React, { Component } from 'react';
import home from './home'

import App from './App';
import NewQuestion from './NewQuestion'
// import createBrowserHistory from 'history/createBrowserHistory'


import {
    
    Router,
    Route,
    Link
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'



const historyClick = createBrowserHistory(); 
class Route1 extends Component
{

    render(){
        return(

<Router history = {historyClick}>
    <div>
        <Route exact path='/' component={home}/>
        <Route exact path='/newquestion' component={NewQuestion}/>
        {/* <h1>route</h1> */}
    </div>
</Router>

        )
    }
}


export default Route1;