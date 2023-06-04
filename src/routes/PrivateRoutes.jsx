import { useContext } from "react"
import { AuthContext } from "./../contexts/auth.context"
import { Navigate, Outlet } from 'react-router-dom'
import Loader from "../components/Loader/Loader"

const PrivateRoute = () => {

    const { user, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    if (!user) {
        //TODO, SI PONGO /INICIO REDIRIGE PERO AL CERRAR SESIÓN TE VAS A LA MIERDA
        return <Navigate to="/acceder" replace />
    }

    return <Outlet />
}

export default PrivateRoute