import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('location in the login page',location);

    const handleLogin = (e) => {
        e.preventDefault();
        // console.log(e.currentTarget);
        // console.log(e.target);
        const form = new FormData(e.currentTarget);
        // console.log(form.get('email'));
        // console.log(form.get('password'));
        const email = form.get('email');
        const password = form.get('password');
        // console.log(email, password);

        // login user:
        loginUser(email, password)
            .then(result => {
                console.log(result);
                e.target.reset(); //clear login fields after successful login

                // navigate after login:
                navigate(location?.state ? location.state : '/');  //cannot use currentTarget here, log out hoi gele currentTarget e null chole ashe
            })
            .catch(error => {
                console.error(error);
            })
    };
    return (
        <div>
            <Navbar></Navbar>
            <div className="text-center">
                <h2 className="text-3xl my-10 text-center">Please Login</h2>
                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className="mt-5">
                    <p>New here? Please <Link to='/register'><span className="text-red-600 font-semibold hover:underline">Register</span></Link></p>
                </div>

            </div>

        </div>
    );
};

export default Login;