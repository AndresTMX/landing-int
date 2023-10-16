import './index.css'
//components
import { Chips } from '@/components/Chips';
import { CustomButton } from '@/components/CustomButton';
import { CustomImage } from '@/components/CustomImage';
import { CounterSteps } from '@/components/CounterSteps';
import { CustomBrand } from '@/components/CustomBrand';

const arrayChips = ['sin mensualidades', 'infansificable', 'intuitiva' ]
const arraySteps = ['Registrate', 'Crea tu tienda', 'Compartela al mundo']

export default function Home() {
  return (
    <main className="home-main">
      {/* Logo */}
      <div className="home-container-brand">
        <CustomBrand variant="white" size="big" />
      </div>
      {/* Contenedor izquierdo */}
      <div className={"home-container"}>
        {/* Titulos*/}
        <div className={"home-container-content"}>

          <h1 className={"title"}>
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
          <CustomImage
            url={"https://i.postimg.cc/rFBdRSX1/Iphone.png"}
            position="center"
            size="big"
            variant="brand"
          />
        </div>
      </div>

      <section className="home-container-step">
        <h4>¿CÓMO FUNCIONA?</h4>
        <CounterSteps arraySteps={arraySteps} />
      </section>
    </main>
  );
}
