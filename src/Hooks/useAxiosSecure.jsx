import axios from "axios";

 const axiosSecure = axios.create({
    baseURL: 'https://assignment12-server-side-ph-b9.vercel.app'
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;