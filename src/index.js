import React from "react";
import ReactDOM from "react-dom";
import span from "react-bootstrap";
import Filter from "./Components/Filter.jsx";
import Details from "./Components/Details.jsx";
import "./styles.css";

class DefectApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "UI",
      description: "Submit button coming to extreme left refer the screenshots",
      priority: "2",
      status: "open"
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Defect Tracker</h1>
        <button>logout</button>
        <br />
        <button>add defects</button>
        <button>View Defects</button>
        <Filter />
        <br />
        <br />
        <br />
        <Details
          category={this.state.category}
          description={this.state.description}
          priority={this.state.priority}
          status={this.state.status}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<DefectApp />, rootElement);
