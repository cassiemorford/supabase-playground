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
    <div className="text-slate-200">
      <input type="checkbox" className="mr-2" />
      <span className="mr-2">{item.value}</span>
      <span className="text-blue-300 text-xs">{createdAtString}</span>
    </div>
  );
};

export default TodoListItem;
