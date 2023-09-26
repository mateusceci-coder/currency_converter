import { ReactNode } from "react"

interface CoinSymbolProps {
    children: ReactNode
}


export default function CoinSymbol ({children}: CoinSymbolProps) {
    return (
        <label className="absolute top-3 left-0 ml-2 my-auto text-gray-500 pointer-events-none" htmlFor="input1">
            {children}
        </label>
    )
}