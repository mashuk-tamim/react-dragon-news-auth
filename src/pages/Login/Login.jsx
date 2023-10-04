import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Home/Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const {signInUser} = useContext(AuthContext);
    const location = useLocation();
    console.log('location in the login page',location);
    const navigate = useNavigate();

    const [loginSuccess, setLoginSuccess] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        e.target.reset();

        signInUser(email, password)
        .then(() => {
            console.log('logged in successfully');
            setLoginSuccess(true);

            //navigate after login
            navigate(location?.state ? location.state : '/');
            
        })
        .catch(error => console.error(error))

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen mt-10">
                <div className="md:w-3/5 lg:w-1/2 mx-auto bg-gray-600 rounded-lg p-10 space-y-5">
                    <h2 className="text-4xl font-bold text-center">Login your account</h2>
                    <form onSubmit={handleLogin} className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-center mb-5">Do not have an account? <Link className="text-red-400 font-bold" to='/register'>Register</Link></p>
                    {
                        loginSuccess && <Navigate to='/'></Navigate>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;