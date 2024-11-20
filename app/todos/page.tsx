import { createClient } from "@/utils/supabase/server";
import TodoList from "./TodoList";

export default async function TodoItems() {
  const supabase = await createClient();

  const { data: todoListItems } = await supabase.from("todo_items").select();

  return <TodoList todoListItems={todoListItems || []} />;
}
