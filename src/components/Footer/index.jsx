import logoAmazon from "../../assets/amazon-logo-white.png"
import brasil from "../../assets/brazil.png"
import usa from "../../assets/united-states.png"
import { FooterItems } from "./styles"

export const Footer = () => {
    return (
        <FooterItems>
            <div className="back-to-top">
                <a href="#">Back to top</a>
            </div>   

            <div className="footer-items">

                <div className="get-to-know-us">
                    <h2 className="up-first">Get to Know Us</h2>
                    <p>Carrers</p>
                    <p>Blog</p>
                    <p>About Amazon</p>
                    <p>Investor Relations</p>
                    <p>Amazon Devices</p>
                </div>

                <div className="make-mokey-with-us">
                   <h2>Make Money with US</h2>
                   <p>Sell products on Amazon</p>
                    <p>Sell on Amazon Business</p>
                    <p>Sell apps on Amazon</p>
                    <p>Become an Affiliate</p>
                    <p>Advertise Your Products</p>
                    <p>Self-Publish With Us</p>
                    <p>Host an Amazon Hub</p>
                    <p>See More Make Money</p> 
                    <p>with Us</p>
                </div>

                <div className="amazon-payment-products">   
                    <h2 className="up-third">Amazon Payment Products</h2>
                    <p>Amazon Business Car</p>
                    <p>Shop with Points</p>
                    <p>Reload Your Balance</p>
                    <p>Amazon CUrrency Converter</p>
                </div>

                <div className="let-us-help-you">
                    <h2>Let Us Help you</h2>
                    <p>Amazon and Covid-19</p>
                    <p>YOur Account</p>
                    <p>Your Orders</p>
                    <p>Become Shiping Rates</p>
                    <p>Returns</p>
                    <p>Replacements</p>
                    <p>Your Devices</p>
                    <p>Amazon Assistant</p>
                    <p>Help</p>
                </div>

                <hr/>
             
                <footer className="footer-info">
                    <img src={logoAmazon} alt="logo" />

                 <select className="select-language" form="carform">
                    <option value="English">English</option>
                    <option value="Portugues">Português PT-BR</option>
                    <option value="Russian">Russian</option>
                    <option value="Portugues-PT">Português-PT</option>
                </select>

                <select className="select-language" form="carform">
                    <option value="English">$ USD - U.S Dollar</option>
                    <option value="Portugues">R$ BRL - BRA Real</option>
                </select>

                <div className="usa-image">
                    <img src={usa} alt="img-usa" />
                    <span>UNITED-</span>
                    {" "} 
                    <span>STATES</span>
                </div>

                </footer>
            </div>
        </FooterItems>
    )
}


<img src={brasil} alt="img-bra" />