"use client"
import './index.css'

  /*
  CustomButton recibe :

  text: el texto dentro del boton

  type: el tipo de boton que es

  - solid: color solido letras blancas

  - border: blanco con borde coloreado

  - disable: boton desabilitado

  - link : boton de color solido que recibe referencia 
  
  */

function CustomButton ({text, type, variant , referencia, onClick}) {
    const typeButton = type? type : 'solid'
    const variantButton = variant? variant : 'primary'
    const Click = () => {
        if (onClick) {
            onClick();
          }
    }
    return ( 
        <>

        {typeButton === 'solid' && (
            <button onClick={Click} className={`button ${variantButton} ${typeButton}`}>{text}</button>
        )}

        {typeButton === 'border' && (
            <button onClick={Click} className={`button ${variantButton} ${typeButton}`}>{text}</button>
        )}

        {typeButton === 'disabled' && (
            <button onClick={Click} className={`button ${variantButton} ${typeButton}`}>{text}</button>
        )}

        {typeButton === 'link' && (
            <a href={referencia} className={`button ${variantButton} ${typeButton}`}>{text}</a>
        )} 
        
        </>
     );
}

export {CustomButton} ;