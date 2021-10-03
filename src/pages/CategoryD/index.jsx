import { api } from "../../services"
import { useState, useEffect } from "react"
import primeFrete from "../../assets/prime-frete.png"
import rating from "../../assets/rating-image.png"
import { CartParent } from "./styles"
import { useHistory } from "react-router"
import MenuNav from "../../components/Menu"

export const FilteredProductsD = () => {

    const [categoryD, setCategoryD] = useState([])
    const history = useHistory();

    useEffect(() => {
        api.get('/products?category=4')
        .then(res => setCategoryD(res.data))
        .catch(err => console.log(err))
    }, []) 
    
    return (
        <>
            <MenuNav />
        <CartParent>
        {categoryD.map((catD, index) => (
         <div className="card-recommendation" key={index}>

        <div className="card-image">
            <img src={catD.img_url} alt="produtos" />
            <p>{catD.title.slice(0, 30) + "..."}</p>
        </div>

            <div className="rating">
                <img src={rating} alt="rating" />
            </div>

            <p className="description">{catD.desciption.slice(0, 100)}</p>

            <h4>R${catD.price}</h4>

            <div className="prime-frete">
                <img src={primeFrete} alt="prime-image" />
                <span>FREE delivery today</span>
            </div>

            <div className="add-to-cart">
                <button onClick={() => history.push(`/products/${catD.id}`)}>Ver mais...</button>
            </div>
        </div> 
     ))}
     </CartParent>
     </>
    )
}