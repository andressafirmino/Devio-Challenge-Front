import { Dispatch, SetStateAction } from "react";

export default function Addition(counter: number, setCounter: Dispatch<SetStateAction<number>>) {
    const newCounter = counter + 1;
    setCounter(newCounter);
}