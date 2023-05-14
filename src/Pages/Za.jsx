import Header from "../Composant/Navbar";
import Slide from "../Composant/Slide";
import Car1 from "../Composant/Card1";
import Pied from "../Composant/Flooter";


function Za(){
    return (

        <div className="tout">
            <Header/>
            

            <div className="disposition">


<div className="zafrik">

<div>
       <Car1 img="past shekinah.png" Nom='Pasteur Shekinah OKAMO' Marcello TUNASI desc='sdfghertydfgh' titre='Compassion/Brazaville'/>
     </div>

     <div>
       <Car1 img="past peter.png" Nom='Pasteur Peter NDUDI' Marcello TUNASI desc='sdfghertydfgh' titre='Compassion/Pointe-Noire'/>
     </div>

     <div>
       <Car1 img="past togo.png" Nom='Pasteur Jurdain' Marcello TUNASI desc='sdfghertydfgh' titre='Compassion/TOGO'/>
     </div>

     <div>
       <Car1 img="past dev.png" Nom='Pasteur Dave NGELEGWA' Marcello TUNASI desc='sdfghertydfgh' titre='Compassion/ABIDJAN'/>
     </div>

     <div>
       <Car1 img="past anthonio.png" Nom='Pasteur Anthonio LUMEKU' Marcello TUNASI desc='sdfghertydfgh' titre='Compassion/RSA'/>
     </div>

     <div>
       <Car1 img="past marco.png" Nom='Pasteur Marco MAKOSA' Marcello TUNASI desc='sdfghertydfgh' titre='Compassion/DOUALA'/>
     </div>

     <div>
       <Car1 img="past lome.png" Nom='Pasteur Josué KAYINDA' Marcello TUNASI desc='sdfghertydfgh' titre='Compassion/YAOUNDE'/>
     </div>
     <div>
       <Car1 img="" Nom='Pasteur Lilianne' Marcello TUNASI desc='sdfghertydfgh' titre='Compassion/LUANDA'/>
     </div>


</div>


            </div>
                
               <div className="pied">
                <Pied/>
              </div> 
            
        </div>
        
    )
} export default Za