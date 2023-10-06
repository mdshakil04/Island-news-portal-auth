import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    // Import authContext from AuthProvider Components
    const {createUser} = useContext(AuthContext);


    const handleRegister = e =>{
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name,photo,email,password);
        // Create User here
        createUser(email, password)
            .then(result =>{
                console.log(result.user)
            })
            .catch(error =>{
                console.error(error)
            })

      }
    return (
        <div className="">
        <Navbar></Navbar>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-24">
          <h2 className=" text-3xl text-center mt-4">Please! Register</h2>
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <span className="label-text font-bold">Photo URL</span>
                  </label>
                  <input
                    name="photo"
                    type="text"
                    placeholder="Photo Url"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <span className="label-text font-bold">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover text-orange-500 font-bold">
                      Forgot password ?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
              <p className=" text-center  mb-4">Already have an account ? <Link className=" text-blue-500 font-bold" to="/login">Login</Link></p>
            </div>
      </div>
    );
};

export default Register;