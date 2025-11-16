import React from 'react'
import { useState } from 'react'
import SearchBar from '../ui/SearchBar'
import Button from '../ui/Button'
import Card from '../ui/Card'
function AllNotices() {
    const notices = [
        {
            title: "Road Maintenance on Ring Road",
            category: "Transport",
            department: "Department of Roads",
            description: "Scheduled maintenance work will be carried out on the Ring Road from January 20–25, 2025."
        },
        {
            title: "Road Maintenance on Ring Road",
            category: "Transport",
            department: "Department of Roads",
            description: "Scheduled maintenance work will be carried out on the Ring Road from January 20–25, 2025."
        },
        {
            title: "Tax Filing Deadline Extended",
            category: "Finance",
            department: "Inland Revenue Department",
            description: "The deadline for annual tax filing has been extended to February 15, 2025."
        },
        {
            title: "Road Maintenance on Ring Road",
            category: "Transport",
            department: "Department of Roads",
            description: "Scheduled maintenance work will be carried out on the Ring Road from January 20–25, 2025."
        },
        {
            title: "Free Health Camp in Kathmandu Valley",
            category: "Health",
            department: "Ministry of Health",
            description: "A three-day free health camp will be organized in various locations across Kathmandu Valley."
        },
        {
            title: "Road Maintenance on Ring Road",
            category: "Transport",
            department: "Department of Roads",
            description: "Scheduled maintenance work will be carried out on the Ring Road from January 20–25, 2025."
        },
        {
            title: "National Scholarship Program 2025",
            category: "Education",
            department: "Department of Roads",
            description: "Applications are now open for the National Scholarship Program for undergraduate students."
        },

    ]
    const [selectedCategory, setCategory] = useState("All")
    const [searchTerm, setSearchTerm] = useState("")

    const filteredNotices = notices
        .filter(notice => selectedCategory === "All" || notice.category === selectedCategory)
        .filter(notice => notice.title.toLowerCase().includes(searchTerm.toLowerCase()));

    const [page, setPage] = useState(0)

    const NOTICES_PER_PAGE = 4
    const start = page * NOTICES_PER_PAGE
    const end = start + NOTICES_PER_PAGE
    const visibleNotices = filteredNotices.slice(start, end)

    return (
        <div className='px-5 mt-8 flex flex-col space-y-4'>
            <div>
                <h1 className='font-bold text-[2rem]'>All Notices</h1>
            </div>
            <div className='flex flex-col space-y-4'>
                <SearchBar
                    value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
                />
                <div className='flex justify-start gap-3 items-center'>
                    <Button
                        label="All"
                        type={selectedCategory === "All"?"primary":"secondary"}
                        onClick={() => {
                            setCategory("All")
                            setPage(0)
                        }}

                    />
                    <Button
                        label="Health"
                        type={selectedCategory === "Health"?"primary":"secondary"}
                        onClick={() => {
                            setCategory("Health")
                            setPage(0)
                        }}
                    />
                    <Button
                        label="Education"
                        type={selectedCategory === "Education"?"primary":"secondary"}
                        onClick={() => {
                            setCategory("Education")
                            setPage(0)
                        }}
                    />
                    <Button
                        label="Finance"
                        type={selectedCategory === "Finance"?"primary":"secondary"}
                        onClick={() => {
                            setCategory("Finance")
                            setPage(0)
                        }}
                    />
                    <Button
                        label="Transport"
                        type={selectedCategory === "Transport"?"primary":"secondary"}
                        onClick={() => {
                            setCategory("Transport")
                            setPage(0)
                        }}
                    />
                </div>
            </div>
            <div className='flex flex-col space-y-4'>
                {visibleNotices.map((notice, index) => {
                    return (
                        <Card
                            key={index}
                            title={notice.title}
                            category={notice.category}
                            department={notice.department}
                            description={notice.description}
                        />
                    )
                })}
            </div>
            <div className='flex justify-between'>
                <Button
                    label="Previous"
                    onClick={() => { setPage(page - 1) }}
                    disabled={page === 0}
                />
                <Button
                    label="Next"
                    onClick={() => { setPage(page + 1) }}
                    disabled={end >= filteredNotices.length}
                />
            </div>
        </div>
    )
}

export default AllNotices
