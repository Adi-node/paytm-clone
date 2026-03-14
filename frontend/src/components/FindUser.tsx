import { capitalizeFirstLetter } from "./AppBar";
import { InputBox } from "./InputBox"
import { InputBox } from "./InputBox";
import { useNavigate } from "react-router-dom";

export const getInitial = (name:string):string =>{
    return name.charAt(0).toUpperCase();
}

export const FindUser = ({firstName,fun}:{firstName:string[],fun:(fiter:string) => void}) => {
    const[userPresent,setUserPresent] = useState(false);
export const FindUser = ({firstName, fun}:{firstName:string[], fun:(filter:string) => void}) => {
    const navigate = useNavigate();

    if((firstName[0] !== "")){
        setUserPresent(true);
    }
    // Derive visibility logic directly from the data instead of using state to avoid loops
    const userPresent = firstName.length > 0 && firstName[0] !== "";

    return <div className="flex flex-col gap-4 p-4">
        <InputBox label="User" placeholder="Search Users..." type="text" onChange={(e) => fun(e.target.value)}></InputBox>

      {userPresent &&  {firstName.map((Name:string) => <div key={Name} className="flex items-center justify-between">
        {userPresent && firstName.map((name: string) => (
            <div key={name} className="flex items-center justify-between">
                <div className="flex items-center gap-3 ">
                    <div className="bg-blue-200 text-xl h-11 w-11 rounded-full justify-center flex items-center">
                        {getInitial(Name)}
                        {getInitial(name)}
                    </div>
                    <div className="text-xl">
                        {capitalizeFirstLetter(Name)}
                        {capitalizeFirstLetter(name)}
                    </div>
                </div>
             
                <button className="bg-[#1E2938] text-white font-medium p-4 rounded-xl">
                <button onClick={() => navigate("/send?name=" + name)} className="bg-[#1E2938] text-white font-medium p-4 rounded-xl">
                    Send Money
                </button>}
               
            </div> )}
                </button>
            </div>
        ))}
    </div>
}