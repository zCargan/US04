import Popup from "reactjs-popup";
import Ville from "./Ville";

const PopupInscription = () => (

<Popup trigger={<button className="modifierProfil"> Critère mot de passe</button>} position="center">
            <form className="formulaireProfil">
            <h2>Mon profil :</h2>
            <label>Pseudonyme :</label>
            <input type="text" className="username" />
            <br></br>
            <label>Adresse email : </label>
            <input type="text" className="email" />
            <br />
            <Ville />

        </form>
    </Popup>
)

export default PopupProfil;


                        