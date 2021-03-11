import React, { Component } from "react";

export default class TaskInput extends Component {
  state = {
    taskInput: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.taskInput.trim() !== "") {
      this.props.createTask(this.state.taskInput);
    }
    this.setState({ taskInput: "" });
  };
  handleChange = (event) => {
    this.setState({ taskInput: event.target.value });
  };
  render() {
    return (
      <header>
        <h1 style={{ fontWeight: "500" }}>Todo-List</h1>
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div
              className="row"
              style={{
                display: "flex",
              }}
            >
              <div
                className="input-field col s6"
                style={{
                  margin: "0 auto",
                }}
              >
                <i className="material-icons prefix">add_box</i>
                <input
                  id="icon_prefix"
                  type="text"
                  className="validate"
                  value={this.state.taskInput}
                  onChange={this.handleChange}
                />
                <label for="icon_prefix">Task</label>
              </div>
            </div>
          </form>
        </div>
      </header>
    );
  }
}
