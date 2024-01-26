import React from 'react'
import PrimaryInput from '../../components/PrimaryInput/PrimaryInput'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'

const Register = () => {
  return (
    <section className='w-screen h-full bg-main-soft flex flex-col justify-center items-center gap-24'> 
        <div className='w-min flex flex-col gap-4 bg-white p-12 rounded-xl'>
            <span className='text-[72px] font-medium'>Marketplace</span>
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