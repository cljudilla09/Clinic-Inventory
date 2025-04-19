
import LinkImage from "../../components/link-image-component/link-image-component"

export default function List(props : any){
    return (
            <li className="list-btn">
                <LinkImage 
                    className="image-wrapper"
                    href={props.href}
                    src={props.src}
                    w="30"
                    h="30"
                    alt={props.alt}
                    text={props.text}
                /> 
            </li>
    )
}