export interface NewExtensionTestProps {
    name: string
    job:string
}

export default function NewExtensionTest({ name,job }: NewExtensionTestProps) {
    
    return (
        <>
     <h3>job:{job}</h3>
     <h3>name:{name}</h3>
        </>
        )
}