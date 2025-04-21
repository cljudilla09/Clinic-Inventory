import Image from "../image-component/image-component"
import Paragraph from "../paragraph-component/ContentParagraph"

export default function ContainerImage(props : any){
    return (
        <div className={props.className_D}>
            <Image 
                className={props.className}
                src={props.src}
                width={props.w}
                height={props.h}
                alt={props.alt}
            />
            <Paragraph className={props.className_P} text={props.text} span={props.span}/>
        </div>
    )
}