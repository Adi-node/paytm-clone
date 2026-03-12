export const Button = ({label}:{label:string}) =>{
    return <button className="hover:cursor-pointer text-xl font-medium bg-[#1E2938] rounded p-2 w-full text-white">
        {label}
    </button>
}