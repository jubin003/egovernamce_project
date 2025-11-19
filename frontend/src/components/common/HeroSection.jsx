import React from 'react'

// button
import Button from "../ui/Button"
import { NavLink } from 'react-router-dom'
// logo
import Emblem from '../../../public/assets/Emblem_of_nepal.png'

function HeroSection() {
    return (
        <div className='flex px-8 h-[80vh] items-center bg-gradient-to-b from-white via-red-50 to-red-100'>
            {/* Left Section */}
            <div className="left flex flex-col space-y-6">
                {/* Title */}
                <div className='font-bold text-[3.5rem] flex flex-col space-y-2'>
                    <h1>Transparent Governance,</h1>
                    <h1 className='text-[#003893]'>Instant Updates</h1>
                </div>

                {/* Description */}
                <p className='text-[#326ac4] text-[1.1rem]'>
                    Stay informed with official government notices, emergency alerts, and important announcements.
                </p>

                {/* Buttons */}
                <div className="btn flex space-x-4 w-1/2">
                    <NavLink to="/Notices">
                        <Button label="View Latest Notices" />
                    </NavLink>
                    <Button label="Subscribe for Alerts" type='secondary' />
                </div>
            </div>

            {/* Right Section */}
            <div className="right flex-1">
                {/* Right content like image or illustration */}
                <img src={Emblem} alt="Logo" />
            </div>
        </div>


    )
}

export default HeroSection
