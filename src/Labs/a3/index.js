import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
import { useSelector } from "react-redux";


function Assignment3() {
  const { todos } = useSelector((state) => state.todosReducer);
  return (
    <div>
      <h1>Assignment 3</h1>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <TodoList />
      <TodoItem
        todo={{
          done: true,
          title: "Make Dinner",
          status: "Done",
        }}
      />
      <TodoItem
        todo={{
          done: true,
          title: "pick up kids",
          status: "In Progress",
        }}
      />
      <PathParameters />
      <JavaScript />
    </div>
  );
}

export default Assignment3;
