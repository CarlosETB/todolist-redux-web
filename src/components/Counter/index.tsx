import React from "react";

// Native
import { useSelector } from "react-redux";

const Counter: React.FC = () => {
  const todos = useSelector((state: any) => state.todos);

  return <h2>Você tem {todos.length} todos</h2>;
};

export default Counter;
