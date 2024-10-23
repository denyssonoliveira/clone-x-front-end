import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";

type Props = {
    type?: string;
    placeholder: string;
    value?: string;
    filled?: boolean;
    icon?: any;
    onChange?: (newValue: string) => void;
}

export const Input = ({ type, placeholder, value, filled, icon, onChange }: Props) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="border border-gray-500 rounded-full w-full flex justify-start items-center has-[:focus]:border-white">
            <FontAwesomeIcon
                icon={icon}
                className="ml-4 text-gray-500 size-5"
            />
            <input
                className={`bg-transparent text-sm py-3 ${icon ? 'px-3' : 'px-5'} w-full outline-none ${filled && 'bg-gray-700'}`}
                value={value}
                type={type && !showPassword ? type : 'text'}
                placeholder={placeholder}
                onChange={text => onChange && onChange(text.target.value)}
            />
            {type == 'password' &&
                <FontAwesomeIcon
                    icon={!showPassword ? faEye : faEyeSlash}
                    onClick={() => setShowPassword(!showPassword)}
                    className="mr-4 text-gray-500 size-5 cursor-pointer"
                />
            }
        </div>
    );
}