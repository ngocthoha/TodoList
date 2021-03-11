import React, { Component } from "react";
import "./App.css";
import ListItem from "./components/ListItem/ListItem";
import TaskInput from "./components/TaskInput/TaskInput";

class App extends Component {
  state = {
    tasks: [],
  };
  updateStatus = (id) => {
    const newTasks = [...this.state.tasks];
    const index = newTasks.findIndex((task) => {
      return task.id === id;
    });
    newTasks[index].done = !newTasks[index].done;
    newTasks.sort((task1, task2) => {
      return task1.done - task2.done;
    });
    this.setState({ tasks: newTasks });
  };
  createTask = (title) => {
    const newTasks = [
      ...this.state.tasks,
      { id: Math.random(), title: title, done: false },
    ];
    this.setState({ tasks: newTasks });
  };
  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter((task) => {
      return task.id !== id;
    });
    this.setState({ tasks: newTasks });
  };
  render() {
    const listItems = this.state.tasks.map((task, index) => {
      return (
        <ListItem
          key={index}
          id={task.id}
          title={task.title}
          done={task.done}
          changeStatus={this.updateStatus}
          deleteTask={this.deleteTask}
        />
      );
    });
    return (
      <div className="App">
        <TaskInput createTask={this.createTask} />
        {this.state.tasks.length === 0 ? "No Task" : listItems}
      </div>
    );
  }
}

export default App;
