import "../index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export function navBar() {
    return (
        <div className="bg-transparent text-red-600 flex flex-row justify-between items-center p-0 absolute w-full h-12">
            <div className=""></div>
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
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>
                </div>
        </div>
    );
}