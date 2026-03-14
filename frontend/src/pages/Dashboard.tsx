import { useEffect, useState } from "react"
import { AppBar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import { FindUser } from "../components/FindUser"
import axios from "axios"

export const Dashboard = () =>{
    const [name,setName] = useState("Loading...");
    const[balance,setBalance] = useState(0);
    const[users,setUsers] = useState([{
        userName:"",
        firstName:"",
        lastName:"",
        _id:""
    }]);

    useEffect(() =>{
        async function getBalance(){
            const res = await axios.get("http://localhost:3000/api/v1/account/balance",{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                }
            });

            setName(res.data.firstName);
            setBalance(res.data.balance);
        }

        getBalance();
    });

    async function getUsers(filter:string){
        const res = await axios.get("http://localhost:3000/api/v1/user/balance?filter=" + filter);

        setUsers(res.data.users);
    }


    return <>
    <div className="m-2 flex flex-col gap-5">
        <AppBar label="Pay TM" firstName={name}></AppBar>
        <Balance val={balance}></Balance>
        <FindUser firstName={users.map(user => (user.firstName))} fun={getUsers}></FindUser>
    </div>
    </>
}