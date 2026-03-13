import { Button } from "../components/Button"
import { getInitial } from "../components/FindUser"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"

export const SendMoney = () =>{
    const name = "Aditya patankar"
    return <>
        <div className="flex justify-center items-center h-screen ">
            <div className="shadow-2xl p-5 rounded-2xl">
                <div className="text-8xl">
                    <Heading label="Send Money"></Heading>
                </div>
                <div className="flex items-center gap-3 font-medium">
                    <div className="h-10 w-10 rounded-full bg-blue-300 flex justify-center items-center text-xl text-white">
                        {getInitial(name)}
                    </div>
                    <div>
                        {name}
                    </div>
                </div>
                <InputBox label="Amount (in Rs)" placeholder="Enter amount" type="number"></InputBox>
                <Button label="Initiate Transfer"></Button>
            </div>
        </div>
    </>
}