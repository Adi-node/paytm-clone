import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signin = () =>{
    return <>
        <div className="bg-[#CCD5E2] flex justify-center items-center h-screen">
            <div className="rounded-xl flex flex-col bg-white p-6 gap-2">
                <Heading label="Sign In"></Heading>
                <SubHeading label="Enter your credentials to access your account"></SubHeading>
                <InputBox label="Email" placeholder="abc@xyz.com" type="email"></InputBox>
                <InputBox label="Password" placeholder="fds#*$82#K@n!" type="password"></InputBox>
                <Button label="Sign In"></Button>
                <BottomWarning label="Don't have an account?" buttonText="Sign Up" to="/signup" ></BottomWarning>
            </div>
        </div>
    </>
}