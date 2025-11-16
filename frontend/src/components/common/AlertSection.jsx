import React from 'react'
import { MdWarning } from "react-icons/md";
import Button from '../ui/Button'
function AlertSection() {
    return (
        <div className='flex justify-between items-center px-2 py-3 w-full bg-[#DC143C] text-white font-semibold'>
            <div className='flex items-center gap-4 w-[80%]'>
                <MdWarning />
                <div className='self-start'>Alert message here</div>
            </div>
            <Button label='View Details' type='tertiary' color='white'/>
        </div>
    )
}

export default AlertSection
