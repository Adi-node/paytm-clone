import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signup = () =>{
    return <>
        <div className="bg-[#CCD5E2] flex justify-center items-center h-screen">
            <div className="rounded-xl flex flex-col bg-white p-6 gap-2">
                <Heading label="Sign Up"></Heading>
                <SubHeading label="Enter your information to create an account"></SubHeading>
                <InputBox label="First Name" placeholder="firstname" type="text"></InputBox>
                <InputBox label="Last Name" placeholder="lastname" type="text"></InputBox>
                <InputBox label="Email" placeholder="abc@xyz.com" type="email"></InputBox>
                <InputBox label="Password" placeholder="fds#*$82#K@n!" type="password"></InputBox>
                <Button label="Sign Up"></Button>
                <BottomWarning label="Already have an account?" buttonText="Sign In" to="/signin" ></BottomWarning>
            </div>
        </div>
    </>
}