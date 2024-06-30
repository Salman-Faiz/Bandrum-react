import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;

        // efficient method to show data
        const form = new FormData(e.currentTarget)
        // console.log(e.currentTarget)
        console.log(form.get('email'))
        const email = form.get('email')
        const name= form.get('name')
        const password = form.get('password')
        const photo = form.get('photo')
        console.log(email,password,name,photo);

        

        // create user 

        createUser(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error=>console.log(error.messege))
    }


    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Now!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-md shadow-2xl ">
                    <form onSubmit={handleRegister} className="card-body ">
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p>Already have an account ? <Link className='text-blue-600' to={'/login'}>Login</Link></p>
                    </form>
                    

                </div>
            </div>
        </div>
    );
};

export default Register;