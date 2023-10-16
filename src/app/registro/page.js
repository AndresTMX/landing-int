import './index.css'
import { RegisterForm } from '@/components/RegisterForm';
import { CustomBrand } from '@/components/CustomBrand';

export default function registro() {

  return (
    <main className='register-main'>
      <div className='register-container color-brand'>
        <nav className='nav'>
          <CustomBrand variant='white' size='medium'/>
        </nav>

        <article>
          <div className='register-container-brand'>
             <CustomBrand variant='star' size='big'/>
          </div>
          <h1>¡Impulsa tus ventas con el poder de INT! <br/> 🚀</h1>
          <p>
          Herramientas para incrementar las ventas de los negocios. Gestiona pagos y envíos de forma sencilla.
          </p>
        </article>
        <span className='firma'>© Intelligent Networked Transactions LLC</span>
      </div>

      <div className='box-right'>
        <article>
          <h2>Registro lista de espera</h2>
          <p className='text'>
          Registrate para en cuanto estemos en vivo avisarte y puedas empezar a generar ingresos extras de forma sencilla y escalable
          </p>

          <RegisterForm/>
        </article>
      </div>

    </main>
  );
}