import { createContext, useContext, useEffect, useState } from "react"
import { api } from "../../services";

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {

    const [token] = useState(JSON.parse(localStorage.getItem("@token/auth")) || "")
    const userId = JSON.parse(localStorage.getItem("@token/userId"));
    const [authenticated, setAuthenticated] = useState(false)
    const [userName, setUserName] = useState("");
    const [user, setUser] = useState({})
    const [emailUser, setEmail] = useState("");
    const [cepsUser, setCep] = useState("");
    const [logradouroUser, setLogradouro] = useState("");
    const [bairroUser, setBairro] = useState("");
    const [localidadeUser, setLocalidade] = useState("");
    const [ufUser, setUf] = useState("");
    const [numberHouse, setNumber] = useState("");
    const [complement, setComplement] = useState("");

    useEffect(() => {

        if(token) {
            setAuthenticated(true)
            
            api.get(`/users/${userId}/`)
            .then((res) => {
                setUserName(res.data.username);
                setEmail(res.data.email);
                setCep(res.data.cep)
                setLogradouro(res.data.logradouro)
                setBairro(res.data.bairro)
                setLocalidade(res.data.localidade)
                setUf(res.data.uf)
                setNumber(res.data.numeroCasa)
                setComplement(res.data.complemento)
            })
            .catch((err) => console.log(err));              
        }

    }, [authenticated, token])

    return (
        <AuthenticationContext.Provider value={{authenticated, setAuthenticated, userId, userName, emailUser, cepsUser, logradouroUser, bairroUser, localidadeUser, ufUser, numberHouse, complement, setNumber, setComplement, user, setUser}}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export const useAuthentication = () => useContext(AuthenticationContext)