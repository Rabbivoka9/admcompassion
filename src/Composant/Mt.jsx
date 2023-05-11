import Header from "../Composant/Navbar";
import Slide from "../Composant/Slide";
import Car1 from "../Composant/Card1";
import Pied from "../Composant/Flooter";


function Mt(){
    return (

        <div className="form3">
            <div className="cont-mission">
                <div className="mission1">
                    <h2 className="visio1" >Organigramme</h2>
                     <div className="organisation">
                           
                     <div >
                    <Car1 img="MT.jpeg" Nom='Couple Marcello & Blanche TUNASI' effectif='1200 Membres' situation='En déménagement sur le numero 9 en attendant la finition du temple au numéro 4.'  adresse='Limite n°4, Q.Industriel, C/Limite' contact='+243817080007' titre='Representant Legal et Visionnaire'/>
                    </div>
                    <div >
                    <Car1 img="past yves.png" Nom='Past Guylain NZITA' effectif='500 Membres'  situation='En déménagement sur le numero 9 en attendant la finition du temple au numéro 4.'  adresse='n°17 av.Kilombwe lemba-termunis, C/Lemba' contact='+243823251356'   titre='Coordonnateur'/>
                    </div>
                    <div className="admina">
                        <div>
                            <Car1 img="past gedeon.png" Nom='Past Gedeon MULUMBA'  effectif='500 Membres'  situation='En déménagement sur le numero 9 en attendant la finition du temple au numéro 4.'  adresse='n°17.Du 30 juin coin Djamena, Q.Makutano' contact='+243815689586' titre='Compassion/LUSHI'/>
                        </div> 
                        <div>
                            <Car1 img="past Bishop.png" Nom='Past Bishop MUKULUMPA'  effectif='700 Membres'  situation='En déménagement sur le numero 9 en attendant la finition du temple au numéro 4.'  adresse='n°3 av.Kaniki,Arrêt Snel Route Matadi' contact='+243891802900'  titre='Compassion/M MOBUTU'/>
                        </div>  

                    </div>

                    <div className="admpro">
                        <div>
                            <Car1 img="past marco.png" Nom='Pasteur Marco MAKOSA' Marcello TUNASI desc='sdfghertydfgh' titre='Compassion/DOUALA'/>
                        </div> 
                        <div>
                            <Car1 img="past max.png" Nom='Pasteur Max RENAUX' Marcello TUNASI desc='sdfghertydfgh' titre='Compassion/Luxemb'/>
                        </div>
                        <div>
                            <Car1 img="past gedeon.png" Nom='Past Gedeon MULUMBA'  effectif='500 Membres'  situation='En déménagement sur le numero 9 en attendant la finition du temple au numéro 4.'  adresse='n°17.Du 30 juin coin Djamena, Q.Makutano' contact='+243815689586' titre='Compassion/LUSHI'/>
                        </div> 
                        <div>
                            <Car1 img="past Mala.png" Nom='Couple Mala & Crista YEMWENI' effectif='500 Membres'  situation='En déménagement sur le numero 9 en attendant la finition du temple au numéro 4.'  adresse='n°17 av.mandina Arrêt PMU, C/Matete' contact='+243824221050'  titre='Compassion/MATETE'/>
                        </div>


                    </div>
                    </div>
                </div>
                

                
               
            </div>
            

        </div>

        
        
    )
} export default Mt