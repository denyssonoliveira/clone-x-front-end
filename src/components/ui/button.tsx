import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    type: "submit" | "reset" | "button";
    label?: string;
    icon?: any;
    size: 1 | 2 | 3;
    style: 1 | 2;
    onClick: () => void;
}

export const Button = ({ type, label, icon, size, style, onClick }: Props) => {
    return (
        <button
            onClick={onClick}
            type={`${type}`}
            className={
                `flex justify-center items-center w-full py-2 rounded-full
                    ${size == 1 && 'h-14 text-lg'}
                    ${size == 2 && 'h-10 text-md'}
                    ${size == 3 && 'h-17 text-xs'}
                    ${style == 1 && 'bg-white text-black'}
                    ${style == 2 && 'bg-black text-white border border-gray-500'}
                `
            }>
            {icon &&
                <FontAwesomeIcon
                    icon={icon}
                    className="mr-4 text-gray-500 size-5"
                />
            }
            {label &&
                label
            }
        </button>
    );
};