import React from "react";
import { Task, Filter } from "../../types";
import styles from "./Footer.module.scss";

type Props = {
  tasks: Task[];
  filter: Filter;
  setFilter: (filter: Filter) => void;
  clearCompleted: () => void;
};

const Footer: React.FC<Props> = ({ tasks, filter, setFilter, clearCompleted }) => {
  const tasksLeft = tasks.filter((t) => !t.completed).length;

  return (
    <div className={styles.footer}>
      <p>{tasksLeft} items left</p>
      <div className={styles.filters}>
        <button
          className={filter === "all" ? styles.activeFilter : ""}
          onClick={()=>setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "active" ? styles.activeFilter : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={filter === "completed" ? styles.activeFilter : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
      <button data-testid="clearButton" onClick={clearCompleted} className={styles.clearButton}>
        Clear completed
      </button>
    </div>
  );
};

export default Footer;
