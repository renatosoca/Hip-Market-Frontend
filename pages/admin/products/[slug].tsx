import { GetServerSideProps, NextPage } from "next";
import { AdminLayout } from "@/components";
import { useForm } from "react-hook-form";
import { IProduct, IProductBySlug, ISizes, ITypes } from "@/interfaces";
import { hipMarketApi } from "@/apis";
import Image from "next/image";

const validTypes = ['shirts', 'pants', 'hoodies', 'hats']
const validGender = ['men', 'women', 'kid', 'unisex']
const validSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']

interface Props {
  product: IProduct;
}

interface FormData {
  title: string;
  description: string;
  inStock: number;
  price: number;
  slug: string;
  type: ITypes;
  gender: string;
  sizes: ISizes[];


  images: string[];
}

const ProductAdminPage: NextPage<Props> = ({ product }) => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  return (
    <AdminLayout title="Producto" pageDescription="">
      <h1>Producto: {product.slug.toUpperCase()}</h1>

      <form className="grid grid-cols-12 gap-4">
        <div className="col-span-6 flex flex-col gap-2" >
          <div className="w-full group">
            <div className={`relative w-full bg-gray-300 pt-2 border-b-[.15rem] border-gray-400 rounded-t text-gray-600 hover:border-gray-500 
              after:content[''] after:absolute after:top-full after:left-0 after:bg-[#5FA7F0] after:w-full after:h-[.18rem] after:scale-0 group-focus-within:after:scale-100 after:transition-all after:duration-300 ease-in-out `}
            >

              <input
                className={`input w-full bg-inherit px-2 pt-3 pb-1 outline-none text-black font-medium resize-none placeholder:text-transparent group-focus-within:placeholder:text-gray-600 placeholder:transition-colors placeholder:duration-200 ease-in`}
                type="text"
                id="title"
                placeholder="Ingresa el titulo del producto"
                autoComplete='off'
                {...register('title', {
                  required: 'Este campo es requerido',
                })}
              />

              <label
                htmlFor="title"
                className={`input__label absolute left-2 top-[50%] group-focus-within:top-[5%] -translate-y-1/2 group-focus-within:translate-y-0 text-gray-600 group-focus-within:text-[#5FA7F0] text-base group-focus-within:text-xs bg-inherit font-medium transition-[top transform] duration-200 cursor-text`}
              >
                Titulo
              </label>
            </div>

            <div className={`px-2 text-[.8rem] text-red-500 font-medium`} >
              <span>{errors.title?.message}</span>
            </div>
          </div>  {/* END INPUT TITLE */}

          <div className="w-full group">
            <div className={`relative w-full bg-gray-300 pt-2 border-b-[.15rem] border-gray-400 rounded-t text-gray-600 hover:border-gray-500 
              after:content[''] after:absolute after:top-full after:left-0 after:bg-[#5FA7F0] after:w-full after:h-[.18rem] after:scale-0 group-focus-within:after:scale-100 after:transition-all after:duration-300 ease-in-out `}
            >

              <input
                className={`input w-full bg-inherit px-2 pt-3 pb-1 outline-none text-black font-medium resize-none placeholder:text-transparent group-focus-within:placeholder:text-gray-600 placeholder:transition-colors placeholder:duration-200 ease-in`}
                type="text"
                id="description"
                placeholder="Ingresa la descripcioón del producto"
                autoComplete='off'
                {...register('description', {
                  required: 'Este campo es requerido',
                })}
              />

              <label
                htmlFor="description"
                className={`input__label absolute left-2 top-[50%] group-focus-within:top-[5%] -translate-y-1/2 group-focus-within:translate-y-0 text-gray-600 group-focus-within:text-[#5FA7F0] text-base group-focus-within:text-xs bg-inherit font-medium transition-[top transform] duration-200 cursor-text`}
              >
                Descripcion
              </label>
            </div>

            <div className={`px-2 text-[.8rem] text-red-500 font-medium`} >
              <span>{errors.description?.message}</span>
            </div>
          </div>  {/* END INPUT DESCRIPTION */}

          <div className="w-full group">
            <div className={`relative w-full bg-gray-300 pt-2 border-b-[.15rem] border-gray-400 rounded-t text-gray-600 hover:border-gray-500 
              after:content[''] after:absolute after:top-full after:left-0 after:bg-[#5FA7F0] after:w-full after:h-[.18rem] after:scale-0 group-focus-within:after:scale-100 after:transition-all after:duration-300 ease-in-out `}
            >

              <input
                className={`input w-full bg-inherit px-2 pt-3 pb-1 outline-none text-black font-medium resize-none placeholder:text-transparent group-focus-within:placeholder:text-gray-600 placeholder:transition-colors placeholder:duration-200 ease-in`}
                type="number"
                id="inStock"
                placeholder="Ingresa la descripcioón del producto"
                autoComplete='off'
                {...register('inStock', {
                  required: 'Este campo es requerido',
                })}
              />

              <label
                htmlFor="inStock"
                className={`input__label absolute left-2 top-[50%] group-focus-within:top-[5%] -translate-y-1/2 group-focus-within:translate-y-0 text-gray-600 group-focus-within:text-[#5FA7F0] text-base group-focus-within:text-xs bg-inherit font-medium transition-[top transform] duration-200 cursor-text`}
              >
                Inventario
              </label>
            </div>

            <div className={`px-2 text-[.8rem] text-red-500 font-medium`} >
              <span>{errors.inStock?.message}</span>
            </div>
          </div>  {/* END INPUT INSTOCK */}

          <div className="w-full group">
            <div className={`relative w-full bg-gray-300 pt-2 border-b-[.15rem] border-gray-400 rounded-t text-gray-600 hover:border-gray-500 
              after:content[''] after:absolute after:top-full after:left-0 after:bg-[#5FA7F0] after:w-full after:h-[.18rem] after:scale-0 group-focus-within:after:scale-100 after:transition-all after:duration-300 ease-in-out `}
            >
              <input
                className={`input w-full bg-inherit px-2 pt-3 pb-1 outline-none text-black font-medium resize-none placeholder:text-transparent group-focus-within:placeholder:text-gray-600 placeholder:transition-colors placeholder:duration-200 ease-in`}
                type="number"
                id="price"
                placeholder="Ingresa la descripcioón del producto"
                autoComplete='off'
                {...register('price', {
                  required: 'Este campo es requerido',
                })}
              />

              <label
                htmlFor="price"
                className={`input__label absolute left-2 top-[50%] group-focus-within:top-[5%] -translate-y-1/2 group-focus-within:translate-y-0 text-gray-600 group-focus-within:text-[#5FA7F0] text-base group-focus-within:text-xs bg-inherit font-medium transition-[top transform] duration-200 cursor-text`}
              >
                Precio
              </label>
            </div>

            <div className={`px-2 text-[.8rem] text-red-500 font-medium`} >
              <span>{errors.description?.message}</span>
            </div>
          </div>  {/* END INPUT PRICE */}

          <div className="w-full group">
            <h2>Tipo</h2>

            <div className={`flex gap-2 `}
            >
              {
                validTypes.map((size) => (
                  <label htmlFor={size} key={size}>
                    <input
                      className={``}
                      type="radio"
                      id={size}
                      value={size}
                      autoComplete='off'
                      {...register('price', {
                        required: 'Este campo es requerido',
                      })}
                    />
                    {size}
                  </label>
                ))
              }
            </div>

            <div className={`px-2 text-[.8rem] text-red-500 font-medium`} >
              <span>{errors.type?.message}</span>
            </div>
          </div>  {/* END RADIO TYPE */}

          <div className="w-full group">
            <h2>Género</h2>

            <div className={`flex gap-2 `}
            >
              {
                validGender.map((size) => (
                  <label htmlFor={size} key={size}>
                    <input
                      className={``}
                      type="radio"
                      id={size}
                      value={size}
                      autoComplete='off'
                      {...register('price', {
                        required: 'Este campo es requerido',
                      })}
                    />
                    {size}
                  </label>
                ))
              }
            </div>

            <div className={`px-2 text-[.8rem] text-red-500 font-medium`} >
              <span>{errors.gender?.message}</span>
            </div>
          </div>  {/* END RADIO GENDER */}

          <div className="w-full group">
            <h2>Tallas</h2>

            <div className={`flex gap-2 `}
            >
              {
                validSizes.map((size) => (
                  <label htmlFor={size} key={size}>
                    <input
                      className={``}
                      type="checkbox"
                      id={size}
                      value={size}
                      autoComplete='off'
                      {...register('price', {
                        required: 'Este campo es requerido',
                      })}
                    />
                    {size}
                  </label>
                ))
              }
            </div>

            <div className={`px-2 text-[.8rem] text-red-500 font-medium`} >
              <span>{errors.gender?.message}</span>
            </div>
          </div>  {/* END CHECKBOX SIZES */}
        </div>

        <div className="col-span-6 flex flex-col gap-2" >
          <div className="w-full group">
            <div className={`relative w-full bg-gray-300 pt-2 border-b-[.15rem] border-gray-400 rounded-t text-gray-600 hover:border-gray-500 
              after:content[''] after:absolute after:top-full after:left-0 after:bg-[#5FA7F0] after:w-full after:h-[.18rem] after:scale-0 group-focus-within:after:scale-100 after:transition-all after:duration-300 ease-in-out `}
            >

              <input
                className={`input w-full bg-inherit px-2 pt-3 pb-1 outline-none text-black font-medium resize-none placeholder:text-transparent group-focus-within:placeholder:text-gray-600 placeholder:transition-colors placeholder:duration-200 ease-in`}
                type="text"
                id="slug"
                placeholder="Ingresa el titulo del producto"
                autoComplete='off'
                {...register('slug', {
                  required: 'Este campo es requerido',
                })}
              />

              <label
                htmlFor="slug"
                className={`input__label absolute left-2 top-[50%] group-focus-within:top-[5%] -translate-y-1/2 group-focus-within:translate-y-0 text-gray-600 group-focus-within:text-[#5FA7F0] text-base group-focus-within:text-xs bg-inherit font-medium transition-[top transform] duration-200 cursor-text`}
              >
                Slug - URL
              </label>
            </div>

            <div className={`px-2 text-[.8rem] text-red-500 font-medium`} >
              <span>{errors.title?.message}</span>
            </div>
          </div>  {/* END INPUT SLUG */}

          <div className="w-full group">
            <div className={`relative w-full bg-gray-300 pt-2 border-b-[.15rem] border-gray-400 rounded-t text-gray-600 hover:border-gray-500 
              after:content[''] after:absolute after:top-full after:left-0 after:bg-[#5FA7F0] after:w-full after:h-[.18rem] after:scale-0 group-focus-within:after:scale-100 after:transition-all after:duration-300 ease-in-out `}
            >

              <input
                className={`input w-full bg-inherit px-2 pt-3 pb-1 outline-none text-black font-medium resize-none placeholder:text-transparent group-focus-within:placeholder:text-gray-600 placeholder:transition-colors placeholder:duration-200 ease-in`}
                type="text"
                id="slug"
                placeholder="Ingresa el titulo del producto"
                autoComplete='off'
                {...register('slug', {
                  required: 'Este campo es requerido',
                })}
              />

              <label
                htmlFor="slug"
                className={`input__label absolute left-2 top-[50%] group-focus-within:top-[5%] -translate-y-1/2 group-focus-within:translate-y-0 text-gray-600 group-focus-within:text-[#5FA7F0] text-base group-focus-within:text-xs bg-inherit font-medium transition-[top transform] duration-200 cursor-text`}
              >
                Etiquetas
              </label>
            </div>

            <div className={`px-2 text-[.8rem] text-red-500 font-medium`} >
              <span>{errors.title?.message}</span>
            </div>
          </div>  {/* END INPUT LABELS */}

          <div className="w-full group">
            <div>
              <ul>
                {
                  product.tags.map((tag) => (
                    <li key={tag}>
                      <span className='bg-blue-500 px-2 py-1 rounded-full text-white'>{tag}</span>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className={`px-2 text-[.8rem] text-red-500 font-medium`} >
              <span>{errors.title?.message}</span>
            </div>
          </div>  {/* END INPUT TAGS */}

          <div>
            <h2>Imagenes</h2>

            <button type="button" className="bg-blue-500 w-full py-1 rounded-lg text-white">
              <span>Subir imagen</span>
            </button>

            <div className="flex gap-3" >
              {
                product.images.length < 2 && (
                  <span>Es necesario 2 imagenes</span>
                )
              }
              {
                product.images.map((image) => (
                  <div key={image} className="flex flex-col gap-2">
                    <Image
                      src={`/products/${image}`}
                      alt={image}
                      className=" object-cover"
                      width={80}
                      height={80}
                      priority
                    />
                    <button type="button" className="bg-red-500 w-full py-1 rounded-lg text-white">
                      <span>Eliminar</span>
                    </button>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </form>
    </AdminLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

  const { slug = '' } = params as { slug: string };
  const { data } = await hipMarketApi.get<IProductBySlug>(`/products/${slug}`);

  if (!data.product) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      product: data.product,
    }
  }
}

export default ProductAdminPage