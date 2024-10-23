import { user } from "@/data/user";
import Link from "next/link";

export const NavMyProfile = () => {
    return (
        <div className="flex items-center justify-start">
            <div className="size-12 mr-2 rounded-full overflow-hidden">
                <Link href={`/${user.slug}`}>
                    <img className="size-full" src={user.avatar} alt={`Avatar de ${user.name}`} />
                </Link>
            </div>
            <div className="flex flex-col  overflow-hidden w-40">
                <Link href={`/${user.slug}`} className="block truncate text-lg">
                    {user.name}
                </Link>
                <span className="text-sm text-gray-400 block truncate">
                    @{user.slug}
                </span>
            </div>
        </div>
    );
};