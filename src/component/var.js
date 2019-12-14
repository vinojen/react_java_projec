import React, { Component } from 'react';
// import { tsConstructorType } from '@babel/types';


class Var extends Component {
    // state = {  }
    render() { 
const list=['pet','hi','ji'];
const mylists=list.map((list,a)=>{
    return<li key={a}>{list}</li>;
})
        return ( 
            <div>
    <ul>{mylists}</ul>
                
            </div>
         );
    }
}
 
export default Var;

