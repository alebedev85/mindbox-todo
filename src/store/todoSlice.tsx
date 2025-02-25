import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  tasks: Task[];
  filter: "all" | "active" | "completed";
}

const initialState: TodoState = {
  tasks: [
    { id: 1, text: "Тестовое задание", completed: false },
    { id: 2, text: "Прекрасный код", completed: true },
    { id: 3, text: "Покрытие тестами", completed: false },
  ],
  filter: "all",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: Task = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.tasks.push(newTask);
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    setFilter: (state, action: PayloadAction<TodoState["filter"]>) => {
      state.filter = action.payload;
    },
    clearCompleted: (state) => {
      state.tasks = state.tasks.filter((task) => !task.completed);
    },
  },
});

export const { addTask, toggleTask, setFilter, clearCompleted } =
  todoSlice.actions;
export default todoSlice.reducer;
