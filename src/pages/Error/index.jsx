import MenuNav from "../../components/Menu"
import img404 from "../../assets/page404.png"
import dog404 from "../../assets/dog404.jpg"  
import { Container404 } from "./styles"

export const PageNotFound = () => {
    return (
        <>
            <MenuNav />

         <Container404>
            <div>
                <img src={img404} alt="página não encontrada" />
            </div>

            <div>
                <img src={dog404} alt="página não encontrada" />
            </div>
         </Container404>
        </>
    )
}