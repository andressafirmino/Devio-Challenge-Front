import { Dispatch, SetStateAction } from "react";

export default function Subtraction(counter: number, setCounter: Dispatch<SetStateAction<number>>) {
    const newCounter = counter - 1;
    setCounter(newCounter > 0 ? newCounter : 0);
}