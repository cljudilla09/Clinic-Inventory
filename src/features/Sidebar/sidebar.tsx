import Image from "../../components/image-component/image-component"
import List from "./list-component"
import Profile from "./profile-component"
import ContainerImage from "../../components/container-image-component/container-image-component"
import images_ from "../../data/images"
import { useToggleVisibility } from "../../hooks/handleClick"

const { 
    dashboardImgBtn, profileImgBtn, 
    sidebar : 
        [   { img: clinicLogoWhite, alt: white_logo_name,},
            { img : profile, alt : profile_name}, 
        ], 
    carretBtns : [ 
        { img : carretUp, alt: c_up_name}, 
        { img : carretDown, alt: c_down_name}
    ]
} = images_


export default function Sidebar(){
    //handle the showing and hiding of the profile
    const { isShown, handleToggleVisibility } = useToggleVisibility();
    const checkVisibility =  isShown ? "visible" : "hidden"

    return (
        <div className="side-bar-container">
            <div className="side-bar-wrapper">
                <div className="heading-btn-wrapper">
                    <ContainerImage 
                        className_D="logo-header-wrapper"
                        className_P="h1-heading"
                        className="image-wrapper"
                        w="60" h="60"
                        src={clinicLogoWhite} alt={white_logo_name}
                        text="Clinic Inventory"
                    />
                <div className="btn-wrapper">
                    <ul>
                        {/* Dashboard Navigation Buttons */}
                        { dashboardImgBtn.map((item, index) => {
                            return <List key={index}
                                        href={item.href}
                                        src={item.img}
                                        alt={item.alt}
                                        text={item.text}
                                    />
                            })
                        }
                    </ul>
                </div>
            </div>
                <div className="user-profile">
                    {/* Profile */}
                    <ContainerImage 
                            className_D="profile"
                            className_P="profile-name"
                            className="image-profile-wrapper"
                            w="35" h="35"
                            src={profile} alt={profile_name}
                            text="Spencer"
                        />
                    <button className="carret-btn" onClick={ handleToggleVisibility }>
                        <Image 
                            className="image-wrapper"
                            src={isShown ? carretDown : carretUp}
                            width="18"
                            height="18"
                            alt={isShown ? c_down_name : c_up_name}
                        />
                    </button>
                </div>
            </div>
            <div className="dialog-card-profile" style={{visibility : checkVisibility}}>
                <div className="profile-settings">
                    <div className="profile-setting-wrapper">
                        {/* Profile with Email Address */}
                        <ContainerImage 
                            className_D="profile-info"
                            className_P="profile-name"
                            className="image-profile-wrapper"
                            w="35" h="35"
                            src={profile} alt={profile_name}
                            text="Spencer"
                            span="spencer@gmail.com"
                        />
                    </div>
                    {/* Profile Drop Up */}
                    { profileImgBtn.map((item, index) => {
                        return <Profile key={index}
                                    href={item.href}
                                    src={item.img}
                                    alt={item.alt}
                                    text={item.text}
                                />
                        })
                    }
                </div>
            </div>
        </div>
    )
}