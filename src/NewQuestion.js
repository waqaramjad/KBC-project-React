import React, { Component } from 'react';

class NewQuestion extends Component
{

submitQuestion(){
console.log('hy')
}

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
        }
    }
    this.question = this.question.bind(this)
    // this.option1 =this.option4.bind(this)
    // this.option2 =this.option3.bind(this)
    // this.option3 =this.option2.bind(this)
    // this.option4 =this.option1.bind(this)

}
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
    <form >
    <label>Enter Question<input type='text' onChange={this.question} name='question'/></label><br/>
    <label>a<input name='radioGroup'  type='radio' /><input type='text'  name='option1'  onChange={this.question}/></label><br/>
    <label>b<input name='radioGroup' type='radio' /><input type='text'onChange={this.question} name='option2' /></label><br/>
    <label>c<input  name='radioGroup'type='radio' /><input type='text'onChange={this.question} name='option3' /></label><br/>
    <label>d<input  name='radioGroup'type='radio' /><input type='text'onChange={this.question} name='option4' /></label><br/>
    <button onClick={this.submitQuestion}>Submit</button>

    </form>
    
</div>


    )
}



}

export default NewQuestion 