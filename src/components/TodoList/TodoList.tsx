import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import { Filter, Task } from "../../types";
import styles from "./TodoList.module.scss";

type Props = {
  tasks: Task[];
  filter: Filter;
  toggleTask: (id: number) => void;
};

const TodoList: React.FC<Props> = ({ tasks, filter, toggleTask}) => {

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <ul className={styles.list}>
      {filteredTasks.map((task) => (
        <TodoItem key={task.id} task={task} toggleTask={toggleTask}/>
      ))}
    </ul>
  );
};

export default TodoList;
