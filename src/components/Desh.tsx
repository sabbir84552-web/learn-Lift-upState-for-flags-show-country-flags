import { use } from "react"
import type { Pattern } from "../Pattern"
// import { count } from "console";

export interface DeshProps {
    patn: Promise<Pattern[]>
}

export default function Desh({patn}: DeshProps){
const useApiUse=use(patn) // data resolve ar jonno ata const useApi = atar moddhe sei array tare ani raklam 
console.log(useApiUse);

    return (
        <>
     <h3>COuntri ar length dekhi (5): {useApiUse.length}</h3>
        <ul>{
            useApiUse.map((itemes,index)=><li key={index}>{itemes.name.common}</li>)
               }</ul>
        </>
    )
}