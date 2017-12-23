import React, { Component } from 'react';
import * as firebase from 'firebase';
// import firebase1 from './firebase.js';
// import * as firebase from 'firebase';
var  fb = firebase.initializeApp({
    apiKey: "AIzaSyBBucSYR_-jHd_GY1WVnrtmTw4FtI5KM90",
    authDomain: "projects-d01b3.firebaseapp.com",
    databaseURL: "https://projects-d01b3.firebaseio.com",
    projectId: "projects-d01b3",
    storageBucket: "projects-d01b3.appspot.com",
    messagingSenderId: "894816354920"


});

class NewQuestion extends Component
{


   


constructor(props)
{
    super(props);
    this.state = {
        formInput : {
            question :'',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : ''
        },
        name :25
    }
    this.question = this.question.bind(this)
    this.submitQuestion = this.submitQuestion.bind(this)
    // this.option1 =this.option4.bind(this)
    // this.option2 =this.option3.bind(this)
    // this.option3 =this.option2.bind(this)
    // this.option4 =this.option1.bind(this)
    
}


submitQuestion(){
    var  rootRef = fb.database().ref();
    console.log(rootRef)
    console.log(this.state.formInput)
    rootRef.child('question').push(this.state.formInput)
}
// componentDidMount(){
    // const rootRef = fb.database().ref().child('react');
    // const speedref  =  rootRef.child('name');
    // speedref.on('value',(snap) => {
    //     let newData = snap.val();
    //     // console.log(snap.val())
    //     this.setState({
    //     name : snap.val()   
    //     })
    // });
// }
question(ev){

    let formInput1 = this.state.formInput;
    let input = ev.target.value
    let name = ev.target.name
    formInput1[name] =input 
    this.setState({
        formInput : formInput1
    })
    console.log(this.state.formInput)

}


render(){

    return(
<div>
    {/* <form > */}
    <label>Enter Question<input type='text' onChange={this.question} name='question'/></label><br/>
    <label>a<input name='radioGroup'  type='radio' /><input type='text'  value={this.state.formInput['option1']} name='option1'  onChange={this.question}/></label><br/>
    <label>b<input name='radioGroup' type='radio' /><input type='text'onChange={this.question} name='option2' /></label><br/>
    <label>c<input  name='radioGroup'type='radio' /><input type='text'onChange={this.question} name='option3' /></label><br/>
    <label>d<input  name='radioGroup'type='radio' /><input type='text'onChange={this.question} name='option4' /></label><br/>
     <button onClick={this.submitQuestion}>Submit</button> */
 {/* <h1>{this.state.name}</h1> */}
    {/* </form> */}
    
</div>


    )
}



}

export default NewQuestion 