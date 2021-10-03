import beats from "../../assets/beatsbg.png"
import fone from "../../assets/fone-2.png"
import foneUnicornio from "../../assets/fone-unicornio.png"
import fone3 from "../../assets/fone3.png"
import sports from "../../assets/sports.png"
import bolsa from "../../assets/bolsa.png"
import ipad from "../../assets/gears1.png"
import { useHistory } from "react-router"

import { CartParent } from "./styles"

export const CardRecommendation = () => {

    const history = useHistory();
    return (
        <CartParent>
           <div className="card-recommendation">
               <h4>Recomendações para você</h4>
                <img src={beats} alt="fone-beats" />
                <img src={fone} alt="" className="fone-left"/>
                <img src={foneUnicornio} alt="" />
                <img src={fone3} alt="" className="fone-left-not-much"  />
                <p>See more &gt;</p>
           </div>

           <div className="card-recommendation sports">
               <h4>Seção Esportes</h4>
                <img src={sports} alt="bolsa" />
                <p onClick={() => history.push('/filteredCatD')}>See more &gt; </p>
           </div>

           <div className="card-recommendation sports">
               <h4>Recém vistos</h4>
                <img src={bolsa} alt="bolsa" className="bolsa"/>
                <p>See more &gt; </p>
           </div>

           <div className="card-recommendation sports">
               <h4>Laptops e tablets</h4>
                <img src={ipad} alt="bolsa" className="ipad" />
                <p>See more &gt;</p>
           </div>
 
        </CartParent>
    )
}