"use client"
import { useState, useEffect } from "react";

function AnimateImages({arrayImages}) {

    const indexImage = arrayImages[0];
    const lengthArray = arrayImages.length;

    const [image, setImage] = useState(0)

    useEffect(() => {

        if(indexImage < lengthArray){
            setTimeout(()=> {
                setImage(image + 1)
            },2500)
        }

        if(indexImage === lengthArray){
            setTimeout(()=> {
                setImage(0)
            },2500)
        }

    },[image])

    return ( 
        <>
        
        </>
     );
}

export {AnimateImages};