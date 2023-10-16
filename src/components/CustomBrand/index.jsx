import './index.css'

  /*
  CustomBrand recibe :

  variant que se refiere a la variante del icono

  - original : logo gris con letras blancas
  
  - white : logo en blanco
  
  - star : logo con estrellas 

  size hace referencia al tamaño 

  - small : texto de 1 rem

  - medium : texto de 2 rem
  
  - big : texto de 3 rem

  */

function CustomBrand ({variant, size}) {
    const customVariant = variant? variant : 'original'
    const customSize = size? size : 'medium'
    return ( 
        <>

        {customVariant === 'original' && (
            <picture className={`icon-brand ${customVariant} ${customSize}`}>
            <img height="50px" src="Elice.svg" />
            INT
          </picture>
        )}

         {customVariant === 'white' && (
            <picture className={`icon-brand ${customVariant} ${customSize}`}>
            <img className='icon' src="Elice-white.svg" />
            INT
          </picture>
        )}

         {customVariant === 'star' && (
            <picture className={`${customVariant} ${customSize}`}>
            <img height="80px" src="Elice-white-star.svg" />
          </picture>
        )}
        
        </>
     );
}

export {CustomBrand} ;