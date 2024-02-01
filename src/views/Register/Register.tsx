import React from 'react'
import PrimaryInput from '../../components/PrimaryInput/PrimaryInput'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'

const Register = () => {
  return (
    <section className='w-screen h-full flex justify-center items-center gap-24'> 
        <img 
          src="https://img.freepik.com/darmowe-wektory/wypelnij-ilustracje-koncepcyjna_114360-5450.jpg?w=826&t=st=1706805754~exp=1706806354~hmac=96ee53130919be30f61537624a685badbee73acd1d5981ea9cd816c391ec6387" 
          alt="register picture" 
          className='w-[600px] lg:flex hidden'  
        />
        <div className='w-full lg:w-min flex flex-col gap-4 bg-white p-12 rounded-xl'>
            <span className='text-[42px] lg:text-[72px] font-medium'>Marketplace</span>
            <PrimaryInput id="email" label="E-mail" placeholder="Wpisz e-mail" styles="flex flex-col" />
            <PrimaryInput id="password" type="password" label="Hasło" placeholder="Hasło" styles="flex flex-col" />
            <PrimaryInput id="confirmpassword" type="password" label="Powtórz hasło" placeholder="Powtórz hasło" styles="flex flex-col" />
            <span className='w-full pt-4 pb-4'>Klikając “Załóż konto” lub kontynuując za pośrednictwem jednego z dostawców wskazanych powyżej, akceptuję <b>Regulamin serwisu</b> Marketplace</span>
            <PrimaryButton styles="w-full">
                <span>Załóż konto</span>
            </PrimaryButton>
        </div>
    </section>
  )
}

export default Register