import React from "react";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const SlowLoader = async () => {
  await sleep(3000);
  const value = "i'm ready!";

  return <div>{value}</div>;
};

export default SlowLoader;
