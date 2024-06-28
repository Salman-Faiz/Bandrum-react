
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-md shadow-2xl ">
                    <form  className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover font-medium text-xl text-red-700">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Do not have an account? <Link className='text-blue-600' to={'/register'}>Register</Link></p>
                    </form>
                    

                </div>
            </div>
        </div>
    );
};

export default Login;