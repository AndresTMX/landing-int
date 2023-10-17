import './index.css'

//components
import { CustomImage } from '@/components/CustomImage';
import { CustomBrand } from '@/components/CustomBrand';
import { SocialMediaIcons } from '@/components/SocialMediaIcons';
import { Nav } from '@/components/Nav';

export default function Thanks() {
  return (
   <>
   <div className='thanks-nav'>
     <Nav/>
   </div>
    <main className="thanks-main">
      <div className="thanks-container">

        <section className="thanks-container-text">
          <CustomBrand variant="original" size="big" />
          <span>¡Muchas gracias por registrarte!</span>
          <h1>
            Nos pondremos en <br /> contacto muy <br /> pronto
          </h1>

          <span>Visita nuestras redes sociales</span>
          <div className="thanks-footer">
            <SocialMediaIcons />
          </div>
        </section>

        <section className="thanks-container-image">
          <div className='thanks-image'>
          <CustomImage
            url={"https://i.postimg.cc/rFBdRSX1/Iphone.png"}
            position="center"
            size="big-image"
            variant="brand"
          />
          </div>
        </section>
      </div>
    </main>
   </>
  );
}
