import React, { Component } from 'react';
import NewQuestion from './NewQuestion'
class home extends Component
{


createNew(){
{/* <NewQuestion/> */}
this.props.history.push('/newquestion');
}


render(){

    return(
<div>
<button onClick={this.createNew.bind(this)}>Create New Question</button>
{/* <button onClick={}>Login</button> */}
        <h1>home</h1>

</div>


    )
}



}

export default home 