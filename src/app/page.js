import './index.css'

//components
import { Nav } from '@/components/Nav';
import { Chips } from '@/components/Chips';
import { CustomButton } from '@/components/CustomButton';
import { CounterSteps } from '@/components/CounterSteps';
import { CustomBrand } from '@/components/CustomBrand';
import { AnimateImages } from '@/components/AnimateImages';

const arrayChips = ['sin mensualidades', 'infalsificable', 'intuitiva' ]
const arraySteps = ['Registrate', 'Crea tu tienda', 'Compártela']
const images = [
  "https://i.postimg.cc/2jTchVK4/int-1.png",
  "https://i.postimg.cc/Gh5Xg6rt/int-2.png",
  "https://i.postimg.cc/Wb39nTBx/int-3.png",
  "https://i.postimg.cc/CKymSDRV/int-4.png",
  "https://i.postimg.cc/KYnQzzT3/int-5.png",
  "https://i.postimg.cc/YCLb58q3/int-6.png",
];

export default function Home() {
  return (
   <>
      {/* nav */}
     <Nav/>
    <main className="home-main">
      {/* Contenedor izquierdo */}
      <div className={"home-container"}>
        {/* Titulos*/}
        <div className={"home-container-content"}>
          <CustomBrand variant={'original'} size={'big'} height={'50px'}/>
          <h1 className={"home-title"}>
            crea tu e-commerce <br /> en segundos
          </h1>

          <Chips type="point" chips={arrayChips} />

          <CustomButton
            referencia={"/registro"}
            type="link"
            text="¡Crear ahora!"
          />

        </div>

        {/* cotenedor de imagen */}
        <div className={"home-containerImage"}>
          <AnimateImages arrayImages={images}/>
        </div>
      </div>

    </main>
      <section className="home-container-step">
        <h4>¿CÓMO FUNCIONA?</h4>
        <CounterSteps arraySteps={arraySteps} />
      </section>
   </>
  );
}
