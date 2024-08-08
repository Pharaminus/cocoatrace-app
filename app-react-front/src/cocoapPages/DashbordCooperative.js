// import React from 'react';
import BarreLateralle from './BarreLateralle';
import BarreMenuRecherche from './BarreMenuRecherche';
import BarreScore from './BarreScore';
import ListData from './ListData';
import RigthLateraleData from './RigthLateraleData';



import React, { useState, createContext } from 'react';

const DashboardCooperative = () => {

    const [dataItem, setDataItem] = useState([ ]);
    const [attribut, setAttribut] = useState("");
    const [menuPath, setMenuPath] = useState("");

    
    return (
        
        <>
            
            <BarreLateralle  setAttribut={setAttribut} setMenuPath={setMenuPath} />

            <section class="home_section">

                <BarreMenuRecherche/>
                <BarreScore/>
                <div class="details">
                    <ListData  attribut={attribut} setDataItem={setDataItem} menuPath={menuPath} />
                    <RigthLateraleData dataItem={dataItem} menuPath={menuPath}/>
                </div>
            </section>
        </>
    );

    
    let sidebar = document.querySelector(".sidebar");
    let closeBtn = document.querySelector("#btn");

    closeBtn.addEventListener("click", () => {
        sidebar.classList.toggle("open");
        // call function
        changeBtn();
    });

    function changeBtn() {
        if (sidebar.classList.contains("open")) {
            closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
        } else {
            closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
        }
    }
}
export default DashboardCooperative;