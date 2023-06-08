import { useContext } from "react"
import { AuthContext } from "./../contexts/auth.context"
import { Navigate, Outlet } from 'react-router-dom'
import Loader from "../components/Loader/Loader"

const PrivateRoute = ({ admittedRoles }) => {
    const { user, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    if (!user || !admittedRoles.includes(user.role)) {
        return <Navigate to="/acceder" replace />
    }

    return <Outlet />
}

export default PrivateRoute
