import Image from "next/image";

export default function Item() {
  return (
    <div className="mt-20">
      <Image
        className="rounded-2xl transition-transform duration-200 skew-y-6 hover:scale-110"
        src="/cap.jpg"
        width={200}
        height={200}
        alt="Picture of element"
      />
    </div>
  );
}
