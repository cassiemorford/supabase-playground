"use client";
import { createClient } from "@supabase/supabase-js";
import React, { useState } from "react";

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

  return <pre>{JSON.stringify(listItems, null, 2)}</pre>;
};

export default TodoList;
