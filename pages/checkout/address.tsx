import { ShopLayout } from '@/components';

const AddressPage = () => {
  return (
    <ShopLayout title='Dirección' pageDescription='Confirmar dirección del destino'>
      <section className='flex justify-center px-2'>
        <div className='max-w-[75rem] w-full'>
          <h2 className='font-Jakarta font-bold text-2xl'>Dirección de envío</h2>

          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-12'>
              <div className="w-full group">
                <div className={`relative w-full bg-gray-300 pt-2 border-b-[.15rem] border-gray-400 hover:border-gray-500 rounded-t text-gray-600 after:content[''] after:absolute after:top-full after:left-0 after:bg-[#5FA7F0] after:w-full after:h-[.18rem] after:scale-0 group-focus-within:after:scale-100 after:transition-all after:duration-300 ease-in-out`} >

                  <input
                    className={`input w-full bg-inherit px-2 pt-3 pb-1 outline-none text-black font-medium resize-none placeholder:text-transparent group-focus-within:placeholder:text-gray-600 placeholder:transition-colors placeholder:duration-200 ease-in`}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Ingresa tu nombre"
                  />
                  
                  <label
                    htmlFor="name"
                    className={`input__label absolute left-2 top-[50%] group-focus-within:top-[5%] -translate-y-1/2 group-focus-within:translate-y-0 text-gray-600 group-focus-within:text-[#5FA7F0] text-base group-focus-within:text-xs bg-inherit font-medium transition-[top transform] duration-200 cursor-text`}
                  >Nombre</label>
                </div>

                <div className={`px-2 text-[.8rem] text-red-500 font-medium`} >
                  <span></span>
                </div>
              </div>  {/* END INPUT NAME */}
              
              <div className="w-full group">
                <div className={`relative w-full bg-gray-300 pt-2 border-b-[.15rem] border-gray-400 hover:border-gray-500 rounded-t text-gray-600 after:content[''] after:absolute after:top-full after:left-0 after:bg-[#5FA7F0] after:w-full after:h-[.18rem] after:scale-0 group-focus-within:after:scale-100 after:transition-all after:duration-300 ease-in-out`} >

                  <input
                    className={`input w-full bg-inherit px-2 pt-3 pb-1 outline-none text-black font-medium resize-none placeholder:text-transparent group-focus-within:placeholder:text-gray-600 placeholder:transition-colors placeholder:duration-200 ease-in`}
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Ingresa tu apellido"
                  />
                  
                  <label
                    htmlFor="lastname"
                    className={`input__label absolute left-2 top-[50%] group-focus-within:top-[5%] -translate-y-1/2 group-focus-within:translate-y-0 text-gray-600 group-focus-within:text-[#5FA7F0] text-base group-focus-within:text-xs bg-inherit font-medium transition-[top transform] duration-200 cursor-text`}
                  >Apellido</label>
                </div>

                <div className={`px-2 text-[.8rem] text-red-500 font-medium`} >
                  <span></span>
                </div>
              </div>  {/* END INPUT LASTNAME */}

              <div className="w-full group">
                <div className={`relative w-full bg-gray-300 pt-2 border-b-[.15rem] border-gray-400 hover:border-gray-500 rounded-t text-gray-600 after:content[''] after:absolute after:top-full after:left-0 after:bg-[#5FA7F0] after:w-full after:h-[.18rem] after:scale-0 group-focus-within:after:scale-100 after:transition-all after:duration-300 ease-in-out`} >

                  <input
                    className={`input w-full bg-inherit px-2 pt-3 pb-1 outline-none text-black font-medium resize-none placeholder:text-transparent group-focus-within:placeholder:text-gray-600 placeholder:transition-colors placeholder:duration-200 ease-in`}
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Ingresa tu dirección"
                  />
                  
                  <label
                    htmlFor="address"
                    className={`input__label absolute left-2 top-[50%] group-focus-within:top-[5%] -translate-y-1/2 group-focus-within:translate-y-0 text-gray-600 group-focus-within:text-[#5FA7F0] text-base group-focus-within:text-xs bg-inherit font-medium transition-[top transform] duration-200 cursor-text`}
                  >Dirección</label>
                </div>

                <div className={`px-2 text-[.8rem] text-red-500 font-medium`} >
                  <span></span>
                </div>
              </div>  {/* END INPUT ADDRESS */}

              <div className="w-full group">
                <div className={`relative w-full bg-gray-300 pt-2 border-b-[.15rem] border-gray-400 hover:border-gray-500 rounded-t text-gray-600 after:content[''] after:absolute after:top-full after:left-0 after:bg-[#5FA7F0] after:w-full after:h-[.18rem] after:scale-0 group-focus-within:after:scale-100 after:transition-all after:duration-300 ease-in-out`} >

                  <input
                    className={`input w-full bg-inherit px-2 pt-3 pb-1 outline-none text-black font-medium resize-none placeholder:text-transparent group-focus-within:placeholder:text-gray-600 placeholder:transition-colors placeholder:duration-200 ease-in`}
                    type="text"
                    name="address-2"
                    id="address-2"
                    placeholder="Ingresa tu segunda dirección"
                  />
                  
                  <label
                    htmlFor="address-2"
                    className={`input__label absolute left-2 top-[50%] group-focus-within:top-[5%] -translate-y-1/2 group-focus-within:translate-y-0 text-gray-600 group-focus-within:text-[#5FA7F0] text-base group-focus-within:text-xs bg-inherit font-medium transition-[top transform] duration-200 cursor-text`}
                  >Dirección 2 (opcional)</label>
                </div>

                <div className={`px-2 text-[.8rem] text-red-500 font-medium`} >
                  <span></span>
                </div>
              </div>  {/* END INPUT ADDRESS 2 */}

              <div className="w-full group">
                <div className={`relative w-full bg-gray-300 pt-2 border-b-[.15rem] border-gray-400 hover:border-gray-500 rounded-t text-gray-600 after:content[''] after:absolute after:top-full after:left-0 after:bg-[#5FA7F0] after:w-full after:h-[.18rem] after:scale-0 group-focus-within:after:scale-100 after:transition-all after:duration-300 ease-in-out`} >

                  <input
                    className={`input w-full bg-inherit px-2 pt-3 pb-1 outline-none text-black font-medium resize-none placeholder:text-transparent group-focus-within:placeholder:text-gray-600 placeholder:transition-colors placeholder:duration-200 ease-in`}
                    type="text"
                    name="postalCode"
                    id="postalCode"
                    placeholder="Ingresa tu código postal"
                  />
                  
                  <label
                    htmlFor="postalCode"
                    className={`input__label absolute left-2 top-[50%] group-focus-within:top-[5%] -translate-y-1/2 group-focus-within:translate-y-0 text-gray-600 group-focus-within:text-[#5FA7F0] text-base group-focus-within:text-xs bg-inherit font-medium transition-[top transform] duration-200 cursor-text`}
                  >Código Postal</label>
                </div>

                <div className={`px-2 text-[.8rem] text-red-500 font-medium`} >
                  <span></span>
                </div>
              </div>  {/* END INPUT POSTAL CODE */}

              <div className="w-full group">
                <div className={`relative w-full bg-gray-300 pt-2 border-b-[.15rem] border-gray-400 hover:border-gray-500 rounded-t text-gray-600 after:content[''] after:absolute after:top-full after:left-0 after:bg-[#5FA7F0] after:w-full after:h-[.18rem] after:scale-0 group-focus-within:after:scale-100 after:transition-all after:duration-300 ease-in-out`} >

                  <input
                    className={`input w-full bg-inherit px-2 pt-3 pb-1 outline-none text-black font-medium resize-none placeholder:text-transparent group-focus-within:placeholder:text-gray-600 placeholder:transition-colors placeholder:duration-200 ease-in`}
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Ingresa tu ciudad"
                  />
                  
                  <label
                    htmlFor="city"
                    className={`input__label absolute left-2 top-[50%] group-focus-within:top-[5%] -translate-y-1/2 group-focus-within:translate-y-0 text-gray-600 group-focus-within:text-[#5FA7F0] text-base group-focus-within:text-xs bg-inherit font-medium transition-[top transform] duration-200 cursor-text`}
                  >Ciudad</label>
                </div>

                <div className={`px-2 text-[.8rem] text-red-500 font-medium`} >
                  <span></span>
                </div>
              </div>  {/* END INPUT CITY */}
            </div>
          </div>
        </div>
      </section>
    </ShopLayout>
  )
}

export default AddressPage