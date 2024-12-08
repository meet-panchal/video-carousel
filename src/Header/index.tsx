import { FaAngleDown,FaBars,FaUser,FaSistrix,FaCartShopping} from "react-icons/fa6";
import './header.css';
const Header = () => {
    return (
        <div className="header-container">

            <div className="header-strip">
                <div className='left-text'>
                    <p>Designed in Montreal</p>
                    <p id="pipe">|</p>
                    <p>Fast & Free Shipping</p>
                </div>
                <div className="strip-menu">
                    <p>Reviews</p>
                    <p>Free Swatches</p>
                    <p>Financing</p>
                    <p>Support</p>
                    <p>Contact Us</p>
                    <p>Our Locations</p>
                </div>
                <div className='language'>
                    <p>EN</p>
                    <img src={require("../Assets/Images/canadian-flag.png")} alt="Canadian Flag" id="country-flag" />
                    <FaAngleDown />
                </div>
            </div>

            <div className="header-menu">
                <p id="cozey-logo">cozey</p>
                <div className="menu-items">
                    <p>Saeting</p>
                    <p>Tables</p>
                    <p>Storage</p>
                    <p>Accessories</p>
                    <p>Washable Rugs</p>
                    <p>Outdoor</p>
                </div>
                <div className="icons">
                    <FaSistrix  className="special"/>
                    <FaUser className="special"/>
                    <FaCartShopping />
                    <p className="special">|</p>
                    <FaBars className="special"/>
                </div>
            </div>
        </div>
    );
}

export default Header;