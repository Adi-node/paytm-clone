import { useState } from "react"
import { Button } from "../components/Button"
import { getInitial } from "../components/FindUser"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const SendMoney = () =>{
    const params = new URLSearchParams(location.search);
    const [amount,setAmount] = useState('0');
    const [to,setTo] = useState(params.get('to'));
    const navigate = useNavigate();

    const name = params.get('name');

    async function initiateTransfer(){
        const res = await axios.post('http://localhost:3000/api/v1/account/transfer',{
            amount,
            to
        },{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            },
        })

        alert(res.data.message);
        navigate('/dashboard');   
    }


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
                <InputBox label="Amount (in Rs)" placeholder="Enter amount" type="number" onChange={(e) => setAmount(e.target.value)}></InputBox>
                <Button label="Initiate Transfer" fun={initiateTransfer}></Button>
            </div>
        </div>
    </>
}