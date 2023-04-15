import { ShopLayout } from '@/components'
import React from 'react'

const AddressPage = () => {
  return (
    <ShopLayout title='Dirección' pageDescription='Confirmar dirección del destino'>
      <section className='flex justify-center px-2'>
        <div className='max-w-[75rem] w-full'>
          <h2 className='font-Jakarta font-bold text-2xl'>Dirección de envío</h2>

          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-12'>
              <div className="w-full group">
                <div className={`relative bg-gray-300 pt-2 w-full border-b-[.15rem] border-gray-400 hover:border-gray-500 text-gray-600 after:bg-[#5FA7F0] after:content[''] after:absolute after:top-full after:left-0 after:w-full after:h-[.18rem] after:scale-0 focus-within:after:scale-100 after:transition-all after:duration-300 ease-in`} >

                  <input
                    className={`w-full px-2 pt-3 pb-1 outline-none text-black font-medium bg-inherit resize-none group-[:not(placeholder-shown)~]:bg-black`}
                    type="text"
                    name="name"
                    id="name"
                    placeholder=" "
                  />
                  
                  <label
                    htmlFor="name"
                    className={`absolute top-[50%] group-focus-within:top-[0] group-[:not(:placeholder-shown)]:top-[0] transform -translate-y-1/2 group-focus-within:translate-y-0 group-[:not(:placeholder-shown)]:translate-y-0 text-gray-600 group-focus-within:text-[#5FA7F0] group-[:not(:placeholder-shown)]:text-[#5FA7F0] text-base group-focus-within:text-xs group-[:not(:placeholder-shown)]:text-xs left-2 bg-inherit font-medium focus-within:top-0 transition-[top transform] duration-200 cursor-text`}
                  >Nombre</label>
                </div>

                <span className={`text-[.8rem] text-red-400 font-medium`} ></span>
              </div>
            </div>

            <div className='col-span-12'>
              <div className="w-full">
                <div className={`border-gray-400 text-gray-600 hover:border-white after:bg-[#5FA7F0] relative w-full border-b-[.15rem] after:content[''] after:absolute after:top-full after:left-0 after:w-full after:h-[.18rem] after:scale-0 focus-within:after:scale-100 after:transition-all after:duration-300 ease-in`} >

                  <input
                    className={`inputs__input ${false? 'inputs__input-error': ''} w-full px-2 pt-3 pb-1 outline-none text-white font-normal bg-inherit resize-none`}
                    type="email"
                    name="email"
                    id="email"
                    placeholder=" "
                    autoComplete="off"
                  />
                  
                  <label
                    htmlFor="email"
                    className={`absolute top-[50%] group-focus-within:top-[5%] group-[:not(:placeholder-shown)]:top-[5%] transform -translate-y-1/2 group-focus-within:translate-y-0 group-[:not(:placeholder-shown)]:translate-y-0 text-gray-600 group-focus-within:text-[#5FA7F0] group-[:not(:placeholder-shown)]:text-[#5FA7F0] text-base group-focus-within:text-xs group-[:not(:placeholder-shown)]:text-xs left-2 font-medium bg-inherit focus-within:top-0 transition-[top transform] duration-200 cursor-text`}
                  >Correo</label>
                </div>

                <span className={`${false? 'block' : 'hidden'} text-[.8rem] text-red-400 font-medium`} ></span>
              </div>

              <div className="w-full">
                <div className="relative">
                  <input
                    className="block w-full px-2 pt-3 pb-1 outline-none text-black font-normal bg-inherit resize-none group-focus-within:text-[#5FA7F0] group-focus-within:pt-4 group-focus-within:pb-2"
                    type="text"
                    name="prueba"
                    id="prueba"
                    placeholder=" "
                    autoComplete="off"
                  />
                  <label
                    htmlFor="prueba"
                    className="absolute left-2 font-medium bg-inherit text-gray-300 top-1/2 transform -translate-y-1/2 group-focus-within:top-0 group-focus-within:text-[#5FA7F0] group-focus-within:text-sm group-focus-within:translate-y-[-15px] transition-all duration-200 cursor-text"
                  >
                    Correo
                  </label>
                </div>
                <span className="block text-[.8rem] text-red-400 font-medium group-focus-within:block">Hola</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ShopLayout>
  )
}

export default AddressPage