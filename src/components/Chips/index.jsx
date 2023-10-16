import './index.css'

function Chips({type, chips}) {

  /*
  Chips recibe :

  type que se refiere al 
  tipo de lista estas son sus opciones

  chips que es un array de elementos string

  - clean : un elemento chip limpio, sin decorador

  - point : un elemento chip con un punto como decorador

  - number : un elementento chip con un numero como decorador
  */

  const typeDeault = type? type: ''

    return (
      <div className="containerChips">
        {typeDeault === "number" && (
          <ol className={`containerChips-list  typeOrder-${typeDeault}`}>
            {chips.map((chip, index) => (
              <li className='containerChips-list-item' key={index}>{chip}</li>
            ))}
          </ol>
        )}

        {typeDeault != "number" && (
          <ul className={`containerChips-list  typeOrder-${typeDeault}`}>
            {chips.map((chip, index) => (
              <li className='containerChips-list-item' key={index}>{chip}</li>
            ))}
          </ul>
        )}
      </div>
    );
}

export {Chips};