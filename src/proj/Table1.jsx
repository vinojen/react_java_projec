import React from "react";
const Table1 = ({ tasks }) => {
  return (
    <table className="table table-dark">
      <tr>
        <th>id</th>
        <th>name</th>
        <th>status</th>
      </tr>
      {tasks.map(t => {
        return (
          <tr>
            <td>{t.id}</td>
            <td>{t.name}</td>
            <td>{t.status}</td>
            <td>
              <button
                className="btn btn-danger m-1"
                onClick={() => this.handleDel(t.id)}
              >
                delete
              </button>
              <button
                className="btn btn-dark"
                onClick={() => this.handleup(t.id)}
              >
                upates
              </button>
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default Table1;
