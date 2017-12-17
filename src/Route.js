import React from 'react'
import App from './App';
import home from './home'
// import About from './about';
// import Docs from './Docs';
import Navbar from './Navbar'
import createBrowserHistory from 'history/createBrowserHistory'


import {
    
     Router,
    Route,
    Link
} from 'react-router-dom'

const customhistory = createBrowserHistory()
const Func = () =>(
// console.log(customhistory)

<Router history={customhistory}>
    <div>
    <Navbar/>
        
        
        <hr/>
        <Route exact path='/' component={home}/>
        {<Route  path='/home' component={home}/>}
        {/* {<Route exact path='/Docs/:rollno' component={Docs}/>} */}
        {/* <Route exact path='/Docs' component={Docs}/> */}
        
    </div>
</Router>

)

export default Func;