import React, { useState } from 'react';
import MonthlyReportCard from '../components/ui/MonthlyReportCard';
import AnnualReportCard from '../components/ui/AnnualReportCard';
import SearchBar from '../components/ui/SearchBar';
import Button from '../components/ui/Button';
import { useEffect } from 'react';

function Publication() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // const reports = [
  //   { title: "Monthly Report A", date: "2025-11-16", category: "Monthly" },
  //   { title: "Annual Report B", date: "2025-11-16", category: "Annual" },
  //   { title: "Monthly Report C", date: "2025-10-10", category: "Monthly" },
  //   { title: "Annual Report D", date: "2025-09-05", category: "Annual" },
  // ];


  const [reports, setReports] = useState([])

  const getReport = async () => {
    const res = await fetch("http://localhost:5001/api/publication")
    const data = await res.json()
    setReports(data)
  }

  useEffect(() => {
    getReport()
  }, [])

  // Filter reports based on search term and category
  const filteredReports = reports.filter(report => {

    const category = report.type?.toLowerCase();

    const matchesCategory =
      selectedCategory === 'All' || category === selectedCategory.toLowerCase();

    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="px-4 py-6">
      <h1 className='font-bold text-3xl mb-6'>All Published Reports</h1>

      {/* Search and Filter */}
      <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6'>
        <SearchBar
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        <div className='flex gap-3'>
          {['All', 'Monthly', 'Annual'].map(category => (
            <Button
              key={category}
              label={category}
              type={selectedCategory === category ? "primary" : "secondary"}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </div>
      </div>

      {/* Report Cards */}
      <div className='flex flex-col space-y-6'>
        {filteredReports.length > 0 ? (
          filteredReports.map((report, index) => {
            const category = report.type?.toLowerCase();

            return category === "monthly" ? (
              <MonthlyReportCard
                key={index}
                title={report.title}
                date={`${report.year}-${report.month || ""}`}
              />
            ) : (
              <AnnualReportCard
                key={index}
                title={report.title}
                date={report.year}
              />
            );
          })
        ) : (
          <p className="text-gray-500">No reports found.</p>
        )}
      </div>
    </div>
  );
}

export default Publication;
