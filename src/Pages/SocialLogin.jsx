import { useNavigate } from "react-router-dom";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext)
    const axiosPublic = UseAxiosPublic();
    const navigate = useNavigate();
    // console.log(googleSignIn)
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                // console.log(result.user)
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    role:"user"
                }
                axiosPublic.post('/users', userInfo)
                    .then(() => {
                        // console.log(res.data)
                        navigate('/')
                    })
            })
            .then(() => {
                // console.error(error)
            })
    }
    return (
        <div>
            <div className='space-y-5 px-4 w-full'>
                <button onClick={handleGoogleLogin} className='btn  w-full bg-none border'><FaGoogle /> <span>Login With Google</span> </button>
            </div>
        </div>
    );
};

export default SocialLogin;