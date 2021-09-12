import { TodoItem } from "../App";
import { ToDoListItem } from "./TodoListItem";

export interface ToDoListProps {
  toDoItems: TodoItem[];
  deleteItem: any;
  saveItem: any;
  toggleComplete: any;
}

export const ToDoList: React.FC<ToDoListProps> = (props) => {
  const { toDoItems } = props;
  const items = toDoItems.map((item: any, index: number) => {
    let date;
    console.log(index, toDoItems[index].insertedAt);

    if (index !== toDoItems.length - 1) {
      const currentItemDate = new Date(toDoItems[index].insertedAt).getDate();
      const nextItemDate = new Date(toDoItems[index + 1].insertedAt).getDate();

      console.log(currentItemDate, nextItemDate);
      if (currentItemDate < nextItemDate) {
        date = <div>{item.insertedAt.toString()}</div>;
      }
    }
    return (
      <>
        {date}
        <ToDoListItem key={index} {...item} {...props} />
      </>
    );
  });
  return <div className="items-list">{items}</div>;
};
