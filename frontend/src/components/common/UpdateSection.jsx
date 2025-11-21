import React from 'react'
import { useState,useEffect } from 'react'
import LatestBroadcast from './LatestBroadcast'
import Button from '../ui/Button'
import { NavLink } from 'react-router-dom'
function UpdateSection() {

    // const Updates = [
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
    //     {
    //         title: "National Scholarship Program 2025",
    //         category: "Education",
    //         department: "Department of Roads",
    //         description: "Applications are now open for the National Scholarship Program for undergraduate students."
    //     },
    // ]
    const[updates,setUpdates] =useState([])
    
        const getUpdates = async () => {
            try{
               const res = await fetch("http://localhost:5001/api/notice")
               const data = await res.json()
               setUpdates(data)
            }
            catch(error){
                console.log(error)
            }
        }
    
        // const categories = ["All","Health","FInance","Education","Transport"]
    
        useEffect(()=>{
            getUpdates()
        },[])
    const [selectedUpdate, setSelectedUpdate] = useState("All")


    const [slide, setSlide] = useState(0)

    const filteredUpdates = updates.filter(up => selectedUpdate === "All" || up.category === selectedUpdate)
    const UPDATES_PER_PAGE = 3
    const start = slide * UPDATES_PER_PAGE
    const end = start + UPDATES_PER_PAGE

    const visibleUpdates = filteredUpdates.slice(start, end)
    return (
        <div className='px-5 flex flex-col space-y-6 mt-[60px]'>
            <div className='flex items-center justify-between'>
                <h2 className='font-bold text-[1.8rem]'>Latest Broadcasts</h2>
                <NavLink to="/Notices">
                    <Button label="View All" type='tertiary' color='#000000' />
                </NavLink>
            </div>
            <div className='flex justify-start gap-3 items-center'>
                <Button
                    label="All"
                    type={selectedUpdate === "All" ? "primary" : "secondary"}
                    onClick={() => {
                        setSelectedUpdate("All")
                        setSlide(0)
                    }}
                />
                <Button
                    label="Health"
                    type={selectedUpdate === "Health" ? "primary" : "secondary"}
                    onClick={() => {
                        setSelectedUpdate("Health")
                        setSlide(0)
                    }}
                />
                <Button
                    label="Education"
                    type={selectedUpdate === "Education" ? "primary" : "secondary"}
                    onClick={() => {
                        setSelectedUpdate("Education")
                        setSlide(0)
                    }}
                />
                <Button
                    label="Finance"
                    type={selectedUpdate === "Finance" ? "primary" : "secondary"}
                    onClick={() => {
                        setSelectedUpdate("Finance")
                        setSlide(0)
                    }}
                />
                <Button
                    label="Transport"
                    type={selectedUpdate === "Transport" ? "primary" : "secondary"}
                    onClick={() => {
                        setSelectedUpdate("Transport")
                        setSlide(0)
                    }}
                />
            </div>
            <div className='flex items-center justify-evenly gap-4'>
                {
                    visibleUpdates.map((u, index) => {
                        return (
                            <LatestBroadcast key={index} title={u.title} category={u.category} description={u.description} date="2025-01-15" />
                        )
                    })
                }
                {visibleUpdates.length === 0 &&
                <p>No Updates found.</p>
                }
            </div>
            <div className='flex justify-between'>
                <Button 
                    label="Previous"
                    onClick={()=>{setSlide(slide-1)}}
                    disabled={slide===0}
                />
                <Button 
                    label="Next"
                    onClick={()=>{setSlide(slide+1)}}
                    disabled={end>= filteredUpdates.length}
                />
            </div>
        </div>
    )
}

export default UpdateSection
