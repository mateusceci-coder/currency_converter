import { ChangeEvent, ReactNode} from "react"

interface SelectCoinProps {
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void
    children: ReactNode
}

export default function SelectCoin({onChange, children}: SelectCoinProps) {
    return (
        <select onChange={onChange} className="bg-white p-1 h-[3.5rem] rounded-r-lg">
            {children}
        </select>
    )
}