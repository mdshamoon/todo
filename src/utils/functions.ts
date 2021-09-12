export const getLatestId = () => {
  const latestId = localStorage.getItem("id");
  if (latestId) {
    const nextId = Number(latestId) + 1;
    localStorage.setItem("id", nextId.toString());
    return latestId;
  }
  localStorage.setItem("id", "1");
  return "1";
};

export const getTodoItems = () => {
  const items: any = localStorage.getItem("todoItems");
  if (items) {
    return JSON.parse(items);
  }
  localStorage.setItem("todoItems", "[]");
  return [];
};

export const setTodoItemsLocally = (todoItems: any) => {
  localStorage.setItem("todoItems", JSON.stringify(todoItems));
};
