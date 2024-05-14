"use client";

import { Item } from "@/components/Item/Item";
import ItemReverse from "@/components/ItemReverse/ItemReverse";
import md5 from "md5";
import { use, useEffect, useState } from "react";
import { Comics } from "@/types/types";

const privateKey = process.env.NEXT_PUBLIC_PRIVATE_API_KEY;
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_API_KEY;

export default function Home() {
  const [comics, setComics] = useState<Comics[]>([]);
  const timestamp = Date.now().toString();

  const hash = md5(timestamp + privateKey + publicKey);
  const auth = `ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://gateway.marvel.com:443/v1/public/comics?orderBy=focDate&limit=5&${auth}`
      );
      const data = await response.json();
      setComics(data.data.results);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="mt-20">
        <h2 className="font-sans text-3xl font-semibold">Комиксы</h2>
        <div className="flex gap-10 justify-center flex-wrap">
          {comics.map((item) => {
            return <Item key={item.id} comics={item} />;
          })}
        </div>
      </div>
      <div className="mt-20">
        <h2 className="font-sans text-3xl font-semibold">Персонажи</h2>
        <div className="flex gap-10 justify-center">
          <ItemReverse />
          <ItemReverse />
          <ItemReverse />
          <ItemReverse />
          <ItemReverse />
          <ItemReverse />
        </div>
      </div>
    </>
  );
}
