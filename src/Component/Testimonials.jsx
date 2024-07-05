
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import SectionTitle from './SectionTitle';


const Testimonials = () => {
    const winnersData = [
        



        {
            id: 1,
            name: "Alice Johnson",
            profilePicture: "https://i.ibb.co/M2dsG7K/winnder5.jpg",
            prize: "150$",
            date: "2024-01-15"
        },
        {
            id: 2,
            name: "Bob Smith",
            profilePicture: "https://i.ibb.co/yF5Hs57/winner3.jpg",
            prize: "80$",
            date: "2024-01-15"
        },
        {
            id: 3,
            name: "Carol Williams",
            profilePicture: "https://i.ibb.co/jJB6GDH/winner4.jpg",
            prize: "205$",
            date: "2024-01-15"
        },
        {
            id: 4,
            name: "David Brown",
            profilePicture: "https://i.ibb.co/WVr4PvB/winnner2.jpg",
            prize: "120$",
            date: "2024-01-15"
        }
    ];


    return (
        <section className="my-20">
            <SectionTitle

                subHeading='View Here Our Winners'
                heading='winners'

            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    winnersData.map(review => <SwiperSlide key={review._id}>
                        <div className="text-center px-10 m-24 space-y-4">

                            {/* <Rating
                                className="mx-auto"
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            /> */}

                            <div className="avatar">
                                <div className="w-24 ">
                                    <img src={review.profilePicture} />
                                </div>
                            </div>


                            <h3 className="text-3xl font-medium text-[#CD9003]">{review.name}</h3>
                            <h3 className="text-3xl text-[#73db69] font-bold">{review.prize}</h3>
                            <h3>{review.date}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </section>
    );
};

export default Testimonials;