import React, { Component } from "react";
import Axios from "axios";
import Table1 from "./Table1";

class Defect extends Component {
  state = {
    task: {
       name: "",
        status: "" },
    tasks: []
  };

  componentDidMount() {
    Axios.get("http://localhost:8089/defect").then(res =>
      this.setState({ tasks: res.data })
    );
  }

  handleChange = e => {
    const task = { ...this.state.task };
    task[e.target.name] = e.target.value;
    this.setState({ task });
    console.log(this.state);
  };
  handleAd = () => {
    Axios.post("http://localhost:8089/defect", this.state.task).then(res => {
      console.log(res);
      this.componentDidMount();
    });
  };
  handleDel = id => {
    Axios.delete("http://localhost:8089/defect/" + id).then(res => {
      console.log(res);
      this.componentDidMount();
    });

  };
  handleup=id=>{
    Axios.put("http://localhost:8089/defect/" + id).then(res => {
        console.log(res);
        this.componentDidMount();
      });
  }
  render() {
    return (
      <div>
        <form>
          <div class="form-group">
            <label>Name</label>
            <input
              type="type"
              class="form-control"
              name="name"
              value={this.state.task.name}
              onChange={this.handleChange}
            />
          </div>
          <div class="form-group">
            <label>status</label>
            <input
              type="type"
              class="form-control"
              name="status"
              value={this.state.task.status}
              onChange={this.handleChange}
            />
          </div>
        </form>
        <div>
          <button className="btn btn-primary m-2" onClick={this.handleAd}>
            Add
          </button>
          <button className="btn btn-info" onClick={this.handleDel}>
            Delet
          </button>
        </div>
        <Table1 tasks={this.state.tasks}/>
      
      </div>
    );
  }
}

export default Defect;
