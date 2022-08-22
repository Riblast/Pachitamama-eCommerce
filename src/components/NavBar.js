import "../index.css"
import CartWidget from "./CartWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    return (
        <div className="bg-transparent text-red-600 flex flex-row justify-between items-center p-0 w-full h-12">
            <div className="flex justify-between flex-1">
                <h3 className="font-poppins font-medium text-2xl text-white leading-9 mx-3">Pachitamama</h3>
            </div>
            <div className="inline-block">
                <ul className="flex">
                    <li className="font-poppins font-medium text-2xl text-white mx-3 leading-9"><a href="#">Home</a></li>
                    <li className="font-poppins font-medium text-2xl text-white mx-3 leading-9"><a href="#">Menú</a></li>
                    <li className="font-poppins font-medium text-2xl text-white flex-shrink-0 mx-3 leading-9"><a href="#">About Us</a></li>
                </ul>
            </div>
            <div className="flex flex-1 justify-end gap-3 mx-3">
                <FontAwesomeIcon className="w-6 h-6 text-white" icon={faMagnifyingGlass} />
                <FontAwesomeIcon className="w-6 h-6 text-white" icon={faUser} />
                <CartWidget />
            </div>
        </div>
    )
};
export default NavBar;
