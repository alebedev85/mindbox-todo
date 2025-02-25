import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { setFilter, clearCompleted } from "../../store/todoSlice";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  const dispatch = useDispatch();
  const { tasks, filter } = useSelector((state: RootState) => state.todo);
  const tasksLeft = tasks.filter((t) => !t.completed).length;

  return (
    <div className={styles.footer}>
      <span>{tasksLeft} items left</span>
      <div className={styles.filters}>
        <button
          className={filter === "all" ? styles.activeFilter : ""}
          onClick={() => dispatch(setFilter("all"))}
        >
          All
        </button>
        <button
          className={filter === "active" ? styles.activeFilter : ""}
          onClick={() => dispatch(setFilter("active"))}
        >
          Active
        </button>
        <button
          className={filter === "completed" ? styles.activeFilter : ""}
          onClick={() => dispatch(setFilter("completed"))}
        >
          Completed
        </button>
      </div>
      <button onClick={() => dispatch(clearCompleted())} className={styles.clearButton}>
        Clear completed
      </button>
    </div>
  );
};

export default Footer;
