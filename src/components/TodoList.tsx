import { ToDoListItem } from "./TodoListItem";

export interface ToDoListProps {
  toDoItems: any;
  deleteItem: any;
  saveItem: any;
  toggleComplete: any;
}

export const ToDoList: React.FC<ToDoListProps> = (props) => {
  const items = props.toDoItems.map((item: any, index: number) => (
    <ToDoListItem key={index} {...item} {...props} />
  ));
  return <div className="items-list">{items}</div>;
};
