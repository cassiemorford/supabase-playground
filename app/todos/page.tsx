import { createClient } from "@/utils/supabase/server";
import TodoList from "../../components/TodoList";

export default async function TodoItems() {
  const supabase = await createClient();

  const { data: todoListItems } = await supabase.from("todo_items").select();

  return (
    <div className="text-sky-300 p-4">
      <h1>
        practicing using supabase to build a simple todo list with live updates
      </h1>
      <TodoList todoListItems={todoListItems || []} />
    </div>
  );
}
