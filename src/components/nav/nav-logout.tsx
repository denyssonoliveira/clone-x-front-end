'use client'

import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export const NavLogout = () => {
    const router = useRouter();

    const handleLogout = () => {
        router.replace('/signin');
    };

    return (
        <>
            <div onClick={handleLogout} className="cursor-pointer flex items-center gap-6 py-3 text-gray-500 hover:text-white">
                <FontAwesomeIcon icon={faArrowRightFromBracket} className="size-6"/>
                <div className="text-lg">Sair</div>
            </div>
        </>
    );
};