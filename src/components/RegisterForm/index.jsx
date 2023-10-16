"use client"
import './index.css'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { CustomButton } from "../CustomButton";

function RegisterForm() {

  const router = useRouter();

    const [form, setForm] = useState({
        name:'',
        email:''
    })

    const onChangueForm = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    function register(e) {
        e.preventDefault();
        const data = {
         ...form
        }
        console.log(data)
        router.push('/gracias')

    }

    return ( 
        <form 
        onSubmit={register}
        className='register-form'>
            
            <div>
              <label onClick={() => {}}>Nombre *</label>
              <input 
              required
              name='name'
              placeholder='Juan Perez'
              value={form.name}
              onChange={ onChangueForm}
              />
            </div>

            <div>
              <label>Correo *</label>
              <input 
              required
              name='email'
              type='email'
              placeholder='juan@gmail.com'
              value={form.email}
              onChange={ onChangueForm}
              />
            </div>

            <CustomButton text='Registrarme' type='solid' />
          </form>
     );
}

export {RegisterForm};