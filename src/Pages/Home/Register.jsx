import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Now!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-md shadow-2xl ">
                    <form  className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="enter photo url" className="input input-bordered" />
                        </div>
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
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Already have an account ? <Link className='text-blue-600' to={'/login'}>Login</Link></p>
                    </form>
                    

                </div>
            </div>
        </div>
    );
};

export default Register;