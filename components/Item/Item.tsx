import { Comics } from "@/types/types";
import Image from "next/image";
import { FC } from "react";

interface Props {
  comics: Comics;
}

export const Item: FC<Props> = ({ comics }) => {
  return (
    <div className="mt-20 max-w-56 flex flex-col">
      <div className="flex-grow flex flex-col justify-between">
        <Image
          className="
          mb-8 bg-center rounded-2xl transition-transform duration-200 -skew-y-6 hover:scale-110"
          src={
            comics.thumbnail.path +
            "/portrait_uncanny" +
            "." +
            comics.thumbnail.extension
          }
          width={224}
          height={224}
          alt={comics.title}
        />
        <div className="flex flex-col justify-between flex-grow">
          <p className="mb-4 text-xl">{comics.title}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
};
