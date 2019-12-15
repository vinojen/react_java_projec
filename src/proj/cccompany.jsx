import React, { Component } from "react";
import Table from "./table";
import Axios from "axios";
class Company extends Component {
  state = {
    data: {
      name: "",
      role: ""
    },
    tasks: []
  };

  componentDidMount() {
    Axios.get("http://localhost:8089/test").then(res =>
      this.setState({ tasks: res.data })
    );
  }
 

  HandleChange = e => {
    const a = { ...this.state.data };
    a[e.target.name] = e.target.value;
    this.setState({ task: a });
    console.log(this.state);
  };
  handleAdd = () => {
    Axios.post("http://localhost:8089/company", this.state).then(res => {
      console.log(res);
      this.componentDidMount();
    });
  };
  handleDel = id => {
    Axios.delete("http://localhost:8089/company/" + id).then(res => {
      console.log(res);
      this.componentDidMount();
    });

  };

  render() {
    return (
      <div className="form-group">
        name:
        <input
          type="text"
          class="form-control "
          class="form-control "
          style={{ width: "14%" }}
          name="name"
          value={this.state.name}
          onChange={this.HandleChange}
        />
        Role:
        <input
          type="text"
          class="form-control "
          name="role"
          style={{ width: "14%" }}
          value={this.state.role}
          onChange={this.HandleChange}
        />
        <button className="btn btn-primary m-2" onClick={this.handleAdd}>
          Add
        </button>
        <Table tasks={this.state.tasks} />
      </div>
    );
  
}
}
export default Company;
