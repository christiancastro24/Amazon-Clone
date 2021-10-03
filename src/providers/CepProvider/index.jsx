import axios from "axios";
import { useContext, createContext, useState } from "react"

const CepContext = createContext();

export const CepProvider = ({ children }) => {

    const [cepNumber, setCepNumber] = useState("")
    const [ceps, setCeps] = useState({})

    const handleSearchCep = () => {
        axios.get(`https://viacep.com.br/ws/${cepNumber}/json/`)
        .then(res => setCeps(res.data))
        .catch(err => console.log(err))    
    }

    return (
        <CepContext.Provider value={{cepNumber, setCepNumber, ceps, handleSearchCep}}>
            {children}
        </CepContext.Provider>
    )
}

export const useCep = () => useContext(CepContext)