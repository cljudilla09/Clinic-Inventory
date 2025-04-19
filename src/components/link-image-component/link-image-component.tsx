import Image from "../image-component/image-component"
import Paragraph from "../paragraph-component/paragraph-component"

export default function LinkImage(props : any){
    return (
        <a href={props.href}>
            <Image 
                className={props.className}
                src={props.src}
                width={props.w} 
                height={props.h}
                alt={props.alt}
            />
            <Paragraph text={props.text} />
        </a>
    )
}