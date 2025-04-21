
import LinkImage from "../../components/link-image-component/ImageTextLink"

export default function List(props : any){
    return (
            <li className="list-btn" onClick={props.onCheckedText}>
                <LinkImage 
                    className="image-wrapper"
                    href={props.href}
                    src={props.src}
                    w="30"
                    h="30"
                    alt={props.alt}
                    text={props.text}
                    onCheckedText={props.onCheckedText}
                /> 
            </li>
    )
}