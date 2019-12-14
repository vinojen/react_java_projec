import React, { Component } from "react";
import Axios from "axios";

class Project extends Component {
  state = {
    name: "",
    des: ""
  };

  handleChange1 = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };


  handleAdd =()=>{
      Axios.post("http://localhost:8089/project",this.state).then(
          res=> console.log(res)
      )
      this.setState({ name: "" });
      this.setState({ des: "" });
  }

  render() {
    return (
      <div>
        name:{this.state.name} <br />
        descr:{this.state.des} <br />
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange1}
        />
        <input
          type="text"
          name="des"
          value={this.state.des}
          onChange={this.handleChange1}
        />

        <input type="button" value="Add" onClick={this.handleAdd}/>
      </div>
    );
  }
}

export default Project;
