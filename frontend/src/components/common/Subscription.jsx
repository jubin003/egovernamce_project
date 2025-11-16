import React from 'react'
import Button from '../ui/Button'
import CategoryDropdown from '../ui/CategoryDropdown'

function Subscription() {
    return (
        <div className="bg-[#003893] mt-[60px] py-10 flex flex-col items-center text-center space-y-6 w-full">

            {/* Text Section */}
            <div className="text-white w-[90%] md:w-[60%] space-y-2">
                <h2 className="text-2xl md:text-3xl font-semibold">
                    Get Notified About Important Updates
                </h2>
                <p className="text-sm md:text-base">
                    Subscribe to receive instant notifications about government announcements and emergency alerts.
                </p>
            </div>

            {/* Input + Button */}
            <div className="flex items-center justify-center gap-3 w-full">
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="bg-white rounded-lg px-4 py-2 w-[30%]  outline-none"
                />
                <CategoryDropdown/>

                <Button label="Subscribe" />
            </div>
        </div>
    )
}

export default Subscription
