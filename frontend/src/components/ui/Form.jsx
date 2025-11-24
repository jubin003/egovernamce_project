import { useEffect, useState } from "react";
import CategoryDropdown from "./CategoryDropdown";

import Button from "./Button";
import DepartmentDropdown from "./DepartmentDropdown";

export default function Form({ heading }) {


    // Category dropdown bata selected value tanna ko lagi
    const [categoryData, setCategoryData] = useState("Select Category")
    const categoryReceived = (cate) => {
        setCategoryData(cate)
    }


    // Department dropdown bata selected value tanna ko lagi
    const [departmentData, setDepartmentData] = useState("Select Department")
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

    // form data handle
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
    const handleClear = () => {
    //     const title = document.getElementById("form").title.;
    //     console.log(title);
        console.log("cleared!")
        setCategoryData("Select Category");
        setDepartmentData("Select Department");

        setFormData({
            title: "",
            category: "",
            department: "",
            description: "",
            pdf_url: "",
        })
        
    }

    // api call of backend
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formToSend = new FormData()
        formToSend.append("title", formData.title)
        formToSend.append("category", formData.category)
        formToSend.append("department", formData.department)
        formToSend.append("description", formData.description)
        formToSend.append("pdf_url", formData.pdf_url)
        const token = localStorage.getItem("adminToken");


        if (heading === "Notice") {
            
            const res = await fetch("http://localhost:5001/api/notice/add", {
                method: "POST",
                body: formToSend,
                headers: {
                Authorization: `Bearer ${token}`, 
            },
            })
            
        }
        else if (heading === "Press Releases") {

            const res = await fetch("http://localhost:5001/api/press/add", {
                method: "POST",
                body: formToSend,
                headers: {
                Authorization: `Bearer ${token}`, 
            },
            })
        }
        else {
            const res = await fetch("http://localhost:5001/api/publication/add", {
                method: "POST",
                body: formToSend,
                headers: {
                Authorization: `Bearer ${token}`, 
            },
            })
        }
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

            <form className="space-y-6" id="form">

                {/* <!-- Notice Title --> */}
                <div>
                    <label className="block font-medium mb-2">{heading} Title</label>
                    <input
                        name="title"
                        type="text"
                        value={formData.title}
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
                        <CategoryDropdown sendCateg={categoryReceived} passSelectedCate={categoryData} />
                    </div>
                    {/* <!-- Department --> */}
                    <div>

                        <label className="block font-medium mb-2">Department</label>
                        <DepartmentDropdown sendDepart={departmentReceived} passSelectedDepart={departmentData} />
                    </div>


                </div>

                {/* <!-- Description --> */}
                <div>
                    <label className="block font-medium mb-2">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
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
                        // value={formData.pdf_url}
                        className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring focus:ring-blue-200"
                        onChange={handlefieldchange}
                    />
                </div>


                {/* <!-- Buttons --> */}
                <div className="flex gap-4">

                    <Button label={"Add " + heading} formtype="submit" onClick={handleSubmit} />
                    <Button label="Clear" type="secondary" onClick={handleClear} />

                </div>

            </form>
        </div>

    );
}
