export default function Button(props : any){
    return ( 
        <div className="btn-wrapper">
            <button 
                onClick={props.onChecked}
                id={props.id} 
                type={props.type}
            > {props.elementText}</button>
        </div>  
    )
}   