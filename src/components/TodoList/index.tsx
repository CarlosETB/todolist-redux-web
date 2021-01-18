import React, { ChangeEvent, FormEvent, useState } from "react";

// Native
import { useSelector, useDispatch } from "react-redux";

// Store
import { addTodo } from "../../store/todos/actions";

interface TodoProps {
  id?: number;
  text?: string;
}

const TodoList: React.FC = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state: any) => state.todos);

  const [todoText, setTodoText] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    dispatch(addTodo(todoText));
    setTodoText("");
  };

  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setTodoText(value);
  };

  const todoList = todos?.map((todo: TodoProps) => (
    <li key={todo?.id}>{todo?.text}</li>
  ));

  return (
    <form onSubmit={handleSubmit}>
      <ul>{todoList}</ul>

      <input type="text" onChange={handleInputChange} />
      <button type="submit">Novo Todo</button>
    </form>
  );
};

export default TodoList;
