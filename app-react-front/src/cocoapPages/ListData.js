import React, { useEffect, useState, useRef, createContext, useContext } from 'react';

const ListData = ({ attribut, menuPath, setDataItem }) => {


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        // Remplace l'URL par celle de ton API Django
        fetch('http://localhost:8000/cocoa/' + menuPath + '/list/')
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



    const displayedItem = (item) => {
        if (menuPath === "lot") {
            return [item.numero_lot, item.quantite, item.type_commercial, item.taux_humidite];
        } else if (menuPath === "sac") {
            return [item.quantite, item.date_creation, item.date_modification, item.acheteur];
        } else if (menuPath === "parcelle") {
            return [item.id_parcelle, item.statut, item.superficie, item.nombre_arbres];
        } else if (menuPath === "acheteur") {
            return [item.nom, item.contact, item.filiale, item.type_acheteur]
        } else {
            return [item.nom, item.id_producteur, item.numero_telephone, item.residence];
        }
    };

    return (
        <div class="recent_project">

            <div class="card_header">
                <h2>Nos {menuPath}</h2>
            </div>
            <div className='listdata'>
                <table className='table-striped table '>
                    <thead>
                        <tr >
                            <td> {attribut[0]} </td>
                            <td>{attribut[1]}</td>
                            <td>{attribut[2]}</td>
                            <td>{attribut[3]}</td>
                            <td>{attribut[4]}</td>
                        </tr>
                    </thead>
                    <tbody >
                        {data.map(item => (


                            <tr key={item.id} >
                                <td onClick={() => { setDataItem(item) }}>{displayedItem(item)[0]}</td>
                                <td onClick={() => { setDataItem(item) }}>{displayedItem(item)[1]}</td>
                                <td onClick={() => { setDataItem(item) }}>{displayedItem(item)[2]}</td>
                                <td onClick={() => { setDataItem(item) }}>{displayedItem(item)[3]}</td>
                                <td  > <button className='btn bg-secondary '><i class='bx bx-show color-success' ></i></button> </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default ListData;