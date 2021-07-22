
import React from "react";

class TasksList extends React.Component {
  constructor() {
    super();
    this.Tasks = ['estudar', 'dormir', 'jantar'];
  }

  render() {
    return (
      <ul>
        {this.Tasks.map((task) => (
          <li>{task}</li>
        ))}
      </ul>
    );
  }
}

export default TasksList;