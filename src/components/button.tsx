import { useCounter } from "@/store/store";


export function Button() {
    const {count, inc} = useCounter();
    return <button className="bg-sky-500 border-radius-10 text-white p-1.5 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 duration-300 ease-out" onClick={inc}>Make me happier</button>;
};