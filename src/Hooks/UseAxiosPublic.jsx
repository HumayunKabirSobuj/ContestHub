import axios from "axios";

const axiosPublic =axios.create({
    baseURL: 'https://assignment12-server-side-ph-b9.vercel.app'
})

const UseAxiosPublic = () => {
    return axiosPublic;
};

export default UseAxiosPublic;