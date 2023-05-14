
import Image from 'next/image';
import Link from 'next/link';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import useSWR from 'swr';
import { AdminLayout } from '@/components';
import { IProduct } from '@/interfaces';

const columns: any = [
  { id: 'image', name: 'Imagen', width: '5rem' },
  { id: 'title', name: 'Titulo', width: '10rem' },
  { id: 'gender', name: 'Genero', width: '20rem' },
  { id: 'type', name: 'Tipo', width: '10rem' },
  { id: 'inStock', name: 'Inventario', width: '10rem' },
  { id: 'price', name: 'Precio', width: '10rem' },
  { id: 'sizes', name: 'Tallas', width: '10rem' },
];

const ProductsPage = () => {

  const { data, error } = useSWR<IProduct[]>('/admin/products');

  if (!data && !error) return <p>Cargando...</p>;

  const products = data || [];

  return (
    <AdminLayout title='Usuarios' pageDescription='Administración de usuarios'>
      <h1>Productos ({products.length})</h1>

      <div className='w-full min-h-[calc(100vh-15rem)] flex flex-col justify-between border-2 border-gray-200 rounded-md overflow-auto'>
        <div className='min-w-full w-full table-auto overflow-auto'>
          <table className='table-auto w-full'>
            <thead className='font-Jakart font-normal text-[.95rem] border-b border-gray-200 whitespace-nowrap'>
              <tr className="text-left" >
                {
                  columns.map((column: any) => (
                    <th key={column.id} className={`relative px-4 py-3 after:content[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-[.15rem] last:after:w-0 after:h-4 last:after:h-0 after:bg-gray-200`} style={{ width: column.width }}>{column.name}</th>
                  ))
                }
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 border-b border-gray-200 whitespace-nowrap text-gray-500 text-[.9rem] font-medium">
              {
                products.map((product) => (
                  <tr key={product._id}>
                    <td className="pl-2 py-2">
                      <Link href={`/product/${product.slug}`} >
                        <Image
                          alt={product.title}
                          src={`/products/${product.images[0]}`}
                          width={50}
                          height={50}
                          className="rounded-md object-cover"
                          priority
                        />
                      </Link>
                    </td>
                    <td className="pl-2 py-2">
                      <Link href={`/admin/products/${product.slug}`} className='hover:underline' >
                        {product.title}
                      </Link>
                    </td>
                    <td className="pl-2 py-2">{product.gender}</td>
                    <td className="pl-2 py-2">{product.type}</td>
                    <td className="pl-2 py-2">{product.inStock}</td>
                    <td className="pl-2 py-2">{product.price}</td>
                    <td className="pl-2 py-2">{product.sizes.join('-')}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>

        <div className='flex justify-end pb-3 text-xl'>
          <div className='flex items-center gap-3 text-gray-500'>
            <p className='text-[.8rem] text-gray-900'>1-6 de 6</p>

            <button
              className='hover:bg-gray-200 rounded-full p-1 transition-colors duration-200 ease-in-out'
            >
              <FiChevronLeft />
            </button>

            <button
              className='hover:bg-gray-200 rounded-full p-1 mr-4 transition-colors duration-200 ease-in-out'
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default ProductsPage;