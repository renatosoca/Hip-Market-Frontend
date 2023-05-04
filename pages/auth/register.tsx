import { useForm } from 'react-hook-form';
import { AuthLayout } from '@/components';
import { isEmail } from '@/utils';
import { hipMarketApi } from '@/apis';
import { useState } from 'react';

interface FormData {
  name: string;
  lastname: string;
  email: string,
  password: string,
  confirmPassword: string,
};


const RegisterPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const [showError, setShowError] = useState(false)

  const handleSubmitLogin = async ({ email, password }: FormData) => {
    try {
      const { data } = await hipMarketApi.post('/auth/register', { email, password });
      console.log(data)

    } catch (error) {
      //console.log(error.response.data)
      setShowError(true)

      setTimeout(() => setShowError(false), 3000);
    }
  }

  return (
    <AuthLayout title='Ingresar' pageDescription='Inicio de sesión' >
      <section className='w-full'>
        <div className='px-5 max-w-[25rem]'>
          <h2 className='font-Gotham font-medium text-xl'>Iniciar Sesión</h2>

          {
            showError && (
              <div className='bg-red-500 text-white text-center py-2 px-3 rounded mt-3'>
                <span>Error hehehe</span>
              </div>
            )
          }

          <form onSubmit={handleSubmit(handleSubmitLogin)}>
            <div className="w-full group">
              <div className={`relative w-full bg-gray-300 pt-2 border-b-[.15rem] border-gray-400 hover:border-gray-500 rounded-t text-gray-600 after:content[''] after:absolute after:top-full after:left-0 after:bg-[#5FA7F0] after:w-full after:h-[.18rem] after:scale-0 group-focus-within:after:scale-100 after:transition-all after:duration-300 ease-in-out`} >

                <input
                  className={`input w-full bg-inherit px-2 pt-3 pb-1 outline-none text-black font-medium resize-none placeholder:text-transparent group-focus-within:placeholder:text-gray-600 placeholder:transition-colors placeholder:duration-200 ease-in`}
                  type="text"
                  id="name"
                  placeholder="Ingresa tu nombre"
                  autoComplete='off'
                  {...register('name', {
                    required: 'Este campo es requerido',
                  })}
                />

                <label
                  htmlFor="name"
                  className={`input__label absolute left-2 top-[50%] group-focus-within:top-[5%] -translate-y-1/2 group-focus-within:translate-y-0 text-gray-600 group-focus-within:text-[#5FA7F0] text-base group-focus-within:text-xs bg-inherit font-medium transition-[top transform] duration-200 cursor-text`}
                >Nombre</label>
              </div>

              <div className={`px-2 text-[.8rem] text-red-500 font-medium`} >
                <span>{errors.name?.message}</span>
              </div>
            </div>  {/* END INPUT NAME */}

            <div className="w-full group">
              <div className={`relative w-full bg-gray-300 pt-2 border-b-[.15rem] border-gray-400 hover:border-gray-500 rounded-t text-gray-600 after:content[''] after:absolute after:top-full after:left-0 after:bg-[#5FA7F0] after:w-full after:h-[.18rem] after:scale-0 group-focus-within:after:scale-100 after:transition-all after:duration-300 ease-in-out`} >

                <input
                  className={`input w-full bg-inherit px-2 pt-3 pb-1 outline-none text-black font-medium resize-none placeholder:text-transparent group-focus-within:placeholder:text-gray-600 placeholder:transition-colors placeholder:duration-200 ease-in`}
                  type="text"
                  id="lastname"
                  placeholder="Ingresa tu apellido"
                  autoComplete='off'
                  {...register('lastname', {
                    required: 'Este campo es requerido',
                  })}
                />

                <label
                  htmlFor="lastname"
                  className={`input__label absolute left-2 top-[50%] group-focus-within:top-[5%] -translate-y-1/2 group-focus-within:translate-y-0 text-gray-600 group-focus-within:text-[#5FA7F0] text-base group-focus-within:text-xs bg-inherit font-medium transition-[top transform] duration-200 cursor-text`}
                >Apellido</label>
              </div>

              <div className={`px-2 text-[.8rem] text-red-500 font-medium`} >
                <span>{errors.name?.message}</span>
              </div>
            </div>  {/* END INPUT LASTNAME */}

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

            <div className="w-full group">
              <div className={`relative w-full bg-gray-300 pt-2 border-b-[.15rem] border-gray-400 hover:border-gray-500 rounded-t text-gray-600 after:content[''] after:absolute after:top-full after:left-0 after:bg-[#5FA7F0] after:w-full after:h-[.18rem] after:scale-0 group-focus-within:after:scale-100 after:transition-all after:duration-300 ease-in-out`} >

                <input
                  className={`input w-full bg-inherit px-2 pt-3 pb-1 outline-none text-black font-medium resize-none placeholder:text-transparent group-focus-within:placeholder:text-gray-600 placeholder:transition-colors placeholder:duration-200 ease-in`}
                  type="password"
                  id="confirmPassword"
                  placeholder="Vuelve a ingresar tu contraseña"
                  autoComplete='off'
                  {...register('confirmPassword', {
                    required: 'Este campo es requerido',
                    minLength: { value: 6, message: 'La contraseña debe tener al menos 6 caracteres' }
                  })}
                />

                <label
                  htmlFor="confirmPassword"
                  className={`input__label absolute left-2 top-[50%] group-focus-within:top-[5%] -translate-y-1/2 group-focus-within:translate-y-0 text-gray-600 group-focus-within:text-[#5FA7F0] text-base group-focus-within:text-xs bg-inherit font-medium transition-[top transform] duration-200 cursor-text`}
                >Confirmar contraseña</label>
              </div>

              <div className={`px-2 text-[.8rem] text-red-500 font-medium`} >
                <span>{errors.confirmPassword?.message}</span>
              </div>
            </div>  {/* END INPUT CONFIRMPASSWORD */}

            <button
              type='submit'
              className='bg-blue-600 w-full py-2 px-5 text-white font-semibold font-Jakarta rounded mt-5 hover:bg-blue-700 transition-colors duration-200 ease-in-out'
            >
              Continuar
            </button>
          </form>
        </div>
      </section>
    </AuthLayout>
  )
}

export default RegisterPage