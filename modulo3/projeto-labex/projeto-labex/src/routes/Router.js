import { useState } from 'react'
import { AdminHomePage } from '../pages/AdminHomePage'
import { ApplicationFormPage } from '../pages/ApplicationFormPage'
import { CreateTripPage } from '../pages/CreateTripPage'
import { HomePage } from '../pages/HomePage'
import { ListTripsPage } from '../pages/ListTripsPage'
import { LoginPage } from '../pages/LoginPage'
import { TripDetailsPage } from '../pages/TripDetailsPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";


export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="list" element={<ListTripsPage />} />
                <Route path="application" element={<ApplicationFormPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="admin/trips/list" element={<AdminHomePage />} />
                <Route path="admin/trips/create" element={<CreateTripPage />} />
                <Route path="admin/trips/:id" element={<TripDetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}