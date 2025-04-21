export default function ParagraphComponent(props : any){
    return <p className={props.className}>{props.text} <br /> <span>{props.span}</span> </p>
}