import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export const InputBox = ({label,placeholder,type, onChange}:{label:string,placeholder:string,type:string, onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void}) => {
    const [hidden,setHidden] = useState(true);
    const isPassword = type === "password";

    return <div>
        <div className="p-1 pl-0 font-medium">
            {label}
        </div>
        <div className="p-1.5 border-2 border-gray-200 rounded-md flex justify-between">
            <input onChange={onChange} type={isPassword && !hidden ? "text" : type} placeholder={placeholder} className="outline-none w-full"></input>
            {isPassword && (
                <div onClick={() => setHidden(!hidden)} className="cursor-pointer flex items-center px-1 text-gray-600">
                    {hidden ? <FaEye /> : <FaEyeSlash />}
                </div>
            )}
        </div>
    </div>
}