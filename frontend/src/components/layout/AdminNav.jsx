import React from 'react'

function AdminNav({ title }) {
    return (
        <div className='px-5 bg-white py-4 top-0 sticky flex justify-between items-center '>
            <h1 className='font-bold text-[1.5rem]'>
                Manage {title}
            </h1>
        </div>
    )
}

export default AdminNav
