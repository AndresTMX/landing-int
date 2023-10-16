import './index.css'

//components
import { CustomImage } from '@/components/CustomImage';
import { CustomBrand } from '@/components/CustomBrand';
import { SocialMediaIcons } from '@/components/SocialMediaIcons';

export default function Thanks() {
  return (
    <main className="thanks-main">
      
      <div className="container-brand">
        <CustomBrand variant="original" size="big" />
      </div>

      <section className='thanks-container'>
      <div className="thanks-container-text">
        <span>¡Muchas gracias por registrarte!</span>
        <h1>
          Nos pondremos en contacto muy <br /> pronto
        </h1>

        <div className="thanks-footer">
          <span>Visita nuestras redes sociales</span>
          <SocialMediaIcons />
        </div>
      </div>

      <div className="thanks-container-image">
        <CustomImage
          url={"https://i.postimg.cc/rFBdRSX1/Iphone.png"}
          position="center"
          size="big"
          variant="brand"
        />
      </div>

      </section>


    </main>
  );
}
