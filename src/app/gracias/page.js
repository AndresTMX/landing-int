import './index.css'
import {BsFillShareFill} from 'react-icons/bs'

//components
import { AnimateImages } from '@/components/AnimateImages';
import { CustomBrand } from '@/components/CustomBrand';
import { SocialMediaIcons } from '@/components/SocialMediaIcons';
import { CustomButton } from '@/components/CustomButton';
import { Nav } from '@/components/Nav';

export default function Thanks() {

   const images = [
    "https://i.postimg.cc/2jTchVK4/int-1.png",
    "https://i.postimg.cc/Gh5Xg6rt/int-2.png",
    "https://i.postimg.cc/Wb39nTBx/int-3.png",
    "https://i.postimg.cc/CKymSDRV/int-4.png",
    "https://i.postimg.cc/KYnQzzT3/int-5.png",
    "https://i.postimg.cc/YCLb58q3/int-6.png",
  ];

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
          <CustomButton  type='icon' icon={<BsFillShareFill />} />

        </section>

        <section className="thanks-container-image">
          <div className='thanks-image'>
            <AnimateImages arrayImages={images}/>
          </div>
        </section>
      </div>
    </main>
   </>
  );
}
