"use client"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { CustomImage } from "../CustomImage";

function AnimateImages({arrayImages}) {

    const lengthArray = arrayImages.length - 1;
    const [image, setImage] = useState(0)

    /*/ al cargar el componente este evalua el estado image y
        si el estado es menor que el largo del array le suma
        uno al estado despues de 2.5 s lo que hace que la imagen
        cambie despues de ese tiempo

        si el numero es igual al largo del arreglo entonces devuelve 
        el valor del estado a 0 reiniciando el ciclo.
    /*/
    useEffect(() => {

        if(image < lengthArray){
            setTimeout(()=> {
                setImage(image + 1)
            },2500)
        }

        if(image === lengthArray){
            setTimeout(()=> {
                setImage(0)
            },2500)
        }

    },[image])

    return ( 
        <div className="brand">
            <motion.div
        key={image}
        initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{ opacity: 50 }}
          transition={{
            ease:'linear',
            duration: 1.2,
          }}>
        <CustomImage 
        url={arrayImages[image]} 
        position="center"
        size="big-image"
        variant="simple" />
        </motion.div>
        </div>
     );
}

export {AnimateImages};