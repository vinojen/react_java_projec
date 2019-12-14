import React, { Component } from 'react';

class Ex1 extends Component {
    state = { 
        state : {  
            companyName: '',
            name:''  
        },
        task:[]
     }
     changeText=(e)=> {  
        this.setState({  
            companyName: e.target.value  
        });  
    }   
  
    render() { 
        return (  
            <div>  
                <h2>Simple Event Example</h2>  
                <label htmlFor="name">Enter company name: </label>  
                <input type="text" id="companyName" onChange={this.changeText.bind(this)}/>  
                <h4>You entered: { this.state.companyName }</h4>  
            </div>  
         );
    }
}
 
export default Ex1;