
import ModifierCooperative from "../components/producteurs/ModifierCooperative";
import React, { useState, createContext } from 'react';


const RigthLateraleData = ({champForm, menuPath, dataItem }) => {
    
    

    return(
        <div class="recent_customers">
            <div class="card_header text-center row">
                <h2>Gerer {menuPath}</h2>
            </div>
            <div className=" row align-item-center">
                
                <img className=" img-circle ms-5 ps-5" style={{ width:300, height:200, }}
                 src={`${menuPath == "pppppppp "/media/icon/2847404.svg"}`} />
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