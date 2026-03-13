export const Button = ({label}:{label:string}) =>{
    return <button className="hover:cursor-pointer text-md font-bold bg-[#1E2938] rounded p-2 w-full text-white my-2">
        {label}
    </button>
}