import { capitalizeFirstLetter } from "./AppBar";
import { InputBox } from "./InputBox"

const getInitial = (name:string):string =>{
    return name.charAt(0).toUpperCase();
}

export const FindUser = ({firstName}:{firstName:string[]}) => {

    return <div className="flex flex-col gap-4 p-4">
        <InputBox label="User" placeholder="Search Users..." type="text" ></InputBox>
        {firstName.map((Name:string) => <div key={Name} className="flex items-center justify-between">
                <div className="flex items-center gap-3 ">
                    <div className="bg-blue-200 text-xl h-11 w-11 rounded-full justify-center flex items-center">
                        {getInitial(Name)}
                    </div>
                    <div className="text-xl">
                        {capitalizeFirstLetter(Name)}
                    </div>
                </div>
             
                <button className="bg-[#1E2938] text-white font-medium p-4 rounded-xl">
                    Send Money
                </button>
               
            </div> )}
    </div>
}