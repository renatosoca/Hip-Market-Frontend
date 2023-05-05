import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { AuthLayout } from '@/components';
import { isEmail } from '@/utils';
import { useAuth } from '@/hooks';

interface FormData {
  email: string,
  password: string,
};


const LoginPage = () => {

  const router = useRouter();
  const { loginUser } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const [showError, setShowError] = useState(false);

  const handleSubmitLogin = async ({ email, password }: FormData) => {
    setShowError(false);

    const isValidLogin = await loginUser(email, password);

    if (!isValidLogin) {
      setShowError(true)
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    const redirect = router.query.redirect?.toString() || '/';

    router.replace(redirect);

  }

  return (
    <AuthLayout title='Ingresar' pageDescription='Inicio de sesión' >
      <section className='w-full'>
        <div className='px-5 max-w-[25rem]'>
          <h2 className='font-Gotham font-medium text-xl'>Iniciar Sesión</h2>

          {
            showError && (
              <div className='bg-red-500 text-white text-center py-2 px-3 rounded mt-3'>
                <span>El correo electrónico o la contraseña son incorrectos</span>
              </div>
            )
          }

          <form onSubmit={handleSubmit(handleSubmitLogin)}>
            <div className="w-full group">
              <div className={`relative w-full bg-gray-300 pt-2 border-b-[.15rem] border-gray-400 hover:border-gray-500 rounded-t text-gray-600 after:content[''] after:absolute after:top-full after:left-0 after:bg-[#5FA7F0] after:w-full after:h-[.18rem] after:scale-0 group-focus-within:after:scale-100 after:transition-all after:duration-300 ease-in-out`} >

                <input
                  className={`input w-full bg-inherit px-2 pt-3 pb-1 outline-none text-black font-medium resize-none placeholder:text-transparent group-focus-within:placeholder:text-gray-600 placeholder:transition-colors placeholder:duration-200 ease-in`}
                  type="email"
                  id="email"
                  placeholder="Ingresa tu email"
                  autoComplete='off'
                  {...register('email', {
                    required: 'Este campo es requerido',
                    validate: isEmail
                  })}
                />

                <label
                  htmlFor="email"
                  className={`input__label absolute left-2 top-[50%] group-focus-within:top-[5%] -translate-y-1/2 group-focus-within:translate-y-0 text-gray-600 group-focus-within:text-[#5FA7F0] text-base group-focus-within:text-xs bg-inherit font-medium transition-[top transform] duration-200 cursor-text`}
                >Correo electrónico</label>
              </div>

              <div className={`px-2 text-[.8rem] text-red-500 font-medium`} >
                <span>{errors.email?.message}</span>
              </div>
            </div>  {/* END INPUT EMAIL */}

            <div className="w-full group">
              <div className={`relative w-full bg-gray-300 pt-2 border-b-[.15rem] border-gray-400 hover:border-gray-500 rounded-t text-gray-600 after:content[''] after:absolute after:top-full after:left-0 after:bg-[#5FA7F0] after:w-full after:h-[.18rem] after:scale-0 group-focus-within:after:scale-100 after:transition-all after:duration-300 ease-in-out`} >

                <input
                  className={`input w-full bg-inherit px-2 pt-3 pb-1 outline-none text-black font-medium resize-none placeholder:text-transparent group-focus-within:placeholder:text-gray-600 placeholder:transition-colors placeholder:duration-200 ease-in`}
                  type="password"
                  id="password"
                  placeholder="Ingresa tu contraseña"
                  autoComplete='off'
                  {...register('password', {
                    required: 'Este campo es requerido',
                    minLength: { value: 6, message: 'La contraseña debe tener al menos 6 caracteres' }
                  })}
                />

                <label
                  htmlFor="password"
                  className={`input__label absolute left-2 top-[50%] group-focus-within:top-[5%] -translate-y-1/2 group-focus-within:translate-y-0 text-gray-600 group-focus-within:text-[#5FA7F0] text-base group-focus-within:text-xs bg-inherit font-medium transition-[top transform] duration-200 cursor-text`}
                >Contraseña</label>
              </div>

              <div className={`px-2 text-[.8rem] text-red-500 font-medium`} >
                <span>{errors.password?.message}</span>
              </div>
            </div>  {/* END INPUT PASSWORD */}

            <button
              type='submit'
              className='bg-blue-600 w-full py-2 px-5 text-white font-semibold font-Jakarta rounded mt-5 hover:bg-blue-700 transition-colors duration-200 ease-in-out'
            >
              Continuar
            </button>
          </form>

          <div>
            <Link
              href={router.query.redirect ? `/auth/register?redirect=${router.query.redirect?.toString()}` : '/auth/register'}
            >
              Registrarse
            </Link>
          </div>
        </div>
      </section>
    </AuthLayout>
  )
}

export default LoginPage