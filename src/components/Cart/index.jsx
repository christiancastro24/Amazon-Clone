import { ContainerCart, ContainerItemsCart } from "./styles"
import  MenuNav  from "../Menu"
import rectangle from "../../assets/Rectangle84.png"
import { Footer } from "../Footer"
import { useCart } from "../../providers/CartProvider"
import { TotalPrice } from "../TotalPrice"
import { useHistory } from "react-router"


export const Cart = () => {

    const { cart, removeItem, handleAddToCart } = useCart();
    const history = useHistory();

    return (
        <div> 
        <MenuNav />
        <div style={{display: "flex", justifyContent: "space-between", backgroundColor: "lightgray", height: "100vh"}}>
        <ContainerItemsCart>
            {cart.map((car, index) => (
                <main key={index}>
               
        <ContainerCart>
            <div className="container-items">

            <hr className="hr-separator-two" />
                
                <img src={car.img_url} alt="alexa" />
                <h1 style={{position: "relative", left: "-0.5rem"}}>{car.title.slice(0,50) + "..."}</h1>
                <h1>R$ {car.price}</h1>

                <div className="info-prod">
                    <img src={rectangle} alt="amazon" />
                    <p>R${car.price} a vista ou em até 10x de<br /> R${car.installment.toFixed(2)}</p>
                </div>

                <div className="h3">
                    <h3><strong>Cor:</strong> {car.color}</h3>

                <div className="container-controll">
                    <button onClick={() => removeItem(car)}>-</button>
                    <span>Qtd:{car.quantity}</span>

                    <button onClick={() => handleAddToCart(car)}>+</button>
                </div>
                </div>
            </div>
        </ContainerCart>
        </main>
            ))}
        </ContainerItemsCart>
        {cart.length === 0 ? 
            <div style={{display: "flex", flexDirection: "column", position: "relative", left: "-33rem", top: "9rem"}}>
                <h1 style={{fontSize: "2.3rem", fontWeight: "450"}}>Carrinho vazio</h1>
                <a onClick={() => history.push("/")} style={{color: "#1890ff", textAlign: "center"}}>Voltar as compras</a>
            </div>
                :
                <TotalPrice />
        }
            </div>
                <Footer />
        </div>
        )
    }