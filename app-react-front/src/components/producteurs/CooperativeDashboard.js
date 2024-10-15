
import React, { useEffect, useState } from 'react';
import AjouterCooperative from "./AjouterCooperative";
import TableData from "../TableData";

// import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const CooperativeDashboard = () => {

    const [acheteurAttribut, setAcheteurAttribut] = useState(["nom", "prenom", "type_acheteur", "numero_cni", "numero_oncc", "contact", "filiale", "coordonnees_geographiques"])
    const [sacAttribut, setSacAttribut] = useState(["code_qr", "quantite", "date_creation", "date_modification", "acheteur"])
    const [producteurAttribut, setProducteurAttribut] = useState(["identifiant_unique", "nom", "prenom", "date_naissance", "lieu_naissance", "genre", "numero_cni", "identifiant_fodecc_cicc", "numero_telephone", "region", "departement", "arrondissement", "village"])
    const [parcelleAttribut, setParcelleAttribut] = useState(["numero_titre_foncier", "statut", "coordonnees_polygonales", "superficie", "nombre_arbres", "age_moyen_arbres", "producteur"])
    const [lotAttribut, setLotAttribut] = useState(["numero_lot", "quantite", "type_commercial", "taux_humidite", "date_recolt", "date_livraison","cooperative", "producteur", "sac", "parcelle"])
    const [cooperativeProducteurAttribut, setCooperativeProducteurAttribut] = useState(["numero_lot", "quantite", "type_commercial", "taux_humidite", "date_recolt", "date_livraison","cooperative", "producteur", "sac", "parcelle"])



    const [champForm, setChampForm] = useState(producteurAttribut)
    const modifChampForm = () =>{
        if (data.menuPath === "lot") {
            setChampForm(lotAttribut);
        } else if (data.menuPath === "sac") {
            setChampForm(sacAttribut);
        } else if (data.menuPath === "parcelle") {
            setChampForm(parcelleAttribut);
        } else if(data.menuPath === "acheteur"){
            setChampForm(acheteurAttribut);
        } else{
            setChampForm(["nom", "identifiant unique", "region", "village", "Action"]   );
        }
    }


    const [attribut, setAttribut] =  useState(["nom", "identifiant unique", "region", "village", "Action"])


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


    return (
        <div className="row main-dashboard-producteur">
            
            <div className=" col-2 lateral-barre">
                <div className="row lt-br-head">
                    <h5 className=" text-center fw-bold">COOPERATIVE</h5>
                </div>
                <div className=" row lt-br-menu">
                    <ul className="">
                        <li className=" text-center">Dashboard</li>
                        <li className="" onClick={()=>{setAttribut(["nom", "identifiant unique", "region", "village", "Action"]); setMenuPath("producteur");}}>Mes Producteurs</li>
                        <li className="" onClick={()=>{setAttribut(["numero titre foncier", "statut", "superficie", "nombre arbres", "Action"]); setMenuPath("parcelle");}}>Mes Parcelles</li>
                        <li className="" onClick={()=>{setAttribut(["numero lot", "quantite", "type commercial", "taux humidite", "Action"]); setMenuPath("lot");}}>Mes Lots</li>
                        <li className="" onClick={()=>{setAttribut(["quantite", "date creation", "date modification", "acheteur", "Action"]); setMenuPath("sac");}}>Mes Sacs</li>
                        <li className="" onClick={()=>{setAttribut(["nom", "contact", "filiale", "type acheteur", "Action"]); setMenuPath("acheteur");}}>Mes Acheteurs</li>
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
                    <div className=""> <span>45</span> <p>Nombre de Lots</p> </div>
                    <div className=""> <span>19</span> <p>Nombre de Sacs</p></div>
                </div>
                <div className="m-bl-body row">
                    
                    <div className=" col-8 ms-4 me-3 p-0 pt-3 m-bl-body-list-data">
                        <TableData item={data} attribut={attribut} menuPath={menuPath} typeOperation="ajouter" />
                        <AjouterCooperative
                            // item={data}
                            champForm={champForm}
                            menuPath={menuPath}
                        />
                    </div>
                    <div className=" col m-bl-body-view-data">

                        <img src={imageUrl} alt="Mon image" style={{ width: 400, height: 500 }} />
                    </div>
                </div>
            </div>
            
        </div>
    )




}

export default CooperativeDashboard;


