
import React, { useEffect, useState, useRef } from 'react';
import AjouterCooperative from "./AjouterCooperative";
import TableData from "../TableData";
import L, { Icon } from 'leaflet';
import { parseWkt } from 'wkt';


// import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const CooperativeDashboard = () => {

    const [acheteurAttribut, setAcheteurAttribut] = useState([["nom", "text"], ["prenom", "text"], ["type_acheteur", "text"], ["numero_cni", "text"], ["numero_oncc", "text"], ["contact", "text"], ["filiale", "text"], ["coordonnees_geographiques", "text"]])
    const [sacAttribut, setSacAttribut] = useState([["code_qr", "text"], ["quantite", "number"], ["date_creation", "date"], ["date_modification", "date"], ["acheteur", "number"]])
    const [producteurAttribut, setProducteurAttribut] = useState([["id_producteur", "text"], ["nom", "text"], ["prenom", "text"], ["date_naissance", "date"], ["lieu_naissance", "text"], ["genre", "text"], ["numero_cni", "text"], ["identifiant_fodecc_cicc", "text"], ["numero_telephone", "text"], ["tel_second", "text"], ["an_enreg", "text"], ["residence", "text"], ["autre_cooperative", "text"], ["cooperative", "text"]])
    const [parcelleAttribut, setParcelleAttribut] = useState([["numero_titre_foncier", "text"], ["statut", "text"], ["id_parcelle", "text"], ["superficie", "num"], ["nombre_arbres", "num"], ["age_moyen_arbres", "num"], ["producteur", "num"], ["geometrie", "text"], ["type_culture", "num"], ["an_creation", "num"], ["arrondisement", "text"], ["departement", "text"], ["description", "text"], ["longueur", "num"], ["region", "text"], ["village", "text"], ["voie_eau", "text"], ["url", "text"], ["url_carte", "text"]])
    const [lotAttribut, setLotAttribut] = useState([["numero_lot", "text"], ["quantite", "number"], ["type_commercial", "text"], ["taux_humidite", "number"], ["date_recolt", "date"], ["date_livraison", "date"],["cooperative", "number"], ["producteur", "num"], ["sac", "number"], ["parcelle", "number"]])
    
    const [cooperativeProducteurAttribut, setCooperativeProducteurAttribut] = useState([["date_arriver_producteur", "number"], ["cooperative", "number"], ["producteur", "number"], ["idcoop", "text"]])



    const [champForm, setChampForm] = useState(producteurAttribut)
    const modifChampForm = () =>{
        if (menuPath == "lot") {
            setChampForm(lotAttribut);
        } else if (menuPath == "sac") {
            setChampForm(sacAttribut);
        } else if (menuPath == "parcelle") {
            setChampForm(parcelleAttribut);
        } else if(menuPath == "acheteur"){
            setChampForm(acheteurAttribut);
        } else{
            setChampForm(producteurAttribut);
        }
    }


    const [attribut, setAttribut] =  useState(["nom", "id_producteur", "identifiant_fodecc_cicc", "genre", "Action"])


    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState({ item: '' });

    const handleShow = (data) => {
        setModalData(data);
        setShow(true);
    };


    const [loading1, setLoading1] = useState(false);
    const [error1, setError1] = useState(null);
    const [message, setMessage] = useState('');

    const deleteData = async (url) => {
        setLoading1(true);
        setError1(null);

        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la suppression des données');
            }

            const result = await response.json();
            setMessage(result.message || 'Suppression réussie');

        } catch (err) {
            setError1(err.message);
        } finally {
            setLoading(false);
        }
        window.location.reload();

    };


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [menuPath, setMenuPath] = useState("producteur");
    useEffect(() => {
        // Remplace l'URL par celle de ton API Django
        fetch('http://localhost:8000/cocoa/'+ menuPath +'/list/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données');
                }
                return response.json();
            })
            .then(data => {
                
                setData(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, [menuPath]);


    if (loading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>Erreur : {error.message}</div>;
    }

    const imageUrl = 'https://cacaotrace.s3.eu-north-1.amazonaws.com/CARTES/ADJU165ZU_1.png';



    const handleSubmit = (data) => {
        console.log('Données reçues du serveur :', data);
      };

    return (
        <div className="row main-dashboard-producteur">
            
            <div className=" col-2 lateral-barre">
                <div className="row lt-br-head">
                    <h5 className=" text-center fw-bold">COOPERATIVE</h5>
                </div>
                <div className=" row lt-br-menu">
                    <ul className="">
                        <li className=" text-center">Dashboard</li>
                        <li className="" onClick={()=>{setAttribut(["nom", "id_producteur", "telephone", "residence", "Action"]); setMenuPath("producteur");}}> <img src="/media/icon/2267620.svg"  style={{ width: 30, height: 30 }} /> <span >Mes Producteurs</span>  </li>
                        <li className="" onClick={()=>{setAttribut(["id_parcelle", "statut", "superficie", "producteur_id", "Action"]); setMenuPath("parcelle");}}> <img src="/media/icon/303713.svg" style={{ width: 30, height: 30 }} />  <span >Mes Parcelles</span></li>
                        <li className="" onClick={()=>{setAttribut(["numero lot", "quantite", "type commercial", "taux humidite", "Action"]); setMenuPath("lot");}}><img src="/media/icon/42900.svg" style={{ width: 30, height: 30 }} /> <span>Mes Lots</span></li>
                        <li className="" onClick={()=>{setAttribut(["quantite", "date creation", "date modification", "acheteur", "Action"]); setMenuPath("sac");}}><img src="/media/icon/309849.svg" style={{ width: 30, height: 30 }} /> <span>Mes Sacs</span></li>
                        <li className="" onClick={()=>{setAttribut(["nom", "contact", "filiale", "type acheteur", "Action"]); setMenuPath("acheteur");}}><img src="/media/icon/2847404.svg" style={{ width: 30, height: 30 }} /> <span>Mes Acheteurs</span> </li>
                        <li className="lt-br-login">logout</li>
                    </ul>
                </div>
            </div>
            <div className="main-block col">
                <div className="m-bl-head row">
                    <div className="col-11 d-flex align-items-center justify-content-center p-0"> <input className=" h-75 w-25" placeholder="search..." type="search" /> </div>
                    <div className="col "><img className="photo-user" src="" /> </div>
                </div>
                <div className="m-bl-score row">
                    <div className="menuTitle">
                        
                        <p>{menuPath}</p>
                        <div className="row w-100 h-25">
                            <button class="btn-warning btn " data-bs-toggle="modal" data-bs-target="#staticBackdrop2" onClick={() => handleShow(modifChampForm())}>Ajouter un {menuPath}</button>
                        </div>
                    </div>
                    <div className=""> <span>23</span> <p>Nombre de Parcelles</p>  </div>
                    <div className=""> <span>0</span> <p>Nombre de Lots</p> </div>
                    <div className=""> <span>0</span> <p>Nombre de Sacs</p></div>
                </div>
                <div className="m-bl-body row">
                    
                    <div className=" col-8 ms-4 me-3 p-0 pt-3 m-bl-body-list-data">
                        <TableData item={data} attribut={attribut} menuPath={menuPath} typeOperation="ajouter" />
                        <AjouterCooperative
                            // item={data}
                            champForm={champForm}
                            menuPath={menuPath}
                            onSubmit={handleSubmit}
                        />
                    </div>
                    <div className=" col m-bl-body-view-data">
                        <div className="row h-25 justify-content-center">
                            {/* <img className=" img-circle m-2" style={{ width:200, height:100, }} src="/media/Animation - 1729041652886.gif" /> */}

                        </div>
                        <div className="row h-75 "></div>

                    </div>
                </div>
            </div>
            
        </div>
    )




}

export default CooperativeDashboard;


