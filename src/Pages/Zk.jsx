import Header from "../Composant/Navbar";
import Slide from "../Composant/Slide";
import Car1 from "../Composant/Card1";
import Pied from "../Composant/Flooter";


function Accueil(){
    return (

        <div className="tout">
            <Header/>
            

            <div className="disposition">

            <h3  className="zone">Zone Rd-Congo/Kinshasa</h3>



            </div>
                
               <div className="pied">
                <Pied/>
              </div> 
            
        </div>
        
    )
} export default Accueil