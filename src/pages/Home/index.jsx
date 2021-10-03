// COMPONENTES
import { CardProducts } from "../../components/CardProducts"
import { CardRecommendation } from "../../components/CardRecommendation"
import { CarouselBanner } from "../../components/Carousel"
import { Footer } from "../../components/Footer"
import MenuNav from "../../components/Menu"
import { useEffect } from "react"

const Home = () => {

    useEffect(() => {
        setInterval(() => localStorage.clear(), 3600000)
    }, [])

    return(
        <div>
            <MenuNav/>
            <CarouselBanner />
            <CardProducts />
            <CardRecommendation />
            <div style={{position: "absolute", top: "58rem"}}>
                <Footer />
            </div>
        </div>

    )
}
export default Home