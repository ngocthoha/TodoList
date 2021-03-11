import React from "react";
import "./ListItem.css";

class ListItem extends React.Component {
  render() {
    const handleClick = () => {
      this.props.changeStatus(this.props.id);
    };
    const handleDelete = (e) => {
      //prevent event spread to parent element
      e.stopPropagation();
      this.props.deleteTask(this.props.id);
    };
    const { title, done } = this.props;
    return (
      <div
        className="item"
        style={{ textDecoration: done ? "line-through" : "unset" }}
        onClick={handleClick}
      >
        <span>{title}</span>
        <button
          class="waves-effect waves-light btn-floating"
          style={{ margin: "0px 10px" }}
        >
          <i className="material-icons">edit</i>
        </button>
        <button
          class="waves-effect waves-light btn-floating"
          onClick={handleDelete}
        >
          <i className="material-icons">delete</i>
        </button>
      </div>
    );
  }
}
export default ListItem;
