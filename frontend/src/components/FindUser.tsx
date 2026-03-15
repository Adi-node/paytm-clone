import { useNavigate } from "react-router-dom";
import { capitalizeFirstLetter } from "./AppBar";
import { InputBox } from "./InputBox";

export const getInitial = (name: string | null): string => {
    if(!name){
        return "Unknown user"
    }
    return name.charAt(0).toUpperCase();
};



export const FindUser = ({ users, fun}: { users:{name:string,to:string}[], fun: (filter: string) => void}) => {
    const navigate = useNavigate();
    const hasUsers = users.length > 0 && users[0].name !== "";

    return (
        <div className="flex flex-col gap-4 p-4">
            <InputBox label="User" placeholder="Search Users..." type="text" onChange={(e) => fun(e.target.value)} />

            {hasUsers && users.map((user:{name:string,to:string}) => (
                <div key={user.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-200 text-xl h-11 w-11 rounded-full justify-center flex items-center">
                            {getInitial(user.name)}
                        </div>
                        <div className="text-xl">
                            {capitalizeFirstLetter(user.name)}
                        </div>
                    </div>
                    <button onClick={() => navigate(`/send?to=${user.to}&name=${user.name}`)} className="bg-[#1E2938] text-white font-medium p-4 rounded-xl">
                        Send Money
                    </button>
                </div>
            ))}
        </div>
    );
};