import React from "react";
const Table = ({ tasks }) => {
  return (
    <table className="table table-dark">
      <tr>
        <th>ID</th>
        <th>ID</th>
        <th>ID</th>
      </tr>
      {tasks.map(t => {
        return (
          <tr>
            <td>{t.id}</td>
            <td>{t.name}</td>
            <td>{t.role}</td>

            <td>
              <button
                className="btn btn-info"
                onClick={() => this.handleDel(t.id)}
              >
                del
              </button>
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default Table;
