
// import ScrollIntoView from 'react-scroll-into-view'

const ReleventSection = () => {
    return (
        <div className="mt-14">
       

            <div className="text-center">

         

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center gap-2 my-5">
                    <p data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="text-4xl font-bold bg-[#534878] py-4 rounded-xl">2200 <br /> Clients</p>
                    <p data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="text-4xl font-bold bg-[#534878] py-4 rounded-xl">3050 <br /> Bookings</p>
                    <p data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="text-4xl font-bold bg-[#534878] py-4 rounded-xl">120 <br /> Choice</p>
                    <p data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="text-4xl font-bold bg-[#534878] py-4 rounded-xl">1500 <br /> Store</p>
                </div>


            </div>

            <div className='my-5'>

                <h1 className="text-3xl font-bold text-center my-8">Contact US</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5' >
                    <div className="card card-compact  bg-base-100 shadow-xl hover:bg-[#23E76A]" data-aos="flip-up" data-aos-duration="1000">
                        <figure><img src="https://i.ibb.co/QP3qR6m/autor-image-5-modified.png" className='h-40 w-40' alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Jhon</h2>
                            <p>Email : jhon1122@gmail.com</p>
                            <p>Phone : 017XXXXXXXX</p>
                            
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl hover:bg-[#23E76A]" data-aos="flip-up" data-aos-duration="1000">
                        <figure><img src="https://i.ibb.co/YpB1R63/autor-image-4-modified.png" className='h-40 w-40' alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Rohan</h2>
                            <p>Email : rohan1122@gmail.com</p>
                            <p>Phone : 018XXXXXXXX</p>
                            
                        </div>
                    </div>
                    <div className="card card-compact  bg-base-100 shadow-xl hover:bg-[#23E76A]" data-aos="flip-up" data-aos-duration="1000">
                        <figure><img src="https://i.ibb.co/B3JTD3f/autor-image-1-modified.png" className='h-40 w-40' alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Bilton</h2>
                            <p>Email : bilton1122@gmail.com</p>
                            <p>Phone : 019XXXXXXXX</p>
                            
                        </div>
                    </div>
                    <div className="card card-compact  bg-base-100 shadow-xl hover:bg-[#23E76A]" data-aos="flip-up" data-aos-duration="1000">
                        <figure><img src="https://i.ibb.co/HPnqjBJ/autor-image-3-modified.png" className='h-40 w-40' alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Deny</h2>
                            <p>Email : deny1122@gmail.com</p>
                            <p>Phone : 015XXXXXXXX</p>
                            
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default ReleventSection;