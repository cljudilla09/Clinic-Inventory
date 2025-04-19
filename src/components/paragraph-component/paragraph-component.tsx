export default function Paragraph(props : any){
    return <p className={props.className}>{props.text} <br /> <span>{props.span}</span> </p>
}