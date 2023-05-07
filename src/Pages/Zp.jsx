import Header from "../Composant/Navbar";
import Slide from "../Composant/Slide";
import Car1 from "../Composant/Card1";
import Pied from "../Composant/Flooter";


function Zp(){
    return (

        <div className="tout">
            <Header/>
            

            <div className="disposition">

        
        <div className="zpro">

        <div>
                <Car1 img="past tresor.png" Nom='Pasteur Tresor ' Marcello TUNASI desc='sdfghertydfgh' titre='Compassion/BUNIA'/>
              </div>

              <div>
                <Car1 img="past shadrack.png" Nom='Pasteur Shadrack' Marcello TUNASI desc='sdfghertydfgh' titre='Compassion/KWILU-NGONGO'/>
              </div>

              <div>
                <Car1 img="past fidele.png" Nom='Pasteur Fidele' Marcello TUNASI desc='sdfghertydfgh' titre='Compassion/MATADI'/>
              </div>

              <div>
                <Car1 img="past gedeon.png" Nom='Pasteur Gedeon MULUMBA' Marcello TUNASI desc='sdfghertydfgh' titre='Compassion/LUSHI'/>
              </div>

              <div>
                <Car1 img="past sagesse.png" Nom='Pasteur Sagesse' Marcello TUNASI desc='sdfghertydfgh' titre='Compassion/KISANGANI'/>
              </div>

              <div>
                <Car1 img="past mikah.png" Nom='Pasteur Mikah' Marcello TUNASI desc='sdfghertydfgh' titre='Compassion/KIKWIT'/>
              </div>

              <div>
                <Car1 img="past herve.png" Nom='Pasteur Herve' Marcello TUNASI desc='sdfghertydfgh' titre='Compassion/MWANDA'/>
              </div>

              <div>
                <Car1 img="past emma.png" Nom='Pasteur Emmanuel LIKITELE' Marcello TUNASI desc='sdfghertydfgh' titre='Compassion/HK-GOLF'/>
              </div>

              <div>
                <Car1 img="past jephete.png" Nom='Pasteur Jepheté BELEKE' Marcello TUNASI desc='sdfghertydfgh' titre='Compassion/BAND'/>
              </div>

              <div>
                <Car1 img="past roger.png" Nom='Pasteur Roger' Marcello TUNASI desc='sdfghertydfgh' titre='Compassion/MALEBO'/>
              </div>

        </div>



            </div>
                
               <div className="pied">
                <Pied/>
              </div> 
            
        </div>
        
    )
} export default Zp