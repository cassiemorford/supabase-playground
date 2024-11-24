"use client";
import React, { useEffect, useState } from "react";

interface AutocompleteProps<T> {
  url: string;
  placeholder: string;
  onSelect: (item: T) => void;
}

export function Autocomplete<T extends { name: string }>(
  props: AutocompleteProps<T>
) {
  const { url, placeholder, onSelect } = props;
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState<T[]>([]);

  useEffect(() => {
    fetch(`${url}${searchValue}`)
      .then((resp) => resp.json())
      .then((res) => setSuggestions(res.berries));
  }, [searchValue]);

  return (
    <div className="text-slate-50">
      <label> {placeholder} </label>
      <input
        className="m-2 p-2 border border-slate-200"
        value={searchValue}
        onChange={(ev) => setSearchValue(ev.target.value)}
      />
      <ul className="p-4">
        {suggestions.map((s) => (
          <li key={s.name} onClick={() => onSelect(s)}>
            {s.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Autocomplete;
