import React, { Component } from "react";
import Axios from "axios";

class Defect extends Component {
  state = {
    task: { name: "", status: "" },
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
  render() {
    return (
      <div>
        Name:
        <input
          type="text"
          name="name"
          value={this.state.task.name}
          onChange={this.handleChange}
        />
        Status:
        <input
          type="text"
          name="status"
          value={this.state.task.status}
          onChange={this.handleChange}
        />
        <div>
          <button className="btn btn-primary m-2" onClick={this.handleAd}>
            Add
          </button>
          <button className="btn btn-info" onClick={this.handleDel}>
            Delet
          </button>
        </div>
        <table className="table table-dark">
          <tr>
            <th>id</th>
            <th>name</th>
            <th>status</th>
          </tr>
          {this.state.tasks.map(t => {
            return (
              <tr>
                <td>{t.id}</td>
                <td>{t.name}</td>
                <td>{t.status}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDel(t.id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default Defect;
