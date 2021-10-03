import primeFrete from "../../assets/prime-frete.png"
import rating from "../../assets/rating-image.png"
import { CartParent } from "./styles"
import { useProducts } from "../../providers/Products"
import { useHistory } from "react-router"

export const CardProducts = () => {

    const { initialProducts } = useProducts();

    const history = useHistory();

    return (
        <CartParent>

        {initialProducts.map((prods, index) => (
         <div className="card-recommendation" key={index}>

        <div className="card-image">
            <img src={prods.img_url} alt="produtos" />
            <p>{prods.title.slice(0, 35) + "..."}</p>
        </div>

            <div className="rating">
                <img src={rating} alt="rating" />
            </div>

            <p className="description">{prods.desciption.slice(0, 100)}</p>

            <h4>R${prods.price}</h4>

            <div className="prime-frete">
                <img src={primeFrete} alt="prime-image" />
                <span>FREE delivery today</span>
            </div>

            <div className="add-to-cart">
                <button onClick={() => history.push(`/products/${prods.id}`)}>Ver mais...</button>
            </div>
        </div> 
     ))}
     </CartParent>
    )
}