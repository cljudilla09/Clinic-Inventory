import ImageComponent from "../image-component/ImageComponent"
import ParagraphComponent from "../paragraph-component/ParagraphComponent"

export default function LinkImage(props : any){
    return (
        <a href={props.href} >
            <ImageComponent 
                className={props.className}
                src={props.src}
                width={props.w} 
                height={props.h}
                alt={props.alt}
            />
            <ParagraphComponent text={props.text} />
        </a>
    )
}