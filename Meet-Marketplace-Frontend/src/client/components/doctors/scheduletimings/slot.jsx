import React, { Component } from "react";

class Slot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [{ value: "one", label: "One" }],
    };
    this.removeClick = this.removeClick.bind(this);
  }

  removeClick = (e, i) => {
    e.preventDefault();
    let users = [...this.state.users];
    users.splice(i, 1);
    this.setState({ users });
  };
  addClick() {
    this.setState((prevState) => ({
      users: [...prevState.users, { value: "one", label: "One" }],
    }));
  }
  createUI() {
    return this.state.users.map((el, i) => (
      <div key={i}>
        <div className="row form-row">
          <div className="col-12 col-md-5">
            <div className="form-group">
              <label>Start Time</label>
              <select className="form-control">
                <option>-</option>
                <option>12.00 am</option>
                <option>12.30 am</option>
                <option>1.00 am</option>
                <option>1.30 am</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <div className="form-group">
              <label>End Time</label>
              <select className="form-control" disabled="true">
                <option>-</option>
                <option>12.00 am</option>
                <option>12.30 am</option>
                <option>1.00 am</option>
                <option>1.30 am</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    ));
  }
  render() {
    return (
      <>
        <div className="hours-info">
          <div className="row form-row hours-cont">
            <div className="col-12 col-md-10">{this.createUI()}</div>
          </div>
        </div>
      </>
    );
  }
}
export default Slot;
