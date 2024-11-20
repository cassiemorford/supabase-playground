import { createClient } from "@/utils/supabase/client";
import React, { useState } from "react";

const TodoListInput = () => {
  const [inputValue, setInputValue] = useState("");
  const supabase = createClient();

  const createTodo = async () => {
    try {
      const { data, error } = await supabase
        .from("todo_items")
        .insert({ value: inputValue });

      if (error) {
        console.error("Error inserting data:", error);
      } else {
        setInputValue("");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (ev) => {
    if (ev.key === "Enter") {
      createTodo();
    }
  };

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (ev) => {
    setInputValue(ev.target.value);
  };

  return (
    <input
      value={inputValue}
      onChange={(e) => handleOnChange(e)}
      onKeyDown={(e) => handleKeyDown(e)}
      className="border border-purple-50 m-1 p-1"
      type="text"
      placeholder="add new todo"
    />
  );
};

export default TodoListInput;
