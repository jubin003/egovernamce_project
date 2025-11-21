import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import Layout from '../components/layout/Layout.jsx'
import Home from '../pages/Home.jsx'
import Notices from '../pages/Notices.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
import Publication from '../pages/Publication.jsx'
import PressRelease from '../pages/PressRelease.jsx'

import {Dashboard, ManageNotices, ManagePressReleases, ManageReportPublications} from "../components/common/AdminExport"
import AdminLayout from "../components/layout/AdminLayout.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="notices" element={<Notices />} />
        <Route path="press-release" element={<PressRelease />} />
        <Route path="publication" element={<Publication />} />
        <Route path="about-us" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="/admin/" element={<AdminLayout />}>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='manage-notices' element={<ManageNotices/>}/>
        <Route path='manage-press-releases' element={<ManagePressReleases/>}/>
        <Route path='manage-reports-publishment' element={<ManageReportPublications/>}/>
      </Route>
    </>
  )
)

export default router