import Menu from "../Menu/Menu";

export default function Header() {
    return (
        <div className="flex flex-col justify-center h-40 bg-center bg-[url('../public/bg-header.jpg')]">
            <Menu/>
        </div>
    )
}