import React, { Component } from 'react';

class Ex extends Component {
    state = {  
            msg: "Welcome to JavaTpoint"  
        };      
    updateSetState = this.updateSetState.bind(this);  
      
     updateSetState() {  
         this.setState({  
            msg:"Its a best ReactJS tutorial"  
         });  
     }  
     render() {  
        return (  
           <div>  
               <h1>{this.state.msg}</h1>  
               <button onClick = {this.updateSetState}>SET STATE</button>  
           </div>  
        );  
     }  
  }  
 
export default Ex;