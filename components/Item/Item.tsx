import { Comics } from "@/types/types";
import Image from "next/image";
import { FC } from "react";

interface Props {
  comics: Comics;
}

export const Item: FC<Props> = ({ comics }) => {
  return (
    <div className="mt-20 max-w-56">
      <Image
        className="
        mb-10 bg-center rounded-2xl transition-transform duration-200 -skew-y-6 hover:scale-110"
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
      <p className="mb-5 text-xl">{comics.title}</p>
    </div>
  );
};
