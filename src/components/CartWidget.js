import "../index.css"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartWidget = () => {
    return(
    <FontAwesomeIcon className="w-6 h-6 text-white" icon={faCartShopping}/>
    )
}
export default CartWidget;