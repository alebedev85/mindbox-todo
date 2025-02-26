import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("ToDoTest:", () => {
  test("добавление новой задачи", () => {
    render(<App />);
    const input = screen.getByTestId("todoInput");
    const form = screen.getByTestId("form");

    fireEvent.change(input, { target: { value: "Новая задача" } });
    fireEvent.submit(form);

    expect(screen.getByText("Новая задача")).toBeInTheDocument();
  });

  test("переключение состояния задачи (выполнено/не выполнено)", () => {
    render(<App />);
    const input = screen.getByTestId("todoInput");
    const form = screen.getByTestId("form");

    fireEvent.change(input, { target: { value: "Сделать тесты" } });
    fireEvent.submit(form);

    const checkbox = screen.getAllByRole("checkbox")[0];
    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  test("фильтрация задач", () => {
    render(<App />);
    const input = screen.getByTestId("todoInput");
    const form = screen.getByTestId("form");

    fireEvent.change(input, { target: { value: "Задача 1" } });
    fireEvent.submit(form);
    fireEvent.change(input, { target: { value: "Задача 2" } });
    fireEvent.submit(form);

    const checkbox = screen.getAllByRole("checkbox")[0];
    fireEvent.click(checkbox);

    fireEvent.click(screen.getByText("Active"));
    expect(screen.queryByText("Задача 2")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Completed"));
    expect(screen.getByText("Задача 2")).toBeInTheDocument();
    expect(screen.queryByText("Задача 1")).not.toBeInTheDocument();
  });

  test("очистка завершенных задач", () => {
    render(<App />);
    const input = screen.getByTestId("todoInput");
    const form = screen.getByTestId("form");

    fireEvent.change(input, { target: { value: "Очистить меня" } });
    fireEvent.submit(form);

    const checkboxes = screen.getAllByRole("checkbox");
    checkboxes.forEach((checkbox) => fireEvent.click(checkbox));

    fireEvent.click(screen.getByTestId("clearButton"));

    expect(screen.queryByText("Очистить меня")).not.toBeInTheDocument();
  });
});
