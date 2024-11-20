import React from "react";

interface Params {
  item: {
    id: number;
    created_at: string;
    value: string;
    creator_id: string;
  };
}

const TodoListItem = ({ item }: Params) => {
  const createdAt = new Date(item.created_at);
  const createdAtString = createdAt.toLocaleDateString();
  return (
    <div>
      <input type="checkbox" className="mr-2" />
      <span>{item.value}</span>
      <span className="text-blue-300 text-xs">{createdAtString}</span>
    </div>
  );
};

export default TodoListItem;
