'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    label: string;
    icon?: any;
    href: string;
    active?: boolean;
}

export const NavItem = ({ href, label, icon, active }: Props) => {
    const pathName = usePathname();

    const isPage = pathName === href;
    
    return (
        <>
            {isPage &&
                <span className="flex items-center justify-center gap-6 py-3">
                    {icon &&
                        <FontAwesomeIcon icon={icon} className="size-6"/>
                    }
                    <div className="text-lg">{label}</div>
                </span>
            }
            {!isPage &&
                <Link href={href} className={`flex items-center justify-center gap-6 py-3 text-gray-500 hover:text-white`}>
                    {icon &&
                        <FontAwesomeIcon icon={icon} className="size-6"/>
                    }
                    <div className="text-lg">{label}</div>
                </Link>
            }
        </>
    );
};