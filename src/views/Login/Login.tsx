import React from 'react'
import PrimaryInput from '../../components/PrimaryInput/PrimaryInput'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className='w-screen h-full flex justify-center items-center gap-24'> 
        <img 
          src="https://img.freepik.com/darmowe-wektory/ilustracja-koncepcja-konta_114360-399.jpg?w=826&t=st=1706805551~exp=1706806151~hmac=5bb59f24b903af0a37aee9b290efca04bffcce9c46e6f653d103ca14f1b877f0" 
          alt="login picture" 
          className='w-[600px] lg:flex hidden'  
        />
        <div className='w-full lg:w-min flex flex-col gap-6 bg-white p-12 rounded-xl z-50'>
            <span className='text-[42px] lg:text-[72px] font-medium'>Marketplace</span>
            <PrimaryInput id="email" label="E-mail" placeholder="Wpisz e-mail" styles="flex flex-col" />
            <PrimaryInput id="password" type="password" label="Hasło" placeholder="Hasło" styles="flex flex-col" />
            <Link to="/forgot-password">
                <span className='font-medium'>Nie pamiętasz hasła?</span>
            </Link>
            <PrimaryButton styles="w-full">
                <span>Zaloguj się</span>
            </PrimaryButton>
        </div>
    </section>
  )
}

export default Login