import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="bg-gray-300 p-3">
            <ul className="flex justify-around">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/contact">contact</Link></li>
                <li><Link href="/about">about</Link></li>
                <li><Link href="/services">servirces</Link></li>
            </ul>
        </nav>
    )
}