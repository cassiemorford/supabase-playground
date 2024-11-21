"use client";
import { createClient } from "@supabase/supabase-js";
import React, { useState } from "react";
import TodoListItem from "./TodoListItem";
import TodoListInput from "./TodoListInput";

interface Params {
  todoListItems: any[];
}

const TodoList = ({ todoListItems }: Params) => {
  const [listItems, setListItems] = useState(todoListItems);

  const supabaseUrl = "https://wfpatssqgjibywjenhat.supabase.co";
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  const supabase = createClient(supabaseUrl, supabaseKey);

  supabase
    .channel("changes")
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "todo_items",
      },
      (payload) => {
        setListItems([...listItems, payload.new]);
      }
    )
    .subscribe();

  return (
    <div className="p-8">
      <ul>
        {listItems.map((item) => (
          <li key={item.id}>
            <TodoListItem item={item} />
          </li>
        ))}
      </ul>
      <TodoListInput />
    </div>
  );
};

export default TodoList;
