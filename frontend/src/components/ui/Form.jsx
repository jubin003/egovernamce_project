import { useEffect, useState } from "react";
import CategoryDropdown from "./CategoryDropdown";

import Button from "./Button";
import DepartmentDropdown from "./DepartmentDropdown";

export default function Form({ heading }) {


    // Category dropdown bata selected value tanna ko lagi
    const [categoryData, setCategoryData] = useState("")
    const categoryReceived = (cate) => {
        setCategoryData(cate)
    }


    // Department dropdown bata selected value tanna ko lagi
    const [departmentData, setDepartmentData] = useState("")
    const departmentReceived = (dep) => {
        setDepartmentData(dep)
    }

    // console.log(categoryData)
    // console.log(departmentData)


    // form submit process
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        department: "",
        description: "",
        pdf_url: "",
    })

    const handlefieldchange = (e) => {

        if (e.target.type === "file") {
            setFormData(
                {
                    ...formData,
                    pdf_url: e.target.files[0],
                }
            )
        }
        else {

            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            })
        }
    }

    // clear button ko lagi
    // const handleClear = () => {
    //     useEffect(() => {
    //         setFormData({
    //             title: "",
    //             category: categoryData,
    //             department: departmentData,
    //             description: "",
    //             pdf_url: "",
    //         })
    //     },[categoryData==="",departmentData===""])


    // }

    // api call of backend
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formToSend = new FormData()
        formToSend.append("title", formData.title)
        formToSend.append("category", formData.category)
        formToSend.append("department", formData.department)
        formToSend.append("description", formData.description)
        formToSend.append("pdf_url", formData.pdf_url)

        const res = await fetch("http://localhost:5001/api/form", {
            method: "POST",
            body: formToSend,
        })
    }




    useEffect(() => {
        setFormData(prev => ({
            ...prev,
            category: categoryData,
            department: departmentData,
        }))
        // console.log(formData)
    }, [categoryData, departmentData])

    useEffect(() => {
        console.log(formData)
    }, [formData])
    return (
        <div className="bg-white p-8 rounded-xl shadow ">
            <h2 className="text-2xl font-semibold mb-2">Create New {heading}</h2>
            <p className="text-gray-600 mb-6">Fill in the details to publish a new notice</p>

            <form className="space-y-6" >

                {/* <!-- Notice Title --> */}
                <div>
                    <label className="block font-medium mb-2">{heading} Title</label>
                    <input
                        name="title"
                        type="text"
                        placeholder={"Enter " + heading + " title"}
                        className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring focus:ring-blue-200"
                        onChange={handlefieldchange}
                    />
                </div>

                {/* <!-- Category + Department --> */}
                <div className="grid grid-cols-2 gap-6">

                    {/* <!-- Category --> */}
                    <div>
                        <label className="block font-medium mb-2">Category</label>
                        <CategoryDropdown sendCateg={categoryReceived} />
                    </div>
                    {/* <!-- Department --> */}
                    <div>

                        <label className="block font-medium mb-2">Department</label>
                        <DepartmentDropdown sendDepart={departmentReceived} />
                    </div>


                </div>

                {/* <!-- Description --> */}
                <div>
                    <label className="block font-medium mb-2">Description</label>
                    <textarea
                        name="description"
                        placeholder="Enter detailed description of the notice"
                        className="w-full h-40 border border-gray-300 rounded-lg p-3 bg-white resize-none focus:outline-none focus:ring focus:ring-blue-200"
                        onChange={handlefieldchange}
                    ></textarea>
                </div>


                {/* pdf upload */}
                <div>
                    <label className="block font-medium mb-2">Pdf attachment</label>
                    <input
                        name="pdf_url"
                        type="file"
                        className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring focus:ring-blue-200"
                        onChange={handlefieldchange}
                    />
                </div>


                {/* <!-- Buttons --> */}
                <div className="flex gap-4">

                    <Button label={"Add " + heading} formtype="submit" onClick={handleSubmit} />
                    <Button label="Clear" type="secondary"  />

                </div>

            </form>
        </div>

    );
}
