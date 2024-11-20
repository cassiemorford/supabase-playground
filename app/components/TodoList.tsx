"use client";
import { createClient } from "@supabase/supabase-js";
import React, { useState } from "react";
import TodoListItem from "./TodoListItem";

interface Params {
  todoListItems: any[];
}

const TodoList = ({ todoListItems }: Params) => {
  const [listItems, setListItems] = useState(todoListItems);

  const supabaseUrl = "https://wfpatssqgjibywjenhat.supabase.co";
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const channel = supabase
    .channel("changes")
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "todo_items",
      },
      (payload) => setListItems([...listItems, payload])
    )
    .subscribe();

  return (
    <>
      <ul>
        {listItems.map((item) => (
          <li>
            <TodoListItem item={item} />
          </li>
        ))}
      </ul>
      <input
        className="border border-purple-50 m-1 p-1"
        type="text"
        placeholder="add new todo"
      />
    </>
  );
};

export default TodoList;
