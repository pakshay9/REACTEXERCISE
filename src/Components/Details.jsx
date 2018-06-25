import React from "react";
import ReactDom from "react-dom";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Counter: "1"
    };
  }
  render() {
    return (
      <div>
        <h2>Defect Details</h2>
        <span className="text-danger">
          searched result:{this.state.Counter}
        </span>
        <table width="100%" border="%">
          <tr>
            <th>Defect category</th>
            <th>Description</th>
            <th>Priority</th>
            <th>status </th>
            <th>Change status</th>
          </tr>
          <tr>
            <td>{this.props.category}</td>
            <td>{this.props.description}</td>
            <td>{this.props.priority}</td>
            <td>{this.props.status} </td>
            <td>
              <button>close defect</button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Details;
