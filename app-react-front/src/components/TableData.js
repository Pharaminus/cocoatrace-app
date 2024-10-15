import { useState } from "react";
import ModifierCooperative from "../components/producteurs/ModifierCooperative";


const TableData = (data) => {

    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState({ item: '' });

    const handleClose = () => setShow(false);
    const handleShow = (data) => {
        setModalData(data);
        setShow(true);
    };


    const [loading1, setLoading1] = useState(false);
    const [error1, setError1] = useState(null);
    const [message, setMessage] = useState('');


    // const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


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
        } else {
            setChampForm(producteurAttribut);
        }
    }

    const displayedItem = (item) => {
        if (data.menuPath === "lot") {
            return [item.numero_lot, item.quantite, item.type_commercial, item.taux_humidite];
        } else if (data.menuPath === "sac") {
            return [item.quantite, item.date_creation, item.date_modification, item.acheteur];
        } else if (data.menuPath === "parcelle") {
            return [item.numero_titre_foncier, item.statut, item.superficie, item.nombre_arbres];
        } else if(data.menuPath === "acheteur"){
            return [item.nom, item.contact, item.filiale, item.type_acheteur]
        } else {
            return [item.nom, item.identifiant_unique, item.region, item.village];
        }
    };

    const [typeOperation, setTypeOperation] = useState(data.typeOperation)

    return (
        <>
            <table class=" table text-black text-center justify-content-center m-0" id="tab-data">
                {/* <table class="table table-striped text-black text-center justify-content-center" id="tab-data"> */}
                <thead className=' fs-5'>
                    <th>{data.attribut[0]}</th>
                    <th>{data.attribut[1]}</th>
                    <th>{data.attribut[2]}</th>
                    <th>{data.attribut[3]}</th>
                    <th>Action</th>
                </thead>
                <tbody className="table-scroll">
                    {/* <tr> */}
                    {data.item.map( item => (

                        
                        <tr key={item.id}>
                            <td>{displayedItem(item)[0]}</td>
                            <td>{displayedItem(item)[1]}</td>
                            <td>{displayedItem(item)[2]}</td>
                            <td>{displayedItem(item)[3]}</td>
                            <td>
                                <ModifierCooperative
                                    item={modalData.item}
                                    champForm={champForm}
                                    menuPath={data.menuPath}
                                />

                                
                                <button class="btn-warning me-1 bouton-op btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => handleShow({ item:item }, modifChampForm())}>Modifier</button>
                                <button class="bouton-op btn btn-danger ms-1" onClick={() => deleteData("http://127.0.0.1:8000/cocoa/producteur/" + item.id + "/delete/")} >Supprimer</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    );


}

export default TableData;
