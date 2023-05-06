import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { ShopLayout } from '@/components';
import { countries } from '@/utils';
import Cookies from 'js-cookie';
import { useCart } from '@/hooks';

export interface ShippingAddress {
  name: string;
  lastname: string;
  address: string;
  address2?: string;
  zip: string;
  city: string;
  country: string;
  phone: string;
}

const getAddressFromCookies = (): ShippingAddress => {
  return {
    name: Cookies.get('name') || '',
    lastname: Cookies.get('lastname') || '',
    address: Cookies.get('address') || '',
    address2: Cookies.get('address2') || '',
    zip: Cookies.get('zip') || '',
    city: Cookies.get('city') || '',
    country: Cookies.get('country') || countries[0].name,
    phone: Cookies.get('phone') || '',
  }
}

const AddressPage = () => {

  const router = useRouter();

  const { updateShippingAdress } = useCart();

  const { register, handleSubmit, formState: { errors } } = useForm<ShippingAddress>({
    defaultValues: getAddressFromCookies(),
  });

  const handleSubmitAddress = (data: ShippingAddress) => {
    updateShippingAdress(data);

    router.push('/checkout/summary');
  }

  return (
    <ShopLayout title='Dirección' pageDescription='Confirmar dirección del destino'>
      <section className='flex justify-center px-2 2xs:px-4'>
        <div className='max-w-[75rem] w-full'>
          <h2 className='font-Jakarta font-bold text-2xl 2cs:text-3xl'>Dirección de envío</h2>

          <div className='max-w-2xl 2lg:max-w-4xl mx-auto 2lg:mx-0 grid grid-cols-12 gap-4 pt-4'>
            <form
              onSubmit={handleSubmit(handleSubmitAddress)}
              className='col-span-12 flex flex-col gap-4 2cs:grid 2cs:grid-cols-2'
            >
              <div className="w-full group">
                <div className={`relative w-full bg-gray-300 pt-2 border-b-[.15rem] border-gray-400 hover:border-gray-500 rounded-t text-gray-600 after:content[''] after:absolute after:top-full after:left-0 after:bg-[#5FA7F0] after:w-full after:h-[.18rem] after:scale-0 group-focus-within:after:scale-100 after:transition-all after:duration-300 ease-in-out`} >

                  <input
                    className={`input w-full bg-inherit px-2 pt-3 pb-1 outline-none text-black font-medium resize-none placeholder:text-transparent group-focus-within:placeholder:text-gray-600 placeholder:transition-colors placeholder:duration-200 ease-in`}
                    type="text"
                    id="name"
                    placeholder="Ingresa tu nombre"
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
                  <span>{errors.lastname?.message}</span>
                </div>
              </div>  {/* END INPUT LASTNAME */}

              <div className="w-full group">
                <div className={`relative w-full bg-gray-300 pt-2 border-b-[.15rem] border-gray-400 hover:border-gray-500 rounded-t text-gray-600 after:content[''] after:absolute after:top-full after:left-0 after:bg-[#5FA7F0] after:w-full after:h-[.18rem] after:scale-0 group-focus-within:after:scale-100 after:transition-all after:duration-300 ease-in-out`} >

                  <input
                    className={`input w-full bg-inherit px-2 pt-3 pb-1 outline-none text-black font-medium resize-none placeholder:text-transparent group-focus-within:placeholder:text-gray-600 placeholder:transition-colors placeholder:duration-200 ease-in`}
                    type="text"
                    id="address"
                    placeholder="Ingresa tu dirección"
                    {...register('address', {
                      required: 'Este campo es requerido',
                    })}
                  />

                  <label
                    htmlFor="address"
                    className={`input__label absolute left-2 top-[50%] group-focus-within:top-[5%] -translate-y-1/2 group-focus-within:translate-y-0 text-gray-600 group-focus-within:text-[#5FA7F0] text-base group-focus-within:text-xs bg-inherit font-medium transition-[top transform] duration-200 cursor-text`}
                  >Dirección</label>
                </div>

                <div className={`px-2 text-[.8rem] text-red-500 font-medium`} >
                  <span>{errors.address?.message}</span>
                </div>
              </div>  {/* END INPUT ADDRESS */}

              <div className="w-full group">
                <div className={`relative w-full bg-gray-300 pt-2 border-b-[.15rem] border-gray-400 hover:border-gray-500 rounded-t text-gray-600 after:content[''] after:absolute after:top-full after:left-0 after:bg-[#5FA7F0] after:w-full after:h-[.18rem] after:scale-0 group-focus-within:after:scale-100 after:transition-all after:duration-300 ease-in-out`} >

                  <input
                    className={`input w-full bg-inherit px-2 pt-3 pb-1 outline-none text-black font-medium resize-none placeholder:text-transparent group-focus-within:placeholder:text-gray-600 placeholder:transition-colors placeholder:duration-200 ease-in`}
                    type="text"
                    id="address-2"
                    placeholder="Ingresa tu segunda dirección"
                    {...register('address2')}
                  />

                  <label
                    htmlFor="address-2"
                    className={`input__label absolute left-2 top-[50%] group-focus-within:top-[5%] -translate-y-1/2 group-focus-within:translate-y-0 text-gray-600 group-focus-within:text-[#5FA7F0] text-base group-focus-within:text-xs bg-inherit font-medium transition-[top transform] duration-200 cursor-text`}
                  >Dirección 2 (opcional)</label>
                </div>

                <div className={`px-2 text-[.8rem] text-red-500 font-medium`} >
                  <span>{errors.address2?.message}</span>
                </div>
              </div>  {/* END INPUT ADDRESS 2 */}

              <div className="w-full group">
                <div className={`relative w-full bg-gray-300 pt-2 border-b-[.15rem] border-gray-400 hover:border-gray-500 rounded-t text-gray-600 after:content[''] after:absolute after:top-full after:left-0 after:bg-[#5FA7F0] after:w-full after:h-[.18rem] after:scale-0 group-focus-within:after:scale-100 after:transition-all after:duration-300 ease-in-out`} >

                  <input
                    className={`input w-full bg-inherit px-2 pt-3 pb-1 outline-none text-black font-medium resize-none placeholder:text-transparent group-focus-within:placeholder:text-gray-600 placeholder:transition-colors placeholder:duration-200 ease-in`}
                    type="text"
                    id="postalCode"
                    placeholder="Ingresa tu código postal"
                    {...register('zip', {
                      required: 'Este campo es requerido',
                    })}
                  />

                  <label
                    htmlFor="postalCode"
                    className={`input__label absolute left-2 top-[50%] group-focus-within:top-[5%] -translate-y-1/2 group-focus-within:translate-y-0 text-gray-600 group-focus-within:text-[#5FA7F0] text-base group-focus-within:text-xs bg-inherit font-medium transition-[top transform] duration-200 cursor-text`}
                  >Código Postal</label>
                </div>

                <div className={`px-2 text-[.8rem] text-red-500 font-medium`} >
                  <span>{errors.zip?.message}</span>
                </div>
              </div>  {/* END INPUT POSTAL CODE */}

              <div className="w-full group">
                <div className={`relative w-full bg-gray-300 pt-2 border-b-[.15rem] border-gray-400 hover:border-gray-500 rounded-t text-gray-600 after:content[''] after:absolute after:top-full after:left-0 after:bg-[#5FA7F0] after:w-full after:h-[.18rem] after:scale-0 group-focus-within:after:scale-100 after:transition-all after:duration-300 ease-in-out`} >

                  <input
                    className={`input w-full bg-inherit px-2 pt-3 pb-1 outline-none text-black font-medium resize-none placeholder:text-transparent group-focus-within:placeholder:text-gray-600 placeholder:transition-colors placeholder:duration-200 ease-in`}
                    type="text"
                    id="city"
                    placeholder="Ingresa tu ciudad"
                    {...register('city', {
                      required: 'Este campo es requerido',
                    })}
                  />

                  <label
                    htmlFor="city"
                    className={`input__label absolute left-2 top-[50%] group-focus-within:top-[5%] -translate-y-1/2 group-focus-within:translate-y-0 text-gray-600 group-focus-within:text-[#5FA7F0] text-base group-focus-within:text-xs bg-inherit font-medium transition-[top transform] duration-200 cursor-text`}
                  >Ciudad</label>
                </div>

                <div className={`px-2 text-[.8rem] text-red-500 font-medium`} >
                  <span>{errors.city?.message}</span>
                </div>
              </div>  {/* END INPUT CITY */}

              <div className='w-full group'>
                <select
                  className={`relative w-full bg-gray-300 pt-2 border-b-[.15rem] border-gray-400 hover:border-gray-500 rounded-t text-gray-600 after:content[''] after:absolute after:top-full after:left-0 after:bg-[#5FA7F0] after:w-full after:h-[.18rem] after:scale-0 group-focus-within:after:scale-100 after:transition-all after:duration-300 ease-in-out outline-none p-4`}
                  id='country'
                  placeholder="Selecciona tu país"
                  defaultValue={countries[0].code}
                  {...register('country', {
                    required: 'Este campo es requerido',
                  })}
                >
                  {
                    countries.map(country => (
                      <option
                        value={country.code}
                        key={country.code}
                        className={`p-3`}
                      >
                        {country.name}
                      </option>
                    ))
                  }
                </select>

                <div className={`px-2 text-[.8rem] text-red-500 font-medium`} >
                  <span>{errors.country?.message}</span>
                </div>
              </div>  {/* END SELECT COUNTRY */}

              <div className="w-full group">
                <div className={`relative w-full bg-gray-300 pt-2 border-b-[.15rem] border-gray-400 hover:border-gray-500 rounded-t text-gray-600 after:content[''] after:absolute after:top-full after:left-0 after:bg-[#5FA7F0] after:w-full after:h-[.18rem] after:scale-0 group-focus-within:after:scale-100 after:transition-all after:duration-300 ease-in-out`} >

                  <input
                    className={`input w-full bg-inherit px-2 pt-3 pb-1 outline-none text-black font-medium resize-none placeholder:text-transparent group-focus-within:placeholder:text-gray-600 placeholder:transition-colors placeholder:duration-200 ease-in`}
                    type="number"
                    id="phone"
                    placeholder="Ingresa tu Teléfono"
                    {...register('phone', {
                      required: 'Este campo es requerido',
                    })}
                  />

                  <label
                    htmlFor="phone"
                    className={`input__label absolute left-2 top-[50%] group-focus-within:top-[5%] -translate-y-1/2 group-focus-within:translate-y-0 text-gray-600 group-focus-within:text-[#5FA7F0] text-base group-focus-within:text-xs bg-inherit font-medium transition-[top transform] duration-200 cursor-text`}
                  >Teléfono</label>
                </div>

                <div className={`px-2 text-[.8rem] text-red-500 font-medium`} >
                  <span>{errors.phone?.message}</span>
                </div>
              </div>  {/* END INPUT CITY */}

              <div className=''>
                <button
                  type='submit'
                  className='block bg-blue-500 w-full 2cs:w-[15rem] py-2 px-4 rounded text-white font-medium hover:bg-blue-600 transition duration-200 ease-in-out'
                >
                  Continuar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </ShopLayout>
  )
}

export default AddressPage