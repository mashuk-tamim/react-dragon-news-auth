import { Link } from "react-router-dom";
import Navbar from "../Home/Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        // console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen mt-10">
                <div className="md:w-3/5 lg:w-1/2 mx-auto bg-gray-600 rounded-lg p-10 space-y-5">
                    <h2 className="text-4xl font-bold text-center">Please Register</h2>
                    <form onSubmit={handleRegister} className="space-y-3">
                        <div className="form-control">
                            <input
                                type="text"
                                name="name"
                                placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input
                                type="text"
                                name="photo"
                                placeholder="photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input
                                type="email"
                                name="email"
                                placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input
                                type="password"
                                name="password"
                                placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="text-center mb-5">Already have an account? <Link className="text-red-400 font-bold" to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;