import React, { useEffect, useState, useRef } from 'react';


    const BarreLateralle = ({setAttribut, setMenuPath}) => {

    

    


    return(
        <div class="sidebar">
              
                <div class="logo_details">
                    <i class='bx bx-store-alt'></i>
                    <div class="logo_name">
                        coopérative
                    </div>
                </div>
                <ul>
                    <li >
                        <a href="#" class="active">
                            <i class='bx bx-chalkboard'></i>
                            <span class="links_name">
                                Dashboard
                            </span>
                        </a>
                    </li>
                    <li onClick={()=>{setAttribut(["nom", "id producteur", "telephone", "residence", "Action"]); setMenuPath("producteur");}}>
                        <a href="#">
                            <i class='bx bx-user'></i>
                            <span class="links_name">
                                Producteurs
                            </span>
                        </a>
                    </li>
                    <li className="" onClick={()=>{setAttribut(["id_parcelle", "statut", "superficie", "producteur_id", "Action"]); setMenuPath("parcelle");}}>
                        <a href="#">
                            <i class='bx bxs-leaf'></i>
                            <span class="links_name">
                                Parcelles
                            </span>
                        </a>
                    </li>
                    <li onClick={()=>{setAttribut(["quantite", "date creation", "date modification", "acheteur", "Action"]); setMenuPath("sac");}}>
                        <a href="#">
                            <i class='bx bx-package' ></i>
                            <span class="links_name">
                                Sacs
                            </span>
                        </a>
                    </li>
                    <li onClick={()=>{setAttribut(["numero lot", "quantite", "type commercial", "taux humidite", "Action"]); setMenuPath("lot");}}>
                        <a href="#">
                            <i class='bx bxs-bowl-rice'></i>
                            <span class="links_name">
                                Lots
                            </span>
                        </a>
                    </li>
                    <li onClick={()=>{setAttribut(["nom", "contact", "filiale", "type acheteur", "Action"]); setMenuPath("acheteur");}}>
                        <a href="#">
                            <i class='bx bxs-cart-add'></i>
                            <span class="links_name">
                                Acheteurs
                            </span>
                        </a>
                    </li>
                    <li class="login">
                        <a href="#">
                            <span class="links_name login_out">
                                Login Out
                            </span>
                            <i class='bx bx-log-out' id="log_out"></i>
                        </a>
                    </li>
                </ul>
            </div>
    );

    
}

export default BarreLateralle;