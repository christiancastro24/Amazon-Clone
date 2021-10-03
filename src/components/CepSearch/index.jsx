import { useCep } from "../../providers/CepProvider"
import { ContainerParent, ContainerSearch } from "./styles";
import { useAuthentication } from "../../providers/Authentication"
import { api } from "../../services"
import { toast } from "react-hot-toast"

import { useHistory } from "react-router"

export const CepSearch = () => {

    const history = useHistory();
    const { cepNumber, setCepNumber, ceps, handleSearchCep } = useCep();
    const { userId, token, userName, authenticated, numberHouse, complement, setNumber, setComplement } = useAuthentication();


    const handleAddAddress = () => {

        api.patch(`/users/${userId}/`, {...ceps, numberHouse, complement}, {
            headers: { Authorization: `Bearer ${token}`}
        })
        .then(res => {
            toast.success("Dados alterados!", {
                style: {
                    backgroundColor: "#007600",
                    color: "#fff",
                },
            });
            history.push("/Checkout")
        })
        .catch(_ => {
            if(!authenticated) {
                toast.error("Erro ao alterar os dados, parece que você não está logado!", {
                    style: {
                        backgroundColor: "#f34f74",
                        color: "#fff",
                    },
                });
                localStorage.clear();
                history.push("/register")
            }
        })        
    }

    return (
        <ContainerParent>
        <div className="info-address">
            <h2>Nome: {userName}</h2>
            <h2>Cep: {ceps.cep}</h2>
            <h2>Logradouro: {ceps.logradouro}</h2>
            <h2>Bairro: {ceps.bairro}</h2>
            <h2>Cidade: {ceps.localidade}</h2>
            <h2>Estado:{ceps.uf}</h2>
            <h2>Nº Casa: {numberHouse}</h2>
            <h2>Complemento: {complement}</h2>
        </div>
        <ContainerSearch>
            <div className="container-search">
                <input maxLength="8" placeholder="Procure seu cep" onChange={evt => setCepNumber(evt.target.value)} /> 
               <button disabled={!cepNumber} onClick={() => handleSearchCep(cepNumber)}>Procurar</button>
            </div>

        <div className="address">
            <label>Cep: </label>
            <input type="text" value={ceps.cep} />

            <label>Lograduro:</label>
            <input type="text" placeholder={ceps.logradouro === "" ? "Logradouro não encontrado" : ceps.logradouro} value={ceps.logradouro} />

            <label>Bairro:</label>
            <input type="text" placeholder={ceps.bairro === "" ? "Bairro não encontrado" : ceps.bairro} value={ceps.bairro} />

            <label>Localidade:</label>
            <input type="text" value={ceps.localidade} />

            <label>Estado:</label>
            <input type="text" value={ceps.uf} />

            <div style={{display: "flex"}}>

            <input type="text" value={numberHouse} style={{width: "49%"}} placeholder="Nº Casa:" onChange={evt => setNumber(evt.target.value)}/>

            <input type="text" value={complement} style={{width: "49%"}} placeholder="Complemento" onChange={evt => setComplement(evt.target.value)} />
            </div>
        </div>

        <div className="btn-center">
        { numberHouse === "" && complement === ""  ?
        <button className="btn-use" onClick={handleAddAddress} style={{border: "1px solid gray", backgroundColor: "lightgray", cursor: "not-allowed"}} disabled={true}>Usar endereço</button>
        :
        <button className="btn-use" onClick={handleAddAddress} disabled={false}>Usar endereço</button>
        }
        {" "}
            <button onClick={() => history.push("/Checkout")} style={{marginLeft: "1rem", width: "15rem", backgroundColor: "#f34f74", color: "#fff", fontWeight: "bold"}} className="btn-use">Já tenho endereço salvo</button>
        </div>
        

        </ContainerSearch>
        </ContainerParent>

        
    )
}