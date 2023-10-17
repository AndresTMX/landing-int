import './index.css'

  /*
  CustomBrand recibe :

  variant que se refiere a la variante del icono

  - original : logo gris con letras blancas
  
  - white : logo en blanco
  
  - star : logo con estrellas 

  */

function CustomBrand ({variant, size, height}) {
    const customVariant = variant? variant : 'original'
    const customSize = size? size : '2rem'
    const customHeightIcon = height? height: '50px'
    return ( 
        <>

        {customVariant === 'original' && (
            <picture className={`icon-brand ${customVariant} ${customSize}`}>
            <img height={customHeightIcon} src="Elice.svg" alt='icon' />
            INT
          </picture>
        )}

         {customVariant === 'white' && (
            <picture className={`icon-brand ${customVariant} ${customSize}`}>
            <img height={customHeightIcon} src="Elice-white.svg" alt='icon' />
            INT
          </picture>
        )}

         {customVariant === 'star' && (
            <picture className={`${customVariant} ${customSize}`}>
            <img height={customHeightIcon} src="Elice-white-star.svg" alt='icon' />
          </picture>
        )}
        
        </>
     );
}

export {CustomBrand} ;