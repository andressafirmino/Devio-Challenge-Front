import { Dispatch, SetStateAction } from "react";

export default function TogglePaymentMethod(method: string, paymentMethod: string[],
    setPaymentMethod: Dispatch<SetStateAction<string[]>>) {
    if (paymentMethod.includes(method)) {
        const newMethod = [...paymentMethod];

        let position = newMethod.findIndex(met => met === method);
        newMethod.splice(position, 1);
        setPaymentMethod(newMethod);
    } else {
        if (paymentMethod.length < 2) {
            const addMethod = [...paymentMethod, method];
            setPaymentMethod(addMethod);
        }
    }
}