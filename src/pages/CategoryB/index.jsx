import { api } from "../../services"
import { useState, useEffect } from "react"
import primeFrete from "../../assets/prime-frete.png"
import rating from "../../assets/rating-image.png"
import { CartParent } from "./styles"
import { useHistory } from "react-router"
import MenuNav from "../../components/Menu"

export const FilteredProductsB = () => {

    const [categoryB, setCategoryB] = useState([])
    const history = useHistory();

    useEffect(() => {
        api.get('/products?category=2')
        .then(res => setCategoryB(res.data))
        .catch(err => console.log(err))
    }, []) 
    
    return (
        <>
            <MenuNav />
        <CartParent>
        {categoryB.map((catB, index) => (
         <div className="card-recommendation" key={index}>

        <div className="card-image">
            <img src={catB.img_url} alt="produtos" />
            <p>{catB.title.slice(0, 35) + "..."}</p>
        </div>

            <div className="rating">
                <img src={rating} alt="rating" />
            </div>

            <p className="description">{catB.desciption.slice(0, 100)}</p>

            <h4>R${catB.price}</h4>

            <div className="prime-frete">
                <img src={primeFrete} alt="prime-image" />
                <span>FREE delivery today</span>
            </div>

            <div className="add-to-cart">
                <button onClick={() => history.push(`/products/${catB.id}`)}>Ver mais...</button>
            </div>
        </div> 
     ))}
     </CartParent>
     </>
    )
}