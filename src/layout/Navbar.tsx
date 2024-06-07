import Link from "next/link";
import { FaServer, FaUserCog } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-5">
            <div>
                <Link href="/">
                    <FaServer size={30} className="text-primary" />
                </Link>
            </div>

            <div className="flex flex-col items-center justify-center">
                <Link href="/dashboard">
                    <FaUserCog size={30} className="text-muted-foreground" />
                </Link>
            </div>
        </nav>
    )
}