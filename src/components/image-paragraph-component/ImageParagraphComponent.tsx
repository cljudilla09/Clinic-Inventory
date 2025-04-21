import Image from "../image-component/ImageComponent"
import ParagraphComponent from "../paragraph-component/ParagraphComponent"

export default function ImageParagraphComponent(props : any){
    return (
        <div className={props.className_D}>
            <Image 
                className={props.className}
                src={props.src}
                width={props.w}
                height={props.h}
                alt={props.alt}
            />
            <ParagraphComponent 
                className={props.className_P} 
                text={props.text} 
                span={props.span}
            />
        </div>
    )
}