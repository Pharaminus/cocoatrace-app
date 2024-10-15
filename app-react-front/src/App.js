import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect, useRef, useState } from "react";
import Picture from "./components/Picture";
import Presentation from "./components/Presentation";
import CooperativeDashboard from "./components/producteurs/CooperativeDashboard";

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
        <CooperativeDashboard />
    </div>
  )
}

export default App;

