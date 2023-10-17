import './index.css'
import { CustomBrand } from '../CustomBrand';

function Nav() {
    return ( 
        <nav className='navigator'>
            <CustomBrand variant='white' size='small' height={"20px"}/>
            <div>
                <span>ES</span>
            </div>
        </nav>
     );
}

export {Nav};