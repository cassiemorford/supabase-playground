import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center ">
      <Image
        className="z-0"
        src="/hadoop.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="a small black and white dog squinting while standing on the edge of the grand canyon"
      />
      <div className="relative z-10 opacity-80 text-slate-200 flex flex-col justify-around p-4 rounded-3xl bg-slate-800">
        <div className="w-fit  text-9xl ">404</div>
      </div>
      <div className="w-fit relative"></div>
    </div>
  );
};

export default NotFound;
