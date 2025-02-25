import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask } from "../../store/todoSlice";
import styles from "./TodoItem.module.scss";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface Props {
  task: Task;
}

const TodoItem: React.FC<Props> = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch(toggleTask(task.id))}
        className={styles.checkbox}
      />
      <span className={task.completed ? styles.completed : ""}>
        {task.text}
      </span>
    </li>
  );
};

export default TodoItem;
