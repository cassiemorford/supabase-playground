"use client";
import Autocomplete from "@/components/Autocomplete";
import BerryInfo from "@/components/BerryInfo";
import React, { useState } from "react";

interface BerrySuggestion {
  name: string;
  url: string;
}

const AutocompleteBerries = () => {
  const [selectedBerry, setSelectedBerry] = useState<
    BerrySuggestion | undefined
  >();

  return (
    <div className="text-slate-50 flex flex-grow-0">
      <div>
        <Autocomplete<BerrySuggestion>
          placeholder="type a berry"
          url="/api/autocomplete?query="
          onSelect={setSelectedBerry}
        />
      </div>
      {selectedBerry && <BerryInfo url={selectedBerry.url} />}
    </div>
  );
};

export default AutocompleteBerries;
