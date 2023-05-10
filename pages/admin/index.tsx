import { BsFillClipboard2DataFill, BsFillClipboard2XFill } from 'react-icons/bs';
import { FaDollyFlatbed, FaUsers } from 'react-icons/fa';
import { MdOutlineCreditCard, MdOutlineCreditCardOff } from 'react-icons/md';
import { HiOutlinePresentationChartLine } from 'react-icons/hi'
import { TbRefreshDot } from 'react-icons/tb';
import { RxDashboard } from 'react-icons/rx'

import useSWR from 'swr';

import { AdminLayout, ItemSummaryTile } from '@/components';
import { IDashboardSummaryResponse } from '@/interfaces';
import { useEffect, useState } from 'react';

const index = () => {

  const { data, error, isLoading } = useSWR<IDashboardSummaryResponse>('/admin/dashboard', {
    refreshInterval: 1000 * 30,
  })

  const [refreshIn, setRefreshIn] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshIn((refreshIn) => refreshIn > 0 ? refreshIn - 1 : 30);
    }, 1000);

    return () => clearInterval(interval);
  }, [])

  if (isLoading) return <div>Cargando...</div>

  return (
    <AdminLayout title='Dashboard' pageDescription='Panel de Resumen del negocio' >
      <div className='flex gap-2 items-center '>
        <RxDashboard />
        <h1>Dashboard</h1>
      </div>

      <div className='grid grid-cols-12'>
        <div className='col-span-3'>
          <ItemSummaryTile
            title={data?.numberOfOrders || 0}
            subTitle='Ordenes Totales'
            icon={<FaDollyFlatbed />}
          />
        </div>

        <div className='col-span-3'>
          <ItemSummaryTile
            title={data?.paidOrders || 0}
            subTitle='Ordenes pagadas'
            icon={<MdOutlineCreditCard />}
          />
        </div>

        <div className='col-span-3'>
          <ItemSummaryTile
            title={data?.notPaidOrders || 0}
            subTitle='Ordenes pendientes de pago'
            icon={<MdOutlineCreditCardOff />}
          />
        </div>

        <div className='col-span-3'>
          <ItemSummaryTile
            title={data?.numberOfClients || 0}
            subTitle='Clientes Totales'
            icon={<FaUsers />}
          />
        </div>

        <div className='col-span-3'>
          <ItemSummaryTile
            title={data?.numberOfProducts || 0}
            subTitle='Productos Totales'
            icon={<HiOutlinePresentationChartLine />}
          />
        </div>

        <div className='col-span-3'>
          <ItemSummaryTile
            title={data?.productsWithNoInventory || 0}
            subTitle='Sin Stocks'
            icon={<BsFillClipboard2XFill />}
          />
        </div>

        <div className='col-span-3'>
          <ItemSummaryTile
            title={data?.lowInventory || 0}
            subTitle='Bajo inventario'
            icon={<BsFillClipboard2DataFill />}
          />
        </div>

        <div className='col-span-3'>
          <ItemSummaryTile
            title={refreshIn}
            subTitle={`Actualización en: ${8}`}
            icon={<TbRefreshDot />}
          />
        </div>
      </div>
    </AdminLayout>
  )
}

export default index