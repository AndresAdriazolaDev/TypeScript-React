import { TodoId, type ListOfTodos, type Todo as TodoType } from "../types";
import { Todo } from "./Todo";

interface Props {
  todos: ListOfTodos;
  handleCompleted: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void;
  onRemoveTodo: ({ id }: TodoId) => void;
}

export const Todos: React.FC<Props> = ({
  todos,
  onRemoveTodo,
  handleCompleted,
}) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? "Completed" : ""}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            handleCompleted={handleCompleted}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
          />
        </li>
      ))}
    </ul>
  );
};
