import React, {useState} from 'react'

export default function PictureChild({index, imageName, handleRemove}) {

    const [showCloseButton, setShowCloseButton] = useState(-1);

    return (
        <>
            <div className="col w-50 h-50 position-relative" key={index}
            onMouseEnter={()=> setShowCloseButton(index)} 
             onMouseLeave={() => setShowCloseButton(-1)}
            >
            <button className= {`${index === showCloseButton ? "" : "visually-hidden"} text-center position-absolute fw-bold border-0 bg-danger text-white border-1 rounded-5`}
                onClick={() => handleRemove(index)}
            >x</button>
            <img className="imgBBL "   src={imageName} alt="balekamen" />
        </div>
        </>
    )
}
