export function capitalizeFirstLetter(val:string) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export const AppBar = ({label,firstName}:{label:string,firstName:string}) => {
    const name = capitalizeFirstLetter(firstName);
    const initial = name[0];
    return <>
        <div className="flex justify-between p-4 items-center shadow rounded-md">
            <div className="font-bold text-2xl">
                {label}
            </div>
            <div className="flex gap-2 justify-center items-center">
                {name}
                <div className="bg-blue-200 h-8 w-8 rounded-full flex justify-center items-center">
                    {initial}
                </div>
            </div>
        </div>
    </>
}