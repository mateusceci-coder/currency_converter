import { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode
}

export default function Button({children}: ButtonProps) {
    return (
        <button className="bg-teal-200 hover:bg-teal-300 px-10 py-2 rounded-lg">{children}</button>
    )
}