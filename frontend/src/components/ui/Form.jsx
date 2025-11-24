import { useEffect, useState } from "react";
import CategoryDropdown from "./CategoryDropdown";
import MonthDropDown from "./MonthDropdown";
import Button from "./Button";
import DepartmentDropdown from "./DepartmentDropdown";
import ReportType from "./ReportType";

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

    // Report dropdown bata selected value tanna
    const [reportType, setReportType] = useState("None")
    const reportTypeReceived = (type) => {
        setReportType(type)
    }

    // month dropdown selection
    const [mnth,setMonth]=useState("Select Month")
    const monthReceived= (m)=>{
        setMonth(m);
    }

    // form submit process
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        department: "",
        description: "",
        pdfurl: "",
        type: "",
        month: "",
    })



    // form data handle
    const handlefieldchange = (e) => {

        if (e.target.type === "file") {
            setFormData(
                {
                    ...formData,
                    pdfurl: e.target.files[0],
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
        setReportType("None");
        setMonth("Select month");



        setFormData({
            title: "",
            category: "",
            department: "",
            description: "",
            pdfurl: "",
            publisheddate: "",
            type: "",
            year: "",
            month:"",
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
            const formToSend = new FormData()
            formToSend.append("title", formData.title)
            formToSend.append("type", formData.type)
            formToSend.append("year", formData.year)
            formToSend.append("month", formData.month)
            formToSend.append("pdfurl", formData.pdfurl)

            console.log(formToSend)

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
            type: reportType,
            month: mnth,
        }))
        // console.log(formData)
    }, [categoryData, departmentData, reportType,mnth])

    useEffect(() => {
        console.log(formData)
    }, [formData])


    return (
        <div className="bg-white p-8 rounded-xl shadow ">
            <h2 className="text-2xl font-semibold mb-2">Create New {heading}</h2>
            <p className="text-gray-600 mb-6">Fill in the details to publish a new notice</p>
            {heading === "Report" ? (
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
                            <label className="block font-medium mb-2">Report Type</label>
                            <ReportType sendReportType={reportTypeReceived} passSelectedType={reportType} />
                        </div>
                        <div>
                            <label className="block font-medium mb-2">Month</label>
                            <MonthDropDown sendMonth={monthReceived} passSelectedMonth={mnth} />
                        </div>

                    </div>

                    {/* pdf upload */}
                    <div>
                        <label className="block font-medium mb-2">Pdf attachment</label>
                        <input
                            name="pdfurl"
                            type="file"
                            // value={formData.pdfurl}
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
            ) :
                (
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
                                name="pdfurl"
                                type="file"
                                // value={formData.pdfurl}
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
                )}

        </div>

    );
}
