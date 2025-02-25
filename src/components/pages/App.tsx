import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/todoSlice";
import TodoList from "../TodoList/TodoList";
import Footer from "../Footer/Footer";
import styles from "./App.module.scss";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      dispatch(addTask(inputValue));
      setInputValue("");
    }
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>todos</h1>
      <div className={styles.container}>
        <input
          className={styles.input}
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleAddTask}
        />
        <TodoList />
        <Footer />
      </div>
    </div>
  );
};

export default App;
