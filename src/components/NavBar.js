import "../index.css"
import CartWidget from "./CartWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import ItemCount from "./ItemCount";

const NavBar = () => {
    return (
        <div className="bg-white flex flex-row justify-between items-center p-0 w-full h-12">
            <div className="flex justify-between flex-1">
            </div>
            <div className="inline-block">
                <ul className="flex">
                    <li className="font-poppins font-medium text-2xl text-black mx-3 leading-9"><a href="#">Home</a></li>
                    <li className="font-poppins font-medium text-2xl text-black mx-3 leading-9"><a href="#">Menú</a></li>
                    <li className="font-poppins font-medium text-2xl text-black flex-shrink-0 mx-3 leading-9"><a href="#">About Us</a></li>
                </ul>
            </div>
            <div className="flex flex-1 justify-end gap-3 mx-3 items-center">
                <FontAwesomeIcon className="w-6 h-6 text-black" icon={faMagnifyingGlass} />
                <FontAwesomeIcon className="w-6 h-6 text-black" icon={faUser} />
                <div className="flex items-center"><CartWidget /><h3 className="items-center font-poppins font-medium text-lg text-black mx-3">{ItemCount}</h3></div>

            </div>
        </div>
    )
};
export default NavBar;
