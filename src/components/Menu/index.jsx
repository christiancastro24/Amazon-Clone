// COMPONENTES
import SearchBar from "../SearchBar"
import { Badge } from 'antd';
import MenuBurguer from "./MenuBurguer";
import Burger from "./Burger";
import { SearchBox,MenuBox} from "./styles"
import amazonLogoWhite from "../../assets/amazonLogoWhite.png"
import {RiShoppingCartLine} from "react-icons/ri"
import { useState, useRef } from "react";
import { useOnClickOutside } from './hooks';
import { useHistory } from "react-router";
import { useAuthentication } from '../../providers/Authentication';
import { useCart } from "../../providers/CartProvider";

const MenuNav = () => {

    const [open, setOpen] = useState(false);
    const { userName, authenticated } = useAuthentication();
    const { cart } = useCart();
    const node = useRef(); 
    const history = useHistory();
    
    useOnClickOutside(node, () => setOpen(false));

    const hour = new Date().getHours();
    
    return(
        <div>
            <SearchBox>
            <img src={amazonLogoWhite} alt="logo" onClick={() => {history.push("/"); history.go(0)}} title="Início" style={{cursor: "pointer"}}/>
            <SearchBar/>
            <div className="setUser">
                <p className="user">
                    {hour > 18
                        ? "Boa noite, "
                        : hour > 12
                        ? "Boa tarde, "
                        : hour > 6
                        ? "Bom dia, "
                        : "Boa noite, "}
                        {userName}
                    </p>
                <h3 className="account" style={{cursor: "pointer"}} onClick={() => history.push("/InfoClient")}>Account and Lists</h3>
            </div>

            {!authenticated ? 
             <RiShoppingCartLine className="cart" onClick={() => history.push("/register")} title="Carrinho" style={{cursor: "pointer"}}/>
             :
             <RiShoppingCartLine className="cart" onClick={() => history.push("/cart")} title="Carrinho" style={{cursor: "pointer"}}/>

            }

            <Badge style={{position: "relative", left: "-1.1rem", top: "-1rem"}}size="default" count={cart.length}/>
            </SearchBox>
        
            <MenuBox ref={node} className="teste">
                <Burger open={open} setOpen={setOpen} />
                <MenuBurguer open={open} setOpen={setOpen} />
                <a href="#">All</a>
                <a href="#">Today’s Deals</a >
                <a href="#">Costumer Service</a >
                <a href="#">Buy Again</a >
                <a href="#">User’s wishlist</a >
                <a href="#">Gift Card</a >
                <a href="#">Registry</a >
                <a href="#">Sell</a >
                <span>Amazon’s response to COVID-19</span>          
            </MenuBox>

       
        </div>
    )
}
export default MenuNav