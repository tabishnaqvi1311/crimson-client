import { useAuth } from "@/hooks/useAuth"
import { CircleUserRound, LogOut, Settings, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function UserButton() {

    const { picture, logout } = useAuth();

    return (
        <div className="dropdown dropdown-end">
            <button tabIndex={0} role="button">
                {
                    picture
                        ?
                        <Image src={picture} alt="user" height={30} width={30} className="rounded-full" />
                        :
                        <CircleUserRound
                            size={30}
                            className={`rounded-full`}
                        />
                }
            </button>
            <ul
                tabIndex={0}
                className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm z-10"
                data-theme="light"
            >
                <li>
  
                    <Link href={'/profile'}><User size={16}/> Profile</Link>
                </li>
                <li>
                    <Link href={'/settings'}><Settings size={16}/> Settings</Link>
                </li>
                <hr />
                <li>
                    <button onClick={logout} className="text-primary"><LogOut size={16}/> Logout</button>
                </li>
            </ul>
        </div>
    )
}