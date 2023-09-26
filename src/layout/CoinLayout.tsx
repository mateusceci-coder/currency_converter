import { ReactNode } from "react"

interface CoinLayoutProps {
    children: ReactNode
}

export default function CoinLayout({children}: CoinLayoutProps) {
    return (
        <div className="flex">
            {children}
        </div>
    )
}