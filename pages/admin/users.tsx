import { hipMarketApi } from '@/apis';
import { AdminLayout } from '@/components';
import { IUser } from '@/interfaces';
import React, { useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import useSWR from 'swr';

const columns: any = [
  { id: 'id', name: 'ID', width: '5rem' },
  { id: 'name', name: 'Nombre', width: '10rem' },
  { id: 'email', name: 'Email', width: '20rem' },
  { id: 'role', name: 'Rol', width: '10rem' },
];

const usersPage = () => {

  const { data, isLoading } = useSWR('/user/all');
  const [allUsers, setAllUsers] = useState<IUser[]>([]);

  useEffect(() => {
    if (data) {
      setAllUsers(data?.users);
    }

  }, [data])

  if (isLoading) return <p>Cargando...</p>

  const handleChangeRole = async (_id: string, role: string) => {

    const previusUsers = allUsers.map((user) => ({ ...user }));
    const updatedUsers = allUsers.map((user) => ({ ...user, role: user._id === _id ? role : user.role }));
    setAllUsers(updatedUsers);

    try {
      await hipMarketApi.put('/user/update', { _id, role });

    } catch (error) {
      console.log(error)
      setAllUsers(previusUsers)
    }
  }

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
                allUsers.map((user: IUser) => (
                  <tr key={user._id}>
                    <td className="pl-2 py-2">{user._id}</td>
                    <td className="pl-2 py-2">{user.name} {user.lastname}</td>
                    <td className="pl-2 py-2">{user.email}</td>
                    <td className="pl-2 py-2">
                      <select
                        id="role"
                        name="roles"
                        value={user.role}
                        onChange={({ target }) => handleChangeRole(user._id, target.value)}
                      >
                        {
                          ['admin', 'super-user', 'client'].map((role: string) => (
                            <option key={role} value={role}>{role}</option>
                          ))
                        }
                      </select>
                    </td>
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

export default usersPage;