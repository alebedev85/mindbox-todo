import { useState } from "react";
import ArrowDown from "../../assets/down-arrow.svg";
import styles from "./TodoInput.module.scss";

type Props = {
  addTask: (text: string) => void;
};

const TodoInput: React.FC<Props> = ({ addTask }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <img className={styles.img} src={ArrowDown} alt="" />
      <input
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={styles.input}
      />
    </form>
  );
};

export default TodoInput;
