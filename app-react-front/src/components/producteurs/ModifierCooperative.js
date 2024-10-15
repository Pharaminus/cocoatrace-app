
import { useState } from "react";


const ModifierCooperative = (data) => {

    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState({ item: '' });

    const handleClose = () => setShow(false);
    const handleShow = (data) => {
        setModalData(data);
        setShow(true);
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
                            <form class="row g-3">
                                {
                                    data.champForm.map(champ => (
                                        <div class="col-md-4">
                                            <label for="validationServer01" class="form-label">{champ}</label>
                                            <input type="text" name="nom" class="form-control " value={data.item[champ]} id="validationServer01" required />
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

