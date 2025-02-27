import React from "react";
import { Task } from "../../types";
import styles from "./TodoItem.module.scss";

interface Props {
  task: Task;
  toggleTask: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ task, toggleTask }) => {
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        className={styles.checkbox}
      />
      <p className={task.completed ? styles.completed : ""}>{task.text}</p>
    </li>
  );
};

export default TodoItem;
