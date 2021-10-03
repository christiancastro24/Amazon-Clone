import { useAuthentication } from "../../providers/Authentication";
import MenuNav from "../../components/Menu"
import { useCart } from "../../providers/CartProvider";
import { ContainerCheckout } from "./styles";
import { useHistory } from "react-router-dom"
import { api } from "../../services";
import { useState, useEffect } from "react"
import { AiOutlineReload } from "react-icons/ai"
import { toast } from "react-hot-toast"

export const Checkout = () => {

    const { userId, userName, emailUser, cepsUser, logradouroUser, bairroUser, localidadeUser, ufUser, user, setUser } = useAuthentication();
    const { cart, setCart } = useCart(); 

    const history = useHistory();
   
    const [isLoading, setIsLoading] = useState(false)

    const handleSendDemand =  () => {
        toast.success((`Seu pedido está em processamento e será enviado para ${user.numberHouse}, ${user.complement}`), {
            style: {
                backgroundColor: "#007600",
                color: "#fff",
            },
        })
            setCart([])

        setTimeout(() => {
            history.push("/")
        }, 2000)
    }

    useEffect(() => {
        setIsLoading(true)
        api.get(`users/${userId}`)
        .then(res => {setUser(res.data); setIsLoading(false); })
        .catch(err => console.log(err))
    }, [])


    return (
        <div style={{backgroundColor: "lightgray", height: "100vh"}}>
        <MenuNav />
            <h1 style={{position: "relative", left: "6%", top: "2%", fontSize: "2.2rem", fontWeight: "bold", fontFamily: "'Roboto', cursive"}}>Produtos:</h1>
        <ContainerCheckout>
        <div className="product">
            {cart.map(prods => (
                <section className="prods">
                    <img src={prods.img_url} alt="img_url" />
                    <h2>{prods.title.slice(0,60) + "..."}</h2>
                    <span>R$ {prods.price.toFixed(2)}</span>
                </section>
            ))}
        </div>

        <div className="subTotal">
            <h1>Dados e endereço <span title="Se os dados não carregar, atualize"><AiOutlineReload style={{cursor: "pointer", color: "red", fontWeight: "bold"}}onClick={() => history.go(0)}/></span></h1>
            <hr />
                <h3>Nome: <span className="span-bold">{userName || "Não informado"}</span></h3>
                <h3>Email: <span className="span-bold">{emailUser || "Não informado"}</span></h3>
                <h3>Cep: <span className="span-bold">{cepsUser || "Não informado"}</span></h3>
                 <h3>Logradouro: <span className="span-bold">{logradouroUser || "Não informado"}</span></h3>
                <h3>Bairro: <span className="span-bold">{bairroUser || "Não informado"}</span></h3>
                <h3>Cidade: <span className="span-bold">{localidadeUser || "Não informado"}</span></h3>
                <h3>Estado: <span className="span-bold">{ufUser || "Não informado"}</span></h3> 
                <h3>Nº casa: <span className="span-bold">{isLoading ? <span>Carregando...</span> : user.numberHouse || "Não informado"}</span></h3>
                <h3>Complemento: <span className="span-bold">{user.complement || "Não informado"}</span></h3>
                <hr />
                <div>
                    <button onClick={handleSendDemand}>Enviar pedido</button>
                </div>
        </div>
        </ContainerCheckout>
        </div>
    )
}