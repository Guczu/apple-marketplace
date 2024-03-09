import PrimaryInput from '../../components/PrimaryInput/PrimaryInput'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import loginPhoto from '../../assets/login.webp'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className='w-screen h-full flex justify-center items-center'> 
        <img 
          src={loginPhoto}
          alt="login picture" 
          className='w-2/5 lg:flex hidden'  
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