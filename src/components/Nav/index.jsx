import './index.css'
import Link from 'next/link';
import { CustomBrand } from '../CustomBrand';

function Nav() {
    return ( 
        <nav className='navigator'>
            <Link href={"https://1.int.store"}>
              <CustomBrand variant='white' size='small' height={"20px"}/>
            </Link>
            <div>
                <span>ES</span>
            </div>
        </nav>
     );
}

export {Nav};