import React, { useState } from "react";
import { Task, Filter } from "../../types";
import TodoList from "../TodoList/TodoList";
import Footer from "../Footer/Footer";
import styles from "./App.module.scss";
import TodoInput from "../TodoInput/TodoInput";

const App: React.FC = () => {

  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Тестовое задание", completed: false },
    { id: 2, text: "Прекрасный код", completed: true },
    { id: 3, text: "Покрытие тестами", completed: false },
  ]);
  const [filter, setFilter] = useState<Filter>("all");

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((task) => !task.completed));
  };

  return (
    <div className={styles.app}>
    <h1 className={styles.title}>todos</h1>
    <div className={styles.container}>
      <TodoInput addTask={addTask} />
      <TodoList tasks={tasks} filter={filter} toggleTask={toggleTask}/>
      <Footer tasks={tasks} filter={filter} setFilter={setFilter} clearCompleted={clearCompleted} />
    </div>
  </div>
  );
};

export default App;
