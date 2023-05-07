import Header from "../Composant/Navbar";
import Slide from "../Composant/Slide";
import Car1 from "../Composant/Card1";
import Pied from "../Composant/Flooter";
import Form1 from "../Composant/Forme1";
import Form2 from "../Composant/Forme2";


function Home(){
    return (

        <div className="tout">
            <Header/>
            <Slide/>
            <Form1/>
            <Form2/>
            

            
                
               <div className="pied">
                <Pied/>
              </div> 
            
        </div>
        
    )
} export default Home