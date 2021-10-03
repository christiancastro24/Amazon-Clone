import { useCart } from "../../providers/CartProvider"
import { Total } from "./styles"
import check from "../../assets/check.png"
import { useHistory } from "react-router";


export const TotalPrice = () => {

    const { cart } = useCart();
    const history = useHistory();
    const total = cart.reduce((acc, tot) => acc + tot.quantity * tot.price, 0);

    return (
        <Total>
            <div className="sub-frete">

                <div className="verificado-text">
                    <img src={check} alt="verificado" />

                    <span className="span-parent"><span>Seu pedido se qualifica para frete gratis!</span> Selecione FRETE GRATIS ao finalizar a sua compra</span>
                </div>

                <h2>Subtotal ({cart.length} Items): <span className="bold-span">R$ {total.toFixed(2)}</span></h2>

                <div className="input-span">
                    <input type="checkbox" /><span>Este item é um presente?</span>
                </div>

                <div className="btn-ceps">
                    <button onClick={() => history.push("/cepClient")}>Confirmar seus dados</button>
                </div>
            </div>
        </Total>

    )
}