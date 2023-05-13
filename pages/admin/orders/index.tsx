import { hipMarketApi } from '@/apis';
import { AdminLayout } from '@/components';
import { IOrder, IUser } from '@/interfaces';
import { formatDate } from '@/utils';
import Link from 'next/link';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import useSWR from 'swr';

const columns: any = [
  { id: 'id', name: 'ID', width: '5rem' },
  { id: 'name', name: 'Nombre', width: '10rem' },
  { id: 'email', name: 'Email', width: '20rem' },
  { id: 'total', name: 'Total', width: '10rem' },
  { id: 'isPaid', name: 'Pagada', width: '10rem' },
  { id: 'inStock', name: 'Nro. Productos', width: '10rem' },
  { id: 'check', name: 'Ver orden', width: '10rem' },
  { id: 'createdAt', name: 'F. creado', width: '10rem' },
];

const ordersPage = () => {

  const { data, isLoading } = useSWR<IOrder[]>('/order/all');

  if (isLoading) return <p>Cargando...</p>

  const handleChangeRole = async (_id: string, role: string) => {
    try {

    } catch (error) {
      console.log(error)
    }
  }

  const orders = data || []

  return (
    <AdminLayout title='Usuarios' pageDescription='Administración de usuarios'>
      <h1>Usuarios</h1>

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
                orders.map((order) => (
                  <tr key={order._id}>
                    <td className="pl-2 py-2">{order._id}</td>
                    <td className="pl-2 py-2">{(order.user as IUser).name} {(order.user as IUser).lastname}</td>
                    <td className="pl-2 py-2">{(order.user as IUser).email}</td>
                    <td className="pl-2 py-2">{order.total}</td>
                    <td className="pl-2 py-2">{
                      order.isPaid ? (
                        <span className='text-green-500'>Pagada</span>
                      ) : (
                        <span className='text-red-500'>No pagada</span>
                      )
                    }</td>
                    <td className="pl-2 py-2">{order.numberOfProducts}</td>
                    <td className="pl-2 py-2">
                      <Link href={`/admin/orders/${order._id}`} >
                        Ver orden
                      </Link>
                    </td>
                    <td className="pl-2 py-2">{formatDate(order.createdAt || Date.now().toString())}</td>
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

export default ordersPage;