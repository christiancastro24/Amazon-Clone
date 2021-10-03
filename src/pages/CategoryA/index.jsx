import { api } from "../../services"
import { useState, useEffect } from "react"
import primeFrete from "../../assets/prime-frete.png"
import rating from "../../assets/rating-image.png"
import { CartParent } from "./styles"
import { useHistory } from "react-router"
import MenuNav from "../../components/Menu"

export const FilteredProductsA = () => {

    const [categoryA, setCategoryA] = useState([])
    const history = useHistory();

    useEffect(() => {
        api.get('/products?category=1')
        .then(res => setCategoryA(res.data))
        .catch(err => console.log(err))
    }, []) 
    
    return (
        <>
            <MenuNav />
        <CartParent>
        {categoryA.map((catA, index) => (
         <div className="card-recommendation" key={index}>

        <div className="card-image">
            <img src={catA.img_url} alt="produtos" />
            <p>{catA.title.slice(0, 35) + "..."}</p>
        </div>

            <div className="rating">
                <img src={rating} alt="rating" />
            </div>

            <p className="description">{catA.desciption.slice(0, 100)}</p>

            <h4>R${catA.price}</h4>

            <div className="prime-frete">
                <img src={primeFrete} alt="prime-image" />
                <span>FREE delivery today</span>
            </div>

            <div className="add-to-cart">
                <button onClick={() => history.push(`/products/${catA.id}`)}>Ver mais...</button>
            </div>
        </div> 
     ))}
     </CartParent>
     </>
    )
}