export default function Image(props : any){
    return (
        <div className={props.className}>
            <img 
                src={props.src} 
                width={props.width} 
                height={props.height} 
                alt={props.alt} 
            />
        </div>
    )
}