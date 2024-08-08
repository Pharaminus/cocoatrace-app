
import { useState } from "react";


const ModifierCooperative = (data) => {

    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState({ item: '' });

    const handleClose = () => setShow(false);
    const handleShow = (data) => {
        setModalData(data);
        setShow(true);
    };

    
    const [formData, setFormData] = useState({});

    const handleChange = (event) => {
        setFormData({
        ...formData,
        [event.target.name]: event.target.value,
        });
    };



    const handleSubmit  = async (event) => {
        // event.preventDefault(); 
        const url = "http://127.0.0.1:8000/cocoa/"+ data.menuPath +"/"+ data.item.id +"/";
        
        try {
        const response = await fetch(url,  
    {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            console.log('Données envoyées avec succès  !');
            // Vous pouvez ici rediriger l'utilisateur, afficher un message de succès, etc.
        } else {
            console.error('Erreur lors de l\'envoi des données');
        }
        } catch (error) {
        console.error('Erreur:', error);
        }
    };
    

    return (
        <div className=" w-100">

            <div class="modal fade bg-transparent " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content h-100">
                        <div class="modal-header modal-header-addCoop h-25 text-center w-100">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">modifier un {data.menuPath}</h1>
                            <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body h-100">
                            <form class="row g-3" onSubmit={handleSubmit} >
                                {
                                    data.champForm.map(champ => (
                                        
                                        <div class="col-md-4">
                                            <label for="validationServer01" class="form-label">{champ[0]}</label>
                                            
                                            <input type={champ[1]} name={champ[0]} class="form-control "    value={formData[champ[0]]} onChange={handleChange} disabled={false}  id="validationServer01"  />
                                            <div class="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                    )

                                    )
                                }

                                <div class="col-12">
                                    <button class="btn btn-warning w-100" type="submit">Valider </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div >
        </div >
    )
}

export default ModifierCooperative



