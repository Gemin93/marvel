import Image from "next/image";

export default function Item() {
  return (
    <div className="mt-20">
      <Image
        className="
        mb-10 rounded-2xl transition-transform duration-200 -skew-y-6 hover:scale-110"
        src="/cap.jpg"
        width={200}
        height={200}
        alt="Picture of element"
      />
      <h3 className="mb-5 text-xl">Name</h3>
      <p>
        Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nemo, ab.
      </p>
    </div>
  );
}
