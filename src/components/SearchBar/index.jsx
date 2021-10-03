// STYLES
import {InputStyle, 
        SearchBox} from "./styles"

// ICONS
import {BsSearch} from "react-icons/bs"


const SearchBar = () => {
    return(
        <SearchBox>
            <InputStyle
            type="text"
            placeholder="Produtos e Serviços Amazon">
            </InputStyle>
            <div className="click-to-search">
            <BsSearch/>
            </div>
        </SearchBox>
    )
}
export default SearchBar