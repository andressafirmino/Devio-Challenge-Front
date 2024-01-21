import React, { SetStateAction } from "react";

export default function CheckString(value: string, setCashPayment: React.Dispatch<SetStateAction<string>>) {
    const match = value.match(/^(\d+([,])?\d{0,2})?/);

    if (match) {
        const numericValue = match[0].replace(/[^\d,]/g, '');
        setCashPayment(numericValue);
    }
}