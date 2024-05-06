"use client";

import Item from "@/components/Item/Item";
import ItemReverse from "@/components/ItemReverse/ItemReverse";
import Image from "next/image";
import md5 from "md5";
import { use, useEffect, useState } from "react";

const privateKey = "1234";
const publicKey = "1234";

export default function Home() {
  const [picture, setPicture] = useState("");
  const [resourceURI, setResourceURI] = useState("");
  const [buttonClick, setButtonClick] = useState(false);
  const timestamp = Date.now().toString();

  const standard_fantastic = "/standard_fantastic";
  //https://gateway.marvel.com:443/v1/public/characters/1011006?apikey=d43a485d04ded3bc2ba5d975b31edb53
  const hash = md5(timestamp + privateKey + publicKey);
  const auth = `?ts=${timestamp}&apikey=d43a485d04ded3bc2ba5d975b31edb53&hash=${hash}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://gateway.marvel.com:443/v1/public/characters/1009718${auth}`
      );
      const data = await response.json();
      setPicture(
        data.data.results[0].thumbnail.path +
          standard_fantastic +
          "." +
          data.data.results[0].thumbnail.extension
      );
      setResourceURI(data.data.results[0].comics.items[0].resourceURI);
    };
    fetchData();
  }, [auth]);

  useEffect(() => {
    if (buttonClick) {
      const fetchInfo = async () => {
        const response = await fetch(resourceURI + auth);
        const data = await response.json();
        console.log(data);
      };
      fetchInfo();
    }
  }, [buttonClick]);

  const handleGetInfo = () => {
    setButtonClick(true);
  };

  return (
    <>
      <button
        onClick={handleGetInfo}
        className="m-10 p-3 bg-orange-700 border-none"
      >
        Get Info
      </button>
      <Image width={250} height={250} alt="character photo" src={picture} />
      <div className="mt-20">
        <h2 className="font-sans text-3xl font-semibold">Персонажи</h2>
        <div className="flex gap-10 justify-center">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
      <div className="mt-20">
        <h2 className="font-sans text-3xl font-semibold">Комиксы</h2>
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
