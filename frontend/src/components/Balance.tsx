export const Balance = ({val}:{val:number}) => {
    val = Math.floor(val);
    const formatted = val.toLocaleString('en-IN');

    return <>
        <div>
            <span className="font-bold p-4 text-xl">Your Balance</span> 
            <span className="text-lg">₹{formatted}</span>
        </div>
    </>
}