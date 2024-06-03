import React, { useContext } from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);

    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email")
        const password = form.get("password")

        signIn(email, password)
        .then(result => {
            console.log(result.user);
            // navigate after login
            navigate(location?.state ? location.state: '/')

        })
        .catch(error => {
            console.log(error.massage);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-4xl text-center'>Please Login</h2>
            <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className='text-center text-blue-600 font-bold'>Don't have an account? <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Login;