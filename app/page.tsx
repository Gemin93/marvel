import Item from "@/components/Item/Item";
import ItemReverse from "@/components/ItemReverse/ItemReverse";
import md5 from "md5";

export default function Home() {
  const timestamp = Date.now().toString();
  //https://gateway.marvel.com:443/v1/public/characters/1009220?apikey=d43a485d04ded3bc2ba5d975b31edb53

  return (
    <>
      <button>{md5("md5")}</button>
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
