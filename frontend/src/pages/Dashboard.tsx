import { AppBar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import { FindUser } from "../components/FindUser"

export const Dashboard = () =>{
    return <>
    <div className="m-2 flex flex-col gap-5">
        <AppBar label="Pay TM" firstName="Aditya"></AppBar>
        <Balance val={10781515540.30303030}></Balance>
        <FindUser firstName={["aditya","himanshu","akshat"]}></FindUser>
    </div>
    </>
}