

import Banner from "../Component/Banner";
import Footer from "../Component/Footer";
import PopularContestSection from "../Component/PopularContestSection";
import ReleventSection from "../Component/ReleventSection";
import TermsAndCondition from "../Component/TermsAndCondition";
import Testimonials from "../Component/Testimonials";


const Home = () => {
   

    return (
        <div>
           
            <Banner></Banner>
            <PopularContestSection></PopularContestSection>
            <TermsAndCondition></TermsAndCondition>
            <Testimonials></Testimonials>
            <ReleventSection></ReleventSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;