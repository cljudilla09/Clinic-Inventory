import LinkImage from "../../components/link-image-component/link-image-component"
export default function Profile(props : any){
    return (
        <div className="profile-setting-wrapper">
            <LinkImage 
                href={props.href}
                className="image-profile-wrapper"
                src={props.src}
                w="25"
                h="25"
                alt={props.alt}
                text={props.text}
            /> 
        </div>
    )
}