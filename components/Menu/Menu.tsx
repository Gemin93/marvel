import Link from "next/link";

export default function Menu() {
  return (
    <div className="container px-4 flex justify-center items-center gap-10 h-14 bg-slate-800">
      <Link href="/">Главная</Link>
      <Link href="/character">Персонажи</Link>
      <Link href="/comics">Комиксы</Link>
      <Link href="/creators">Авторы</Link>
      <Link href="/events">События</Link>
      <Link href="/series">Серии</Link>
      <Link href="/stories">Истории</Link>
    </div>
  );
}
