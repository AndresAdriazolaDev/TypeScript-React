import { type Todo as TodoType } from "../types";

interface Props extends TodoType {
  onRemoveTodo: (id: string) => void;
  handleCompleted: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void;
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  handleCompleted,
  onRemoveTodo,
}) => {

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    handleCompleted({ id, completed: event.target.checked });
  };
  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        aria-label="click"
        onChange={handleChangeCheckbox}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={() => {
          onRemoveTodo(id);
        }}
      ></button>
    </div>
  );
};
