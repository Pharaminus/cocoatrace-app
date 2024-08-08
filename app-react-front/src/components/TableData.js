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

    const [acheteurAttribut, setAcheteurAttribut] = useState([["nom", "str"], ["prenom", "str"], ["type_acheteur", "str"], ["numero_cni", "str"], ["numero_oncc", "str"], ["contact", "str"], ["filiale", "str"], ["coordonnees_geographiques", "str"]])
    const [sacAttribut, setSacAttribut] = useState([["code_qr", "str"], ["quantite", "num"], ["date_creation", "date"], ["date_modification", "date"], ["acheteur", "num"]])
    const [producteurAttribut, setProducteurAttribut] = useState([["id_producteur", "str"], ["nom", "str"], ["prenom", "str"], ["date_naissance", "date"], ["lieu_naissance", "str"], ["genre", "str"], ["numero_cni", "str"], ["identifiant_fodecc_cicc", "str"], ["numero_telephone", "str"], ["tel_second", "str"], ["an_enreg", "str"], ["residence", "str"], ["autre_cooperative", "str"], ["cooperative", "str"]])
    const [parcelleAttribut, setParcelleAttribut] = useState([["numero_titre_foncier", "str"], ["statut", "str"], ["id_parcelle", "str"], ["superficie", "num"], ["nombre_arbres", "num"], ["age_moyen_arbres", "num"], ["producteur", "num"], ["geometrie", "str"], ["type_culture", "num"], ["an_creation", "num"], ["arrondisement", "str"], ["departement", "str"], ["description", "str"], ["longueur", "num"], ["region", "str"], ["village", "str"], ["voie_eau", "str"], ["url", "str"], ["url_carte", "str"]])
    const [lotAttribut, setLotAttribut] = useState([["numero_lot", "str"], ["quantite", "num"], ["type_commercial", "str"], ["taux_humidite", "num"], ["date_recolt", "date"], ["date_livraison", "date"],["cooperative", "num"], ["producteur", "num"], ["sac", "num"], ["parcelle", "num"]])
    const [cooperativeProducteurAttribut, setCooperativeProducteurAttribut] = useState([["date_arriver_producteur", "num"], ["cooperative", "num"], ["producteur", "num"]])



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
            return [item.id_parcelle, item.statut, item.superficie, item.nombre_arbres];
        } else if(data.menuPath === "acheteur"){
            return [item.nom, item.contact, item.filiale, item.type_acheteur]
        } else {
            return [item.nom, item.id_producteur, item.numero_telephone, item.residence];
        }
    };

    const [typeOperation, setTypeOperation] = useState(data.typeOperation)

    return (
        <>
            <table class=" table table-striped  text-black text-center justify-content-center m-0" id="tab-data">
                {/* <table class="table table-striped text-black text-center justify-content-center" id="tab-data"> */}
                <thead className=' '>
                    <th>{data.attribut[0]}</th>
                    <th>{data.attribut[1]}</th>
                    <th>{data.attribut[2]}</th>
                    <th>{data.attribut[3]}</th>
                    <th>Action</th>
                </thead>
                <tbody className="table-scroll">
                    {/* <tr> */}
                    {data.item.map( item => (

                        
                        <tr key={item.id} >
                            <td>{displayedItem(item)[0]}</td>
                            <td>{displayedItem(item)[1]}</td>
                            <td>{displayedItem(item)[2]}</td>
                            <td>{displayedItem(item)[3]}</td>
                            <td className=" w-25">
                                <ModifierCooperative
                                    item={modalData.item}
                                    champForm={champForm}
                                    menuPath={data.menuPath}
                                />

                                
                                <button class="btn-warning me-1 bouton-op btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => handleShow({ item:item }, modifChampForm())}>Modifier  </button>
                                <button class="bouton-op btn btn-danger ms-1" onClick={() => deleteData("http://127.0.0.1:8000/cocoa/"+ data.menuPath  +"/" + item.id + "/delete/")} >Supprimer</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    );


}

export default TableData;
