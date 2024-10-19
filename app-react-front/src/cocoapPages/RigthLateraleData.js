
// import ModifierCooperative from "../components/producteurs/ModifierCooperative";
import React, { useState, createContext } from 'react';


const RigthLateraleData = ({champForm, menuPath, dataItem }) => {
    
    const [imagePath, setImagePath] = useState("/media/icon/2267620.svg");

    const changeImagePath = (menuPath) =>{
        if(menuPath == "producteur"){
            return "/media/icon/2267620.svg";
        }
        else if(menuPath == "parcelle"){
            return "/media/icon/3219616.svg";
    
        }
        else if(menuPath == "sac"){
            return "/media/icon/309849.svg";
    
        }
        else if(menuPath == "lot"){
            return "/media/icon/42900.svg";
    
        }
        else{
            return "/media/icon/2847404.svg";
    
        }
    }
    

    return(
        <div class="recent_customers">
            <div class="card_header text-center row">
                <h2>Gerer {menuPath}</h2>
            </div>
            <div className=" row align-item-center">
                
                <img className=" img-circle ms-5 ps-5" style={{ width:300, height:200, }}
                 src={changeImagePath(menuPath)} />
            </div>
            <div className="row">
                <div className="col-6"> <button className="btn btn-warning w-100">Detail</button> </div>
                <div className="col-6"> <button className="btn btn-warning w-100">Ajouter</button> </div>
                {/* <div className="col-3"></div> */}
            </div>
        </div>
    );
}

export default RigthLateraleData;