// src/routes/AppRoutes.jsx
import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

// import your pages & layout
import Layout from '../components/layout/Layout.jsx'
import Home from '../pages/Home.jsx'
import Notices from '../pages/Notices.jsx'
import Alerts from '../pages/Alerts.jsx'
import Departments from '../pages/Departments.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="Home" element={<Home />} />           {/* default page */}
      <Route path="Notices" element={<Notices />} />
      <Route path="Alerts" element={<Alerts />} />
      <Route path="Departments" element={<Departments />} />
      <Route path="About-Us" element={<About />} />
      <Route path="Contact" element={<Contact />} />
    </Route>
  )
)

export default router
