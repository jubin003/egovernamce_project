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
