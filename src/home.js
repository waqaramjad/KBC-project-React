import React, { Component } from 'react';
import NewQuestion from './NewQuestion'
import * as firebase from 'firebase';
class home extends Component
{

    constructor(props)
    {
        console.log('constructor')
        super(props);
        this.state = {
            formInput : {
                question :'',
                option1 : '',
                option2 : '',
                option3 : '',
                option4 : ''
            },

            poll : [],
            votes : {
                a:0,
                b:0,
                c:0,
                d:0
                // a:'',
                // b:'',
                // c:'',
                // d:''

            }

        }
       
 firebase.database().ref('/').child('question').on('child_added',(ev)=>
    {


        console.log(' firebase.database().ref('/')')
        
    let pollObject = ev.val();
    // console.log(pollObject.vote)
    this.setState({
        votes : pollObject.vote
    })
    pollObject.id = ev.key;
    let dummyState = this.state.poll
    dummyState.push(pollObject);
    this.setState({
        poll : dummyState
    })

    // console.log(this.state.poll)
    }
)

// firebase.database().ref('/').child('question').on('child_removed',(ev)=>
// {
// console.log('deleted')

// })
// firebase.database().ref('/').child('question/-L1D2xPrrxDTpM7WxkZw').on('value',(ev)=>
// {
// console.log('changed value')

// })

this.voteHandler = this.voteHandler.bind(this)

    }
        
    
    
update(){
    console.log('euvfuve')
    const rootRef = firebase.database().ref().child('question');
    // const speedref  =  rootRef.child('name');
    rootRef.on('child_added',(snap) => {
        // this.render(sn-p.val())
        // let newData = snap.val();
        // console.log(snap.val().option1);
        // console.log(snap.val());

        // let getData = this.state.formInput
        // getData['question'] = snap.val().question
        // getData['option1'] = snap.val().option1
        // getData['option2'] = snap.val().option2
        // getData['option3'] = snap.val().option3
        // getData['option4'] = snap.val().option4;
        // // console.log('sfsfsd',getData);

        // this.setState({
        // formInput : getData   
        // })

       this.update2(snap.val())
    });
   
    
}

update2(val){
    return(
<h1>{val.option1}</h1>

    )
    
}
createNew(){

this.props.history.push('/newquestion');
}




voteHandler(params ,ev ,voteObject,a){
// console.log(voteObject.ev);

let dummyVoteForFirebase = voteObject
// con
// dummyVoteForFirebase.ev = dummyVoteForFirebase.ev+1;
voteObject[ev] = voteObject[ev]+1;
console.log(voteObject)



//*********************************************** */

let dummyVoteState = this.state.votes


dummyVoteState[ev] = dummyVoteState[ev]+1;
// console.log(dummyVoteState)

this.setState({
    votes : dummyVoteState
})
// console.log(this.state.votes)
// console.log('id',params)
// console.log('ev',ev)
// console.log('aaaaaa',a)'
firebase.database().ref('/').child('question/'+params+'/vote').set(voteObject)
// firebase.database().ref('/').child('question/'+params+'/vote').update(this.state.votes)
// firebase.database().ref('question/'+params).update('79');

// const rootRef = firebase.database().ref('question/-L13CowLViEGwIvI3uWR/vote')
// const speedref  =  rootRef.child('name');

// rootRef.value('1')
// rootRef.on('child_added',(snap) => {
    
//     console.log('votes',snap)
// })

}
render(){

    return(
        <div>
<button onClick={this.createNew.bind(this)}>Create New Question</button>
        {this.state.poll.map((values, numbers) =>{
            // console.log('values', values)
            // console.log('values.id', values.id)
            // console.log('keys', numbers)
            // console.log('numbers.toString()', numbers)
        
            // console.log('values', numbers)
            return(
                <div>
        

        <div>
  

    {/* {<h3>weef {a}</h3>} */}
{/* <button onClick={}>Login</button> */}
        {/* <h1>home</h1> */}
         {/* <button onClick={this.test1}></button>  */}
<h3>Current Polls</h3>
<label><h6>Question : {values['question']}</h6> </label><br/>

    <label >a<input name='radioGroup'  type='radio' onClick={this.voteHandler.bind(this ,values.id,'a',values.vote)  } />{values['option1']}</label><br/>
    <label>b<input name='radioGroup'  type='radio' onClick={this.voteHandler.bind(this ,values.id,'b',values.vote)  } />{values['option2']}</label><br/>
    <label>c<input name='radioGroup'  type='radio' onClick={this.voteHandler.bind(this ,values.id,'c',values.vote)  } />{values['option3']}</label><br/>
    <label>d<input name='radioGroup'  type='radio' onClick={this.voteHandler.bind(this ,values.id,'d',values.vote)  } />{values['option4']}</label><br/>
    <button>Submit vote</button>
    votes :  a  {values.vote['a']}  b : {values.vote['b']}
    votes :  b  {values.vote['c']}  b : {values.vote['d']}


</div>
        {/* <h1 key={values.key}>{values.todosirug}</h1> */}
        {/* <h1 key={numbers}>{values.todos}<span><button value={values.id} onClick={this.deleteHandler} >Delete</button><button value={values.id} onClick={this.EditHandler} >Edit</button></span></h1> */}
        
                </div>
            )
        })}
        
        
        
        </div>
        
        
            )




//     return(
// <div>
  
//     {this.update}
//     {<h3>weef {a}</h3>}
// <button onClick={this.createNew.bind(this)}>Create New Question</button>
// {/* <button onClick={}>Login</button> */}
//         <h1>home</h1>
//          {/* <button onClick={this.test1}></button>  */}
// <h3>Current Polls</h3>
// <label><h6>Question : {this.state.formInput['question']}</h6> </label><br/>
//     <label>a<input name='radioGroup'  type='radio' />{this.state.formInput['option1']}</label><br/>
//     <label>b<input name='radioGroup'  type='radio' />{this.state.formInput['option2']}</label><br/>
//     <label>c<input name='radioGroup'  type='radio' />{this.state.formInput['option3']}</label><br/>
//     <label>d<input name='radioGroup'  type='radio' />{this.state.formInput['option4']}</label><br/>
// </div>


//     )
}



}

export default home 