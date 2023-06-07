import { Routes, Route } from "react-router-dom"
import CandidatesListPage from "../pages/CandidatesListPage/CandidatesListPage"
import ContactPage from "../pages/ContactPage/ContactPage"
import HomePage from "../pages/HomePage/HomePage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import ProfileEditPage from "../pages/ProfileEditPage/ProfileEditPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import JobsListPage from "../pages/JobsListPage/JobsListPage"
import JobCreatePage from "../pages/JobCreatePage/JobCreatePage"
import UsersListPage from "../pages/UsersListPage/UsersListPage"
import ExperienceCreatePage from "../pages/ExperienceCreatePage/ExperienceCreatePage"
import JobDetailsPage from "../pages/JobDetailsPage/JobDetailsPage"
import PrivateRoute from "./PrivateRoutes"
import CandidateDetailsPage from "../pages/CandidateDetailsPage/CandidateDetailsPage"
import WellcomePage from "../pages/WellcomePage/WellcomePage"
import ExperienceEditPage from "../pages/ExperienceEditPage/ExperienceEditPage"
import JobEditPage from "../pages/JobEditPage/JobEditPage"



const AppRoutes = () => {

    return (

        <Routes>

            {/*  <Route path="/registro" element={<SignUpPage />} /> */}
            <Route path="/acceder" element={<LoginPage />} />
            <Route path="/" element={<WellcomePage />} />
            <Route path="/contacta" element={<ContactPage />} />

            <Route element={<PrivateRoute />}>
                <Route path="/inicio" element={<HomePage />} />
                <Route path="/profesionales" element={<CandidatesListPage />} />
                <Route path="/profesionales/:id" element={<CandidateDetailsPage />} />
                <Route path="/perfil" element={<ProfilePage />} />
                <Route path="/editar/:id" element={<ProfileEditPage />} />
                <Route path="/empleos" element={<JobsListPage />} />
                <Route path="/empleo/:id" element={<JobDetailsPage />} />
                <Route path="/crear-oferta" element={<JobCreatePage />} />
                <Route path="/empleo/:id/editar" element={<JobEditPage />} />
                <Route path="/crear-experiencia" element={<ExperienceCreatePage />} />
                <Route path="/experiencia/:id/editar" element={<ExperienceEditPage />} />
                <Route path="/usuarios" element={<UsersListPage />} />
            </Route>

            <Route path="*" element={<h1>404</h1>} />

        </Routes>
    )
}

export default AppRoutes