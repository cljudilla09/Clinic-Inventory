import Hero from "../features/Login/hero"
import Image from "../components/image-component/image"
import Input from "../features/Login/input"
import Button from "../components/button-component/button"
import images_ from "../data/images"
import { useEyeClick, useLoginClick } from "../hooks/handleClick"
import { useChangeFieldLogin } from "../hooks/handleChange"

const { login : {clinicLogo : {name : clinic_alt, src: logo}, 
    doctorImg : {name: doc_alt, src: dctr_img}}
} = images_


export default function Login(){
    // state for eye buttonns
    const { isShown, handleEyeClick } = useEyeClick();
    // state for fields 
    const { credentials, setCredentials, handleChange } = useChangeFieldLogin();
    // handle simple Auth
    const { handleAuthLogin } = useLoginClick(credentials.email, credentials.password, setCredentials);

    return (
        <div className="login-row-container">
            <div className="col">
                <Image 
                    className="image-wrapper"
                    src={logo}
                    width="130"
                    height="130"
                    alt={clinic_alt}
                />
                <Hero classTitle="title" content="Clinic Inventory"  />

                <Hero 
                    classTitle="sub-title" 
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book" 
                />
                 <Image 
                    className="doctor-image-container"
                    src={dctr_img}
                    width="500"
                    height="500"
                    alt={doc_alt}
                />
            </div>
            <div className="col">
                <div className="login-form-container">
                    <div className="form-content-wrapper">
                        <div className="greeting-info">
                            <h2>Welcome back!</h2>
                            <p>Log in to your account to continue.</p>
                        </div>
                        <div className="form-container">
                            <form action="" className="login-form-wrapper">
                                <Input labelFor="email" labelText="Email" 
                                    type="email" placeholder="eg. spencerso@gmail.com"
                                    id="email" name="email" 
                                    onChangeField = { handleChange }
                                    value={credentials.email}
                                />
                                <Input labelFor="password" labelText="Password" 
                                    type={isShown === false ? "password" : "text"} 
                                    placeholder="eg. p@ssWord123"
                                    id="password" name="password"
                                    onChecked={ handleEyeClick }
                                    onClickedEye = { isShown }
                                    onChangeField = { handleChange }
                                    value={credentials.password}
                                    
                                />
                                <div className="rm-fp-container">
                                    <div className="rm-wrapper">
                                        <input type="checkbox" name="" id="login-checkbox"/>
                                        <label htmlFor="login-checkbox">Remember Me</label>
                                    </div>
                                    <a href="test#.com">Forgot Password?</a>
                                </div>
                                <Button 
                                    onChecked={ handleAuthLogin }
                                    id="login-btn" 
                                    type="submit" 
                                    elementText="Log In"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}