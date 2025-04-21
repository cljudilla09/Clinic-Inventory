import Input from "../../components/input-component/input-component"
import Image from "../../components/image-component/image-component"
import images_ from "../../data/images"

const { heading : [bell_icon, search_icon, person_icon] } = images_
const { img : personImage, alt: personAlt } = person_icon
const { img: bellIcon, alt: bell_Alt } = bell_icon
const { img: searchIcon, alt: search_Alt } = search_icon

export default function Heading(props : any){

    return (
        <div className="heading-container">
            <div className="heading-wrapper">
                <h1 className="dm-sans-f fw-700 color-4E944F">{props.text}</h1>
                <div className="widget-wrapper">
                    <form>
                        <div className="search-icon-wrapper"> 
                        {/* should be wrapped with a button tag? */}
                            <Image 
                                className="search-btn"
                                src={searchIcon}
                                width="22.52"
                                height="22.52"
                                alt={search_Alt}
                            />
                            <Input id="search-input" type="search" placeholder="Search..."/>
                        </div>
                    </form>
                    {/* this should be clickable */}
                    {/* we can try mapping this one */}
                   <div className="b-p-wrapper">
                    <button className="transparent outline-border-none">
                        <Image 
                                src={bellIcon}
                                width="40"
                                height="40"
                                alt={bell_Alt}
                            />
                    </button>
                    <button className="transparent outline-border-none">
                        <Image 
                                src={personImage}
                                width="40"
                                height="40"
                                alt={personAlt}
                            />
                    </button>
                   </div>
                </div>
            </div>
        </div>
    )
}