import { use } from "react"
import type { Cont } from "./Types"

export type ShorProps = {
    Contity: Promise<Cont[]>
}

export default function Shor({ Contity }: ShorProps) {
    const UseApi=use(Contity)
    console.log(UseApi);
    
    return (
        <>
        <h3>HELlo ami  desher length dekhi:{UseApi.length}</h3>
        </>
    )
}