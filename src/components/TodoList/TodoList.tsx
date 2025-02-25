import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.scss";

const TodoList: React.FC = () => {
  const { tasks, filter } = useSelector((state: RootState) => state.todo);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <ul className={styles.list}>
      {filteredTasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TodoList;
