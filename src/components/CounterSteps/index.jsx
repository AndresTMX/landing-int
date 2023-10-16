import './index.css'

function CounterSteps({arraySteps}) {

    /*
  CounterSteps recibe :

  arraySteps que deve ser un array de strings
  counterSteps, lo mapea y renderiza un step 
  por cada elemento del array
  */
    
    return (
      <>
        <section className="counterStep-container">
          {arraySteps.map((step, index) => (
            <div className='stepBox'>
                {(index + 1) % 2 === 0 && (<span className="line">
                   {'--------------- ->'}
                </span>)}
              <div className="step">
                <span className="circle">{index + 1}</span>
                <p>{step}</p>
              </div>
              {(index + 1) % 2 === 0 && 
              (<span className="line">
                    {'--------------- ->'}
                </span>)}
            </div>
          ))}
        </section>
      </>
    );
}

export {CounterSteps};