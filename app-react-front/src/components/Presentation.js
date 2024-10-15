import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Picture from './Picture';
const Presentation = () => {
    function handerClick(){
        setShow(!show);
    }
    const [title, setTitle] = useState("Formulaire presentation");
    const [show , setShow] = useState(false)
    return (

        <div className="presentation">
            <div className='container'>
                <h1 className="h1 text-center text-success"> {title}</h1>
            </div>
            <div className="">
                <div className="container w-50" >
                    <div className="container-fluid">
                        <label  htmlFor="nom" className='form-label' >Nom</label>
                        <input className="name form-control" type='text' />
                        <label htmlFor="nom" className='form-label' >Email</label>
                        <input className="email form-control" type='email' />
                    </div>
                    <div className="container-fluid">
                        <button className="btn btn-primary w-100 mt-5" onClick={handerClick} onMouseEnter={() => { setShow(!show)}}>Valider</button>   
                    </div>
                </div>
                { show ? <Picture />: null }
            </div>
        </div>
    );
};

export default Presentation;