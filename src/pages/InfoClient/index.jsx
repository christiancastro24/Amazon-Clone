import { useHistory } from "react-router"
import iconeBox from "../../assets/icone1.png"
import iconeKey from "../../assets/icone2.png"
import iconePrime from "../../assets/icone3.png"
import iconeAddress from "../../assets/icone4.png"
import iconePayment from "../../assets/icone5.png"
import iconePresent from "../../assets/icone6.png"
import iconeTicket from "../../assets/icone7.png"
import MenuNav from "../../components/Menu"
import { ContainerAllInfo, ContainerItems } from "./styles"


export const InfoClient = () => {

    const history = useHistory();

    const notAllowed = {cursor: "not-allowed"}
    return (
        <ContainerAllInfo>
            <MenuNav />
                <h1>Sua conta</h1>
            <ContainerItems>

                <div className="container-box" style={notAllowed} title="Em manuntenção">
                    <img src={iconeBox} alt="icone-pedidos" />
                    <div className="info-section-prods">
                        <h5>Seus pedidos</h5>
                        <p>Rastrear, devolver ou comprar<br /> produtos novamente</p>
                    </div>
                </div>

                <div className="container-box">
                    <img src={iconeKey} alt="icone-trocar-senha" />
                    <div className="info-section-prods">
                        <h5>Acesso e segurança</h5>
                        <p>Alterar o usuário ou senha</p>
                    </div>
                </div>

                <div className="container-box" style={notAllowed} title="Em manuntenção">
                    <img src={iconePrime} alt="icone-amazon-prime" className="img-prime" />
                    <div className="info-section-prods">
                        <h5>Amazon Prime</h5>
                        <p>Exibir configurações de<br/> pagamento e benefícios</p>
                    </div>
                </div>

                <div className="container-box" onClick={() => history.push("/cepClient")}>
                    <img src={iconeAddress} alt="icone-endereço" />
                    <div className="info-section-prods">
                        <h5>Endereços</h5>
                        <p>Alterar endereços para pedidos<br/> e presentes</p>
                    </div>
                </div>

                <div className="container-box" style={notAllowed} title="Em manuntenção">
                    <img src={iconePayment} alt="icone-pagamentos" />
                    <div className="info-section-prods">
                        <h5>Seus pagamentos</h5>
                        <p>Rastrear, devolver ou comprar<br /> produtos novamente</p>
                    </div>
                </div>

                <div className="container-box" style={notAllowed} title="Em manuntenção">
                    <img src={iconePresent} alt="icone-presente" />
                    <div className="info-section-prods">
                        <h5>Vales-presente</h5>
                        <p>Ver saldo ou resgatar um <br />vale-presente</p>
                    </div>
                </div>

                <div className="container-box" style={notAllowed} title="Em manuntenção">
                    <img src={iconeTicket} alt="icone-pagamentos" className="img-boleto" />
                    <div className="info-section-prods">
                        <h5>Reembolsos Boleto</h5>
                        <p>Ver saldo ou resgatar<br /> reembolsos de Boleto</p>
                    </div>
                </div>
            </ContainerItems>
        </ContainerAllInfo>
    )
}