export default function Input(props: any){
    return <input 
        id={props.id}
        type={props.type} 
        value={props.value}
        placeholder={props.placeholder}
    />
}