import SlowLoader from "@/components/SlowLoader";
import React, { Suspense } from "react";

const SuspenseDemo = () => {
  return (
    <div className="text-slate-50">
      <div> static content </div>
      <Suspense fallback={<div> i'm loading...</div>}>
        <SlowLoader />
      </Suspense>
    </div>
  );
};

export default SuspenseDemo;
