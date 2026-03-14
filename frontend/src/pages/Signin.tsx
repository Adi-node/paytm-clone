import axios from "axios"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export const Signin = () =>{
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();

    async function submit (){
        const response = await axios.post('http://localhost:3000/api/v1/user/signin',{
            userName,
            password
        })

        localStorage.setItem('token',response.data.token);
        navigate('/dashboard');
    }

    return <>
        <div className="bg-[#CCD5E2] flex justify-center items-center h-screen">
            <div className="rounded-xl flex flex-col bg-white p-6 gap-2">
                <Heading label="Sign In"></Heading>
                <SubHeading label="Enter your credentials to access your account"></SubHeading>
                <InputBox 
                label="Email" 
                placeholder="abc@xyz.com" 
                type="email"
                onChange={(e)=>{setUserName(e.target.value)}}>
                </InputBox>

                <InputBox 
                label="Password" 
                placeholder="fds#*$82#K@n!" 
                type="password"
                onChange={(e)=>{setPassword(e.target.value)}}>
                </InputBox>
                <Button label="Sign In" fun={submit}></Button>
                <BottomWarning label="Don't have an account?" buttonText="Sign Up" to="/signup" ></BottomWarning>
            </div>
        </div>
    </>
}