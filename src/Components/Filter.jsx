import React from "react";

class Filter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Filter">
        <h2>Filter details</h2>
        priority
        <select>
          <option selected>All</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <br />
        <br />
        <br />
        <span>Category</span>
        <select>
          <option selected>All</option>
          <option>UI</option>
          <option>Functional</option>
          <option>Non-functional</option>
          <option>Change request</option>
        </select>
      </div>
    );
  }
}
export default Filter;
