

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import UseAxiosPublic from '../Hooks/UseAxiosPublic';



const Banner = () => {


    const axiosPublic = UseAxiosPublic();
    const handleSearch = (e) => {
        console.log(e.target.value);
        

    }




    return (


        <div className='my-6'>


            <div
                className="hero h-[500px] rounded-2xl"
                style={{
                    backgroundImage: "url(https://i.ibb.co/jhnrYtt/shiny-golden-trophy-against-wooden-backdrop-1.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                <div className="hero-content text-neutral-content text-center">

                    <input type="text" onChange={handleSearch} placeholder="Search Here" className="input input-bordered w-full max-w-3xl" />
                </div>
            </div>
        </div>

    );
};

export default Banner;