import Image from "../../components/image-component/image"
import images_ from "../../data/images"

const { eye : { hide : {name : h_eye, src: e_hide}, 
    show : {name : s_eye, src: e_show }}
} = images_


export default function Input(props: any){
    return (
        <div className="input-wrapper">
            <label htmlFor={props.labelFor}>{props.labelText}</label> 
            <input className="outline-border-none" 
                type={props.type} 
                placeholder={props.placeholder} 
                id={props.id}
                name={props.name}
                value={props.value}
                // required
                onChange={props.onChangeField}
            />
            { props.name === "password" && 
                <button id="eye" type="button" onClick={props.onChecked}>
                    <Image src={props.onClickedEye ? e_show : e_hide} alt={props.onClickedEye ? s_eye : h_eye}
                        width="20.72"
                        height={props.onClickedEye ? "13" : "17.46"}
                    />
                </button>
            }  
        </div>
    )
}