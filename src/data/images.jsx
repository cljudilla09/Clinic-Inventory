import clinicLogo from '../assets/login-images/clinic-logo.png'
import doctor from "../assets/login-images/doctors.svg"
import eye_hide from "../assets/login-images/eye-hide.png"
import eye_show from "../assets/login-images/eye-show.png"

const images_ = {
    login : {
        clinicLogo : { name : "Green cross clinic logo", src : clinicLogo },
        doctorImg : { name : "Three doctors standing", src : doctor }
    }, 

    eye : {
        hide : { name : "hide eye button", src : eye_hide },
        show : { name : "show eye button", src : eye_show }
    }
}

export default images_