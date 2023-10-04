import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { PropTypes } from 'prop-types';
import Header from "../pages/Home/Shared/Header/Header";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)

    if (loading) {
        return <div>
            <Header></Header>
            <div className="flex justify-center">
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node,
}