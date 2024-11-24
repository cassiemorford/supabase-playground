"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface BerryData {
  name: string;
  firmness: any;
  flavors: any[];
  size: string;
  item: {
    url: string;
  };
}

interface Params {
  url: string;
}

const BerryInfo = ({ url }: Params) => {
  const [berryData, setBerryData] = useState<BerryData | undefined>();
  const [berryImgSrc, setBerryImgSrc] = useState<string | undefined>();

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then(setBerryData);
  }, [url]);

  useEffect(() => {
    if (!berryData) return;
    fetch(berryData.item.url)
      .then((resp) => resp.json())
      .then((resp) => setBerryImgSrc(resp.sprites.default));
  }, [berryData]);

  return (
    <div className="flex flex-row">
      <div>
        <p>firmness: {berryData?.firmness.name}</p>
        <p>
          flavors:{" "}
          {berryData?.flavors
            .filter((flavor) => flavor.potency > 0)
            .map(({ flavor }) => flavor.name)
            .join(", ")}
        </p>
        <p> size: {berryData?.size}</p>
      </div>
      {berryImgSrc && (
        <img
          width={100}
          alt={berryData?.name || "pokemon berry"}
          src={berryImgSrc}
        />
      )}
    </div>
  );
};

export default BerryInfo;
