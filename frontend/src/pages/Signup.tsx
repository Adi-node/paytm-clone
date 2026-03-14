import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export const Signup = () =>{
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();


    async function submit (){
        const response =await axios.post('http://localhost:3000/api/v1/user/signup',{
            userName,
            firstName,
            lastName,
            password
        })

        localStorage.setItem("token",response.data.token);
        navigate('/dashboard');
    }


    return <>
        <div className="bg-[#CCD5E2] flex justify-center items-center h-screen">
            <div className="rounded-xl flex flex-col bg-white p-6 gap-2">
                <Heading label="Sign Up"></Heading>
                <SubHeading label="Enter your information to create an account"></SubHeading>

                <InputBox 
                label="First Name" 
                placeholder="firstname" 
                type="text" 
                onChange={(e) => setFirstName(e.target.value)}>
                </InputBox>

                <InputBox 
                label="Last Name" 
                placeholder="lastname" 
                type="text"
                onChange={(e) => setLastName(e.target.value)}>
                </InputBox>

                <InputBox 
                label="Email" 
                placeholder="abc@xyz.com" 
                type="email"
                onChange={(e) => setUserName(e.target.value)}>
                </InputBox>

                <InputBox 
                label="Password" 
                placeholder="fds#*$82#K@n!" 
                type="password"
                onChange={(e) => setPassword(e.target.value)}>
                </InputBox>
                <Button label="Sign Up" fun={submit}></Button>
                <BottomWarning label="Already have an account?" buttonText="Sign In" to="/signin" ></BottomWarning>
            </div>
        </div>
    </>
}