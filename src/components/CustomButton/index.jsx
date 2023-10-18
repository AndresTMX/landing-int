"use client"
import './index.css'
import Link from 'next/link'

function CustomButton ({text, type, variant , referencia, onClick, icon}) {
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

        {typeButton === 'icon' && (
            <button onClick={Click} className={`button ${variantButton} ${typeButton}`}>{icon}</button>
        )}

        {typeButton === 'link' && (
            <Link href={referencia} className={`button ${variantButton} ${typeButton}`}>{text}</Link>
        )} 
        
        </>
     );
}

export {CustomButton} ;