import { Link } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {

    const { user, logOutUser } = useContext(AuthContext);

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                toast.success('Log Out Successfully')
            })
            .catch(error => {
                console.error(error)
            })
    }
    const navLink = <>



        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allcontests'>All contests</Link></li>
        <li><Link to='/contactus'>Contact Us</Link></li>

    </>
    return (
        <div>
            <div className="navbar  max-w-screen-xl bg-[#74DA8B] rounded-r-2xl rounded-l-2xl h-[55px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           
                                {navLink}
                          
                        </ul>
                    </div>
                    <div className="flex items-center">

                        <a className="btn btn-ghost text-xl">ContestHub</a>
                        <img className="w-14 h-14" src="https://i.ibb.co/p33jF2J/logo2.png" alt="" />

                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div>
                            <div className="dropdown z-50">
                                <div tabIndex={0} role="button" className="btn btn-ghost ">


                                    <div className="tooltip  tooltip-left">
                                        <div className="avatar online">
                                            <div className="w-10 rounded-full " >
                                                <img src={user?.photoURL} title={user?.displayName} />


                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-24 space-y-2 text-center">
                                    <p className="font-bold text-xs ">{user.displayName
                                    }</p>
                                    <Link to="/dashboard">Dashboard</Link>
                                    <button onClick={handleLogOut}>LogOut</button>
                                </ul>
                            </div>

                        </div> : <Link to="/login" className="flex items-center gap-1" >Login <CiLogin /></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;