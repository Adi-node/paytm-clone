import { useEffect, useRef, useState } from "react"
import { AppBar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import { FindUser } from "../components/FindUser"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Dashboard = () =>{
    const [name,setName] = useState("Loading...");
    const[balance,setBalance] = useState(0);
    const[users,setUsers] = useState([{
        userName:"",
        firstName:"",
        lastName:"",
        _id:""
    }]);

    const timerRef = useRef<number | null>(null);

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
    },[]);

    async function getUsers(filter:string){
        const res = await axios.get("http://localhost:3000/api/v1/user/bulk",{
            params:{
                filter
            },

            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        });

        setUsers(res.data.users);
    }

    async function debounce(f:string) {
        if(timerRef.current){
            clearTimeout(timerRef.current)
        }

        timerRef.current = setTimeout(() =>{
            getUsers(f);
        },1500)
    }


    return <>
    <div className="m-2 flex flex-col gap-5">
        <AppBar label="Pay TM" firstName={name}></AppBar>
        <Balance val={balance}></Balance>
        <FindUser users={users.map(user => ({name:user.firstName,to:user._id}))} fun={debounce}></FindUser>
    </div>
    </>
}