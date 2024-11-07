import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faBell, faBookmark, faEllipsisH, faEnvelope, faFeatherAlt, faHashtag, faHome, faUser, faUserFriends } from "@fortawesome/free-solid-svg-icons"

const Navitem = ({icon, text}) => (
    <div className="flex items-center p-3 rounded-full hover:bg-gray-600 transition duration-200">
        <FontAwesomeIcon icon={icon} className="text-2xl mr-4"/>
        <span className="text-xl hidden xl:inline">{text}</span>
    </div>
)

 function Sidebar() {

    return (
        <div className="w-20 xl:w-64 sticky top-0 px-2 h-screen">
            <FontAwesomeIcon icon={faTwitter} className="text-blue-400 text-3xl m-4"/>
            <nav className="text-center">
                <Navitem icon={faHome} text="home"/>
                <Navitem icon={faHashtag} text="Explore"/>
                <Navitem icon={faBell} text="Notifications"/>
                <Navitem icon={faEnvelope} text="Messages"/>
                <Navitem icon={faBookmark} text="Bookmarks"/>
                <Navitem icon={faUserFriends} text="Communities"/>
                <Navitem icon={faTwitter} text="Premium"/>
                <Navitem icon={faUser} text="Profile"/>
                <Navitem icon={faEllipsisH} text="More"/>
            </nav>
        <button className=" bg-blue-400 hover:bg-blue-600 transition duration-200 text-white rounded-full font-bold w-full px-4 py-3 mt-4">
            <FontAwesomeIcon icon={faFeatherAlt} className="text-1xl inline xl:hidden"/>
            <span className="hidden xl:inline">Twitter</span>
        </button>
        </div>
    )
}

export default Sidebar