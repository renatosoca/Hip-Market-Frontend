import { useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import { Controller, useForm } from 'react-hook-form';

import { AdminLayout } from '@/components';
import { IProduct, IProductBySlug, ISizes, ITypes } from '@/interfaces';
import { hipMarketApi } from '@/apis';
import { generateSlug } from '@/utils';
import { useRouter } from 'next/router';

const validTypes: ITypes[] = ['shirts', 'pants', 'hoodies', 'hats']
const validSizes: ISizes[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']
const validGender = ['men', 'women', 'kid', 'unisex']

interface Props {
  product: IProduct;
}

interface FormData {
  _id?: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ISizes[];
  slug: string;
  tags: string[];
  title: string;
  type: ITypes;
  gender: string;
}

const ProductAdminPage: NextPage<Props> = ({ product }) => {

  const router = useRouter();

  const [newTagValue, setNewTagValue] = useState('');
  const [isSaving, setIsSaving] = useState(false)

  const { register, handleSubmit, control, formState: { errors }, getValues, setValue } = useForm<FormData>({
    defaultValues: product,
  });

  const handleSubmitProduct = async (form: FormData) => {
    if (form.images.length < 2) return console.log('Minimo 2 imagenes');
    setIsSaving(true);

    try {
      const { data } = await hipMarketApi({
        url: form._id ? `/products/product/${product._id}` : '/products/create',
        method: form._id ? 'PUT' : 'POST',
        data: form,
      });
      console.log(data)

      if (!form._id) {
        router.replace(`/admin/products/${form.slug}`);
      } else {
        setIsSaving(false);
        router.replace(`/admin/products/${form.slug}`);
      }

    } catch (error) {
      console.log(error)
    }
  }

  const handleNewTag = () => {
    const newTag = newTagValue.trim().replace(/[^\w-]+/g, "").toLowerCase();
    const currentTags = getValues('tags');
    setNewTagValue(''.trim());

    if (currentTags.includes(newTag)) return;

    return setValue('tags', [...currentTags, newTag], { shouldValidate: true });
  }

  const handleDeleteTag = (tagValue: string) => {
    const updatedTags = getValues('tags').filter(tag => tag !== tagValue);

    return setValue('tags', updatedTags, { shouldValidate: true });
  }

  return (
    <AdminLayout title={product.title ? product.title : 'Crear Producto'} pageDescription="">
      {
        product._id && (
          <h1>Producto: {product.title}</h1>
        )
      }

      <form onSubmit={handleSubmit(handleSubmitProduct)} className="grid grid-cols-12 gap-4">
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
                  onChange: (({ target }) => setValue('slug', generateSlug(target.value)))
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
              <Controller
                name="description"
                rules={{
                  required: 'Este campo es requerido',
                }}
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <textarea
                    {...field}
                    className={`input w-full bg-inherit px-2 pt-3 pb-1 outline-none text-black font-medium resize-none placeholder:text-transparent group-focus-within:placeholder:text-gray-600 placeholder:transition-colors placeholder:duration-200 ease-in`}
                    id="description"
                    placeholder="Ingresa la descripción del producto"
                    autoComplete='off'
                    rows={5}
                    cols={5}
                  />
                )}
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
                  min: { value: 0, message: 'El valor minimo es 0' }
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
                step="0.01"
                list='prices'
                {...register('price', {
                  required: 'Este campo es requerido',
                  min: { value: 0, message: 'El valor minimo es 0' }
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
              <span>{errors.price?.message}</span>
            </div>
          </div>  {/* END INPUT PRICE */}

          <div className="w-full group">
            <h2>Tipo</h2>

            <Controller
              name="type"
              control={control}
              defaultValue={undefined}
              render={({ field }) => (
                <div className={`flex gap-2 `} >
                  {
                    validTypes.map((type) => (
                      <label htmlFor={type} key={type}>
                        <input
                          {...field}
                          type="radio"
                          id={type}
                          value={type}
                          autoComplete='off'
                          checked={field.value === type}
                        />
                        {type}
                      </label>
                    ))
                  }
                </div>
              )}
            />

            <div className={`px-2 text-[.8rem] text-red-500 font-medium`} >
              <span>{errors.type?.message}</span>
            </div>
          </div>  {/* END RADIO TYPE */}

          <div className="w-full group">
            <h2>Género</h2>

            <Controller
              name="gender"
              control={control}
              defaultValue={undefined}
              render={({ field }) => (
                <div className={`flex gap-2 `} >
                  {
                    validGender.map((gender) => (
                      <label htmlFor={gender} key={gender}>
                        <input
                          {...field}
                          type="radio"
                          id={gender}
                          value={gender}
                          autoComplete='off'
                          checked={field.value === gender}
                        />
                        {gender}
                      </label>
                    ))
                  }
                </div>
              )}
            />

            <div className={`px-2 text-[.8rem] text-red-500 font-medium`} >
              <span>{errors.gender?.message}</span>
            </div>
          </div>  {/* END RADIO GENDER */}

          <div className="w-full group">
            <h2>Tallas</h2>

            <Controller
              name="sizes"
              control={control}
              rules={{ required: 'Este campo es requerido' }}
              render={({ field }) => (
                <div className={`flex gap-2 `} >
                  {
                    validSizes.map((size) => (
                      <label htmlFor={size} key={size}>
                        <input
                          {...field}
                          type="checkbox"
                          id={size}
                          value={size}
                          autoComplete='off'
                          checked={field.value.some((value) => value === size)}
                          onChange={({ target: { value, checked } }) => {
                            checked
                              ? field.onChange([...field.value, value])
                              : field.onChange(field.value.filter((value) => value !== size));
                          }}
                        />
                        {size}
                      </label>
                    ))
                  }
                </div>
              )}
            />

            <div className={`px-2 text-[.8rem] text-red-500 font-medium`} >
              <span>{(`${(errors.sizes)?.message || ''}`)}</span>
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
                  validate: (val) => val.trim().includes(' ') ? 'No puede tener espacios en blanco' : undefined
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
              <span>{errors.slug?.message}</span>
            </div>
          </div>  {/* END INPUT SLUG */}

          <div className="w-full group">
            <div className={`relative w-full bg-gray-300 pt-2 border-b-[.15rem] border-gray-400 rounded-t text-gray-600 hover:border-gray-500 
              after:content[''] after:absolute after:top-full after:left-0 after:bg-[#5FA7F0] after:w-full after:h-[.18rem] after:scale-0 group-focus-within:after:scale-100 after:transition-all after:duration-300 ease-in-out `}
            >
              <input
                className={`input w-full bg-inherit px-2 pt-3 pb-1 outline-none text-black font-medium resize-none placeholder:text-transparent group-focus-within:placeholder:text-gray-600 placeholder:transition-colors placeholder:duration-200 ease-in`}
                type="text"
                id="tags"
                placeholder="Ingresa un tag"
                autoComplete='off'
                value={newTagValue}
                onChange={({ target }) => setNewTagValue(target.value)}
                onKeyDown={({ code }) => code === 'Space' ? handleNewTag() : undefined}
                onBlur={() => setNewTagValue('')}
              />

              <label
                htmlFor="tags"
                className={`input__label absolute left-2 top-[50%] group-focus-within:top-[5%] -translate-y-1/2 group-focus-within:translate-y-0 text-gray-600 group-focus-within:text-[#5FA7F0] text-base group-focus-within:text-xs bg-inherit font-medium transition-[top transform] duration-200 cursor-text`}
              >
                Etiquetas
              </label>
            </div>

            <div className={`px-2 text-[.8rem] text-red-500 font-medium`} >
              <span>{errors.tags?.message}</span>
            </div>

            <ul>
              {
                getValues('tags').map((tag) => (
                  <li key={tag}>
                    <span className='bg-blue-500 px-2 py-1 rounded-full text-white'>{tag}</span>
                    <button onClick={() => handleDeleteTag(tag)} type='button' >X</button>
                  </li>
                ))
              }
            </ul>
          </div>  {/* END INPUT TAGS */}

          <div>
            <h2>Imagenes</h2>

            <button type="button" className="bg-blue-500 w-full py-1 rounded-lg text-white">
              <label htmlFor="">
                <input type="file" name="" id="" />
              </label>
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

        <div className="col-span-12 flex justify-center bg-blue-500 py-2 px-4 rounded-lg text-white">
          <button
            type="submit"
          >
            Agregar
          </button>
        </div>
      </form>
    </AdminLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  const { slug = '' } = query;

  let product: IProduct | null;

  if (slug === 'new') {
    const tempProduct: IProduct = {
      _id: '',
      title: '',
      slug: '',
      description: '',
      price: 0,
      images: ['hola.jpg', 'adios.jpg'],
      tags: [],
      inStock: 0,
      sizes: [],
      type: 'shirts',
      gender: 'men',
    }
    product = tempProduct;
  } else {
    product = await (await hipMarketApi.get<IProductBySlug>(`/products/${slug}`)).data.product;
  }

  if (!product) {
    return {
      redirect: {
        destination: '/admin/products',
        permanent: false
      }
    }
  }

  return {
    props: {
      product,
    }
  }
}

export default ProductAdminPage