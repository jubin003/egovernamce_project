import React from 'react'
import { useState, useEffect } from 'react'
import SearchBar from '../ui/SearchBar'
import Button from '../ui/Button'
import PressReleaseCard from '../ui/PressReleaseCard'
function AllPressRelease() {


    const [pressRelease, setPressRelease] = useState([])

    const getPressReleases = async () => {
        const res = await fetch("http://localhost:5001/api/press")
        const data = await res.json()
        setPressRelease(data)
    }

    const categories = ["All", "Health", "Education", "Finance", "Transport"]

    useEffect(() => {
        getPressReleases();
    }, [])
    // const pressRelease = [
    //     {
    //         title: "Road Maintenance on Ring Road",
    //         category: "Transport",
    //         department: "Department of Roads",
    //         description: "Scheduled maintenance work will be carried out on the Ring Road from January 20–25, 2025."
    //     },
    //     {
    //         title: "Road Maintenance on Ring Road",
    //         category: "Transport",
    //         department: "Department of Roads",
    //         description: "Scheduled maintenance work will be carried out on the Ring Road from January 20–25, 2025."
    //     },
    //     {
    //         title: "Tax Filing Deadline Extended",
    //         category: "Finance",
    //         department: "Inland Revenue Department",
    //         description: "The deadline for annual tax filing has been extended to February 15, 2025."
    //     },
    //     {
    //         title: "Road Maintenance on Ring Road",
    //         category: "Transport",
    //         department: "Department of Roads",
    //         description: "Scheduled maintenance work will be carried out on the Ring Road from January 20–25, 2025."
    //     },
    //     {
    //         title: "Free Health Camp in Kathmandu Valley",
    //         category: "Health",
    //         department: "Ministry of Health",
    //         description: "A three-day free health camp will be organized in various locations across Kathmandu Valley."
    //     },
    //     {
    //         title: "Road Maintenance on Ring Road",
    //         category: "Transport",
    //         department: "Department of Roads",
    //         description: "Scheduled maintenance work will be carried out on the Ring Road from January 20–25, 2025."
    //     },
    //     {
    //         title: "National Scholarship Program 2025",
    //         category: "Education",
    //         department: "Department of Roads",
    //         description: "Applications are now open for the National Scholarship Program for undergraduate students."
    //     },

    // ]
    const [selectedCategory, setCategory] = useState("All")
    const [searchTerm, setSearchTerm] = useState("")

    const filteredPressRelease = pressRelease
        .filter(notice => selectedCategory === "All" || notice.category === selectedCategory)
        .filter(notice => notice.title.toLowerCase().includes(searchTerm.toLowerCase()));

    const [page, setPage] = useState(0)

    const pressReleasePerPage = 4
    const start = page * pressReleasePerPage
    const end = start + pressReleasePerPage
    const visiblePressRelease = filteredPressRelease.slice(start, end)
    const totalPages = Math.ceil(filteredPressRelease.length/pressReleasePerPage)
    useEffect(() => {
        setPage(0)
    }, [selectedCategory, searchTerm])
    return (
        <div className='px-5 mt-8 flex flex-col space-y-4'>
            <div>
                <h1 className='font-bold text-[2rem]'>All Press Release</h1>
            </div>
            <div className='flex flex-col space-y-4'>
                <SearchBar
                    value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
                />
                <div className='flex justify-start gap-3 items-center'>
                    {categories.map((cat, index) => (
                        <Button
                            key={index}
                            label={cat}
                            type={selectedCategory === cat ? "primary" : "secondary"}
                            onClick={() => {
                                setCategory(cat)
                                setPage(0)
                            }}

                        />
                    ))}

                </div>
            </div>
            <div className='flex flex-col space-y-4 self-center'>
                {visiblePressRelease.map((notice, index) => {
                    return (
                        <PressReleaseCard
                            key={index}
                            title={notice.title}
                            category={notice.category} //add category in backend
                            department={notice.department} //add department in backend
                            description={notice.summary}
                        />
                    )
                })}
                {
                visiblePressRelease.length === 0 && 
                <p>No press releases found.</p>
                }
            </div>
            <div className='flex justify-between'>
                <Button
                    label="Previous"
                    onClick={() => { setPage(page - 1) }}
                    disabled={page === 0}
                />
                <Button
                    label="Next"
                    onClick={() => { setPage(prev => Math.min(prev +1, totalPages - 1)) }}
                    disabled={page >= totalPages - 1}
                />
            </div>
        </div>
    )
}

export default AllPressRelease
