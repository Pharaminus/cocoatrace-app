import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect, useRef, useState } from "react";
import Picture from "./components/Picture";
// import Login from './components/Login';
import Register from './components/Register';
import Presentation from "./components/Presentation";
import CooperativeDashboard from "./components/producteurs/CooperativeDashboard";
// import Home from './Home';
import DashboardCooperative from "./cocoapPages/DashbordCooperative";
import Qrcode from './Qrcode';
function  App(){
    // eslint-disable-next-line no-unused-vars
    const [title, setTitle] = useState("Salut la famille")
    const [show, setShow] = useState(false);
    const isShowInitialize = useRef(false);

    useEffect( () => {console.log("Composent app monte!")}, []);
    
    useEffect( () => {
        if(isShowInitialize.current){
            console.log("Show mise ajour");
        }
        else{
            isShowInitialize.current = true; 
        }
    }, [show]);

    function handerClick(){
        setShow(!show);
    }

  return (
    <div>
    {/* <CooperativeDashboard/> */}
        <DashboardCooperative/>
    </div>












  )
}

export default App;




function Login() {
  

    const [username, setUsername] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState(null);
  
      const handleSubmit = async (e) => {
          e.preventDefault();
          setError(null);
  
          try {
              const response = await fetch('http://127.0.0.1:8000/cocoa/login/', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ username, password })
              });
  
              if (!response.ok) {
                  throw new Error('Erreur lors de l\'inscription');
              }
  
              // Gestion de la réponse réussie (redirection, message de succès, etc.)
              console.log('Inscription réussie');
          } catch (error) {
              setError(error.message);
          }
      };
  
    return (
      <div className='block-login '>
        <h2v className=" mt-3">Connexion</h2v>
        <form onSubmit={handleSubmit} className=' mt-5'>
          <div className='block-username block-input'>
            <label htmlFor="username" className='form-label'>Identifiant </label>
            <input
            className=' form-control'
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name='username'
            />
          </div>
          <div className='block-pass block-input '>
            <label htmlFor="password" className='form-label'>Mot de passe </label>
            <input
            className='form-control'
              type="password"
              id="password"
              value={password}
              name='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className='btn bg-warning mt-4 text-black'>Se connecter</button>
        </form>
      </div>
    );
  }




const Home = () => {
//   const { user } = useContext(AuthContext);

  return (
    <div>
      {/* {user ? (
        <p>Bienvenue, {user.name}!</p>
      ) : (
        <p>Vous devez être connecté pour accéder à cette page.</p>
      )} */}
        <p>Vous devez être connecté pour accéder à cette page.</p>

    </div>
  );
};
