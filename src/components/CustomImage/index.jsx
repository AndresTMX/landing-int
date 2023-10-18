import './index.css'

function CustomImage({url, position, size, variant}) {

 /*
  Image recibe :

  url: direccion url de la imagen

  position: posicion de la imagen
  - top, center y bottom

  size: el tamaño de la imagen
  - small, medium y big

  variant: variante de boton
   -brand y simple

  */

    const customPosition = position? position: 'center'
    const customSize = size? size: 'medium'
    const customVariant = variant? variant : 'brand'

    return (
      <>    
        <picture className={`picture  ${customSize} ${customVariant} ${customPosition}`}>
            <img src={url} className={`transform  ${customSize}`} alt='Error al cargar'/>
          </picture>
      </> 
     );
}

export {CustomImage};