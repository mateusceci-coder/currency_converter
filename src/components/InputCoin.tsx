import { ChangeEvent } from "react"

interface InputCoinProps {
    value: number
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function InputCoin ({value, onChange}: InputCoinProps) {
    return (
        <input id="input1" className="text-right border-r-2 p-1 h-[3.5rem] rounded-l-lg" onChange={onChange} value={value} type="text"/>
    )
}