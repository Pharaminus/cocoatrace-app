
import { useState } from "react";


const AjouterCooperative = (data) => {

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
    const [loading, setLoading] = useState(true);

    const ajouterData = async (url) => {
        setLoading1(true);
        setError1(null);

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify(formData)
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

    return (
        <div className=" w-100">

            <div class="modal fade bg-transparent " id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content h-100">
                        <div class="modal-header modal-header-addCoop h-25 text-center w-100">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel2">Ajouter un {data.menuPath}</h1>
                            <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body h-100">
                            <form class="row g-3">
                                {
                                    data.champForm.map(champ => (
                                        <div class="col-md-4">
                                            <label for="validationServer01" class="form-label">{champ}</label>
                                            <input type="text" name={champ} class="form-control " id="validationServer01"  value="qq" />
                                            <div class="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                    )

                                    )
                                }

                                <div class="col-12">
                                    <button class="btn btn-warning w-100" type="submit" onClick={() => ajouterData("http://127.0.0.1:8000/cocoa/"+ data.menuPath +"/new/")}>Valider </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div >
        </div >
    )
}

export default AjouterCooperative

