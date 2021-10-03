// STYLES

import {MainContainer,
        ImgContainer,
        ProdContainer,
        InfoContainer,
        OrderContainer} from "./styles"

// IMAGENS 

import { useState, useEffect } from "react"
import { api } from "../../services"

import secure from "../../assets/secure.png"
import returns from "../../assets/returns.png"
import amazonDelivered from "../../assets/amazonDelivered.png"
import rating from "../../assets/rating-image.png"
import {Divider} from "antd"
import { useParams, useHistory } from "react-router";
import MenuNav from "../Menu"
import { useCart } from "../../providers/CartProvider"
import { RiLockPasswordFill } from "react-icons/ri"
import { toast } from "react-hot-toast"

const ProductContent = () => {

    const [productEspecific, setProductEspecific] = useState([])
    const [numberAleatorio] = useState(Math.floor(Math.random() * 100))

    const { id } = useParams();
    const { handleAddToCart } = useCart();
    const history = useHistory();

    useEffect(() => {
        api.get(`/products/${id}`)
        .then(res => setProductEspecific([res.data]))
        .catch(err => console.log(err))
    }, [])

    return (
    <MainContainer>
        <div className="nav"> 
         <MenuNav />
        </div>

        {productEspecific.map((prodss, index) => (
            <ProdContainer key={index}>
            <ImgContainer>
                <img className="main-img"src={prodss.img_url} alt="product/id" />
            </ImgContainer>
            <InfoContainer>
                <strong>{prodss.title.slice(0, 75) + "..."}</strong>
                <p className="brand"> Marca: {prodss.brand}</p>
                <div className="rating" style={{display: "flex", alignItems: "center"}}>
                <img src={rating} alt="rating" /> {" "} <span>&nbsp;{numberAleatorio} avaliações de clientes</span>
                </div>
                <div className="indica"> <p className="first">Amazon <span>indica</span></p></div>
                <div className="price">
                    <p className="de-por"> De: R$ {prodss.original_price}</p>
                    <p className="descount">Por:<span> R$ {prodss.price} </span> (à vista {prodss.discount}% off)</p>
                    <p className="installment"> ou 10x sem juros de R$21,90 SEM JUROS</p>
                </div>
                <div className="d-icons">
                    <img src={secure} alt="secure-icon" /> <p> Transação Segura </p>
                    <img src={returns} alt="returns-icon"/> <p> Enviado pela Amazon </p>
                    <img src={amazonDelivered} alt="amazonDelivered-icon"/> <p> Política de Segura </p>
                </div>
                <Divider/>
                <div className="prod-color"> Cor: {prodss.color}</div>

                <div className="description">
                    <p>
                        {prodss.desciption}
                    </p>
                </div>
            </InfoContainer>
            <OrderContainer>
                <p className="order-price"> R$ {prodss.price.toFixed(2)}</p>
                <div className="frete"><span>Entrega com frete</span> <p>GRATIS!</p></div>

                <div className="about-frete">
                    <p><span className="color-normal">Entrega mais rápida:</span> <span className="span-bold"> Daqui 2 dias </span>
                    <span className="gray">Se pedir dentro de 14 h e 41 min</span></p>
                </div>

                <span className="stock"> Em estoque</span>
                <span className="quantity">Quantidade:&nbsp; 
                    <select className="select">
                        <option>1</option>
                    </select>
                </span>

                  <button  className="addToCart" onClick={() => {
                      handleAddToCart(prodss); 
                      history.push("/cart");
                      toast.success("Item adicionado ao carrinho!", {
                        style: {
                            backgroundColor: "#007600",
                            color: "#fff",
                        },
                    });
                      }}> Adicionar ao Carrinho</button>

                <div style={{display: "flex", width: "100%", alignItems: "center", justifyContent: "center"}}>
                    <RiLockPasswordFill style={{margin: "0.4rem"}}/>
                    {" "}
                    <h6 style={{color: "#007185"}}>Transação segura </h6>
                </div>
            </OrderContainer>
        </ProdContainer>
            ))}
    </MainContainer>

    )
}

export default ProductContent