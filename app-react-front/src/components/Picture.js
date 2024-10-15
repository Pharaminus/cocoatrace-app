import React, { Component, useEffect, useRef, useState } from 'react'
import "../App.css"
import PictureChild from './PictureChild';


export default function Picture() {
    // const [myTimer, setMyTimer] = useState(null); 
    
    const [images, setImages] = useState(
        [
            "/media/img1.png",
            "/media/img2.png",
            "/media/img3.jpg",
            "/media/img4.jpg",
        ]
    )
    const inputVal = useRef(null);
    
    // const [imageList, setImageList] = useState([])
    const [newImage, setNewImage] = useState("/media/")

    function handlerImageName(event){
        console.log(event.target.value );
        setNewImage(event.target.value);

    }

    function AddNewImage(){
        let newImages = [... images, "/media/"+newImage]
        setImages(newImages);
    }


    function ImagesComponent(){

        return images.map((name, index) => {
            
            return  (
                <>

                <PictureChild 
                    imageName={name} 
                    handleRemove={handleRemove} 
                    index={index} 
                    key={index} 

                />
               
            </>
            )

        })
    }

    function handleRemove(index){
        setImages(images.filter((image, i) => i !== index));
    }


    
    // useEffect(() => {
    //         const myTimer = setInterval(() => {
    //             console.log("timer appler ");
    //         }, 1000);

    //         return () => clearInterval(myTimer);
        
    // }, []);

    // useEffect(() => {
    //     console.log(inputVal.current.value)
    //     inputVal.current.focus() 

    // })


    return (
        <div className=' container-fluid'>
            <div className=" row ">
                {
                    <ImagesComponent />
                }
            </div>

            <div className=" container-fluid w-50 my-5">
                <label htmlFor='imageName my-5' className='form-label'>Entrer le nom de l'image</label>
                <input ref={inputVal} className="form-control my-2" type='text' id='imageName' 
                    onChange={handlerImageName}
                />
                <button type=' submit' className="btn btn-primary my-1" 
                    
                    // onClick={AddNewImage}
                    onClick={()=>{console.log(inputVal.current.value)}}
                >Ajouter une image</button>
            </div>
                
        </div>
        
    )
}



// export default class Picture extends Component {
//     constructor(props){
//         super(props);
//         this.state = {position:35}
//     }

//     componentDidMount(){
        
//     }

//     componentWillUnmount(){
        
//     }

//     render() {
//         console.log("Le composant Picture a ete rendu !!")

//         return (
//         <div>
//             <img className="imgBBL"   src=" /media/IMG_20230521_083633_141-removebg-preview.jpg" alt="balekamen" />
//         </div>
//         )
//     }
// }
