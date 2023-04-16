import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { ShopLayout } from '@/components';

interface Column {
  id: string;
  name: string;
  width: string;
}

const columns: Column[] = [
  { id: 'id', name: 'ID', width: '5rem' },
  { id: 'fullName', name: 'Nombre completo', width: '20rem' },
  { id: 'paid', name: 'Pagado', width: '10rem' },
  { id: 'order', name: 'Ver orden', width: '10rem' },
  { id: 'hidden', name: '', width: 'rem' },
];

const rows = [
  {id: 1, fullName: 'Nombre completo', paid: true, order: 'Ver orden'},
  {id: 2, fullName: 'Nombre completo', paid: false, order: 'Ver orden'},
  {id: 3, fullName: 'Nombre completo', paid: true, order: 'Ver orden'},
]

const HistoryPage = () => {
  return (
    <ShopLayout title="Historial de ordenes" pageDescription="Historial de todas las ordenes">
      <section className='max-w-[75rem] px-2 2xs:px-4 mx-auto'>
        <h2 className='font-Gotham font-semibold text-xl 2xs:text-2xl pb-4'>Historial de compras</h2>
        <div className='w-full min-h-[calc(100vh-15rem)] flex flex-col justify-between border-2 border-gray-200 rounded-md overflow-auto'>
          <div className='min-w-full w-full table-auto overflow-auto'>
            <table className='table-auto w-full'>
              <thead className='font-Jakart font-normal text-[.95rem] border-b border-gray-200 whitespace-nowrap'>
                <tr className="text-left" >
                  {
                    columns.map((column) => (
                      <th key={column.id} className={`relative px-4 py-3 after:content[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-[.15rem] last:after:w-0 after:h-4 last:after:h-0 after:bg-gray-200`} style={{width: column.width}}>{column.name}</th>
                    ))
                  }
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 border-b border-gray-200 whitespace-nowrap text-gray-500 text-[.9rem] font-medium">
                {
                  rows.map((row) => (
                    <tr key={row.id}>
                      <td className="pl-2 py-2">{row.id}</td>
                      <td className="pl-2 py-2">{row.fullName}</td>
                      <td className="pl-2 py-2">
                        {
                          row.paid
                          ? <div className='px-4 py-[.1rem] text-green-500 border border-green-500 rounded-full w-max'>Pagado</div> 
                          : <div className='px-4 py-[.1rem] text-red-500 border border-red-500 rounded-full w-max'>No pagado</div> 
                        }
                      </td>
                      <td className="pl-2 py-2">{row.order}</td>
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
      </section>
    </ShopLayout>
  )
}

export default HistoryPage