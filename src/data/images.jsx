import clinicLogo from '../assets/login-images/clinic-logo.png'
import doctor from "../assets/login-images/doctors.svg"
import eye_hide from "../assets/login-images/eye-hide.png"
import eye_show from "../assets/login-images/eye-show.png"
import clinicLogoWhite from "../assets/sidebar-images/clinic_logo1.png"
import vector from '../assets/sidebar-images/Vector.png'
import carretUp from '../assets/sidebar-images/carretUp.png'
import carretDown from '../assets/sidebar-images/down-carret.png'
import history from '../assets/sidebar-images/history.png'
import meds from "../assets/sidebar-images/meds.png"
import analytics from '../assets/sidebar-images/analytics.png'
import profile from '../assets/sidebar-images/profile.png'
import person from '../assets/sidebar-images/person.png'
import cog from '../assets/sidebar-images/cog.png'
import logout from '../assets/sidebar-images/logout.png'
import bell from '../assets/heading-images/bell.png'
import search from '../assets/heading-images/search.png'
import personHeading from '../assets/heading-images/personHeading.png'

const images_ = {
    login : {
        clinicLogo : { name : "Green cross clinic logo", src : clinicLogo },
        doctorImg : { name : "Three doctors standing", src : doctor }
    }, 

    eye : {
        hide : { name : "hide eye button", src : eye_hide },
        show : { name : "show eye button", src : eye_show }
    },

    sidebar : [
        { img : clinicLogoWhite, alt : "white cross logo" },
        { img : profile,  alt : "profile icon" }
    ],

    dashboardImgBtn : [
        { href: "Dashboard-url", img: vector, alt: "white boxes with different sizes", text: "Dashboard" },
        { href: "Supplies-url", img: meds, alt: "medicine tablets", text: "Supplies" },
        { href: "Order History-url", img: history, alt: "history icon", text: "Order History" },
        { href: "Analytics-url", img: analytics, alt: "graph icon", text: "Analytics" },
    ], 

    profileImgBtn : [
        { href: "my-profile-url", img: person, alt: "person icon", text: "My Profile" },
        { href: "settings-url", img: cog, alt: "cog icon", text: "Settings" },
        { href: "logout-url", img: logout, alt: "red logout icon", text: "Logout" },
    ],
    
    carretBtns : [
        { img: carretUp, alt: "carret up icon"},
        { img: carretDown, alt: "carret down icon"},
    ],

    heading : [
        {img: bell, alt: "bell icon"},
        {img: search, alt: "search icon"},
        {img: personHeading, alt: "person icon"}
    ]
}


export default images_