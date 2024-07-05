import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import ContestTab from "./ContestTab";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SectionTitle from "../Component/SectionTitle";


const AllContest = () => {
    const axiosPublic = UseAxiosPublic();

    const { data: contests = [] } = useQuery({
        queryKey: ['contests'],
        queryFn: async () => {

            const res = await axiosPublic.get('/contests');
            return res.data;


        }
    })

    // console.log(contests)
    const approvedContests = contests.filter(contest => contest.status === "approved");
    // console.log(approvedContests)
    const DesignContests = approvedContests.filter(item => item.category === "DesignContests");
    const ArticleWriting = approvedContests.filter(item => item.category === "ArticleWriting");
    const MarketingStrategy = approvedContests.filter(item => item.category === "MarketingStrategy");
    const DigitalAdvertisementContests = approvedContests.filter(item => item.category === "DigitalAdvertisementContests");
    const GamingReview = approvedContests.filter(item => item.category === "GamingReview");
    const BookReview = approvedContests.filter(item => item.category === "BookReview");
    const BusinessIdeaConcerts = approvedContests.filter(item => item.category === "BusinessIdeaConcerts");
    const MovieReview = approvedContests.filter(item => item.category === "MovieReview");



 

    return (
        <div>
           
            <SectionTitle

                heading={"ALl contest"}
                subHeading={"Find Your Contest Here"}

            ></SectionTitle>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    approvedContests.map(contest => <ContestCard contest={contest} key={contest._id}></ContestCard>)
                }
            </div> */}

            <div className='text-center mb-8'>
                <Tabs >
                    <TabList>
                        <Tab>Design Contests</Tab>
                        <Tab>Article Writing</Tab>
                        <Tab>Marketing Strategy</Tab>
                        <Tab>Digital Advertisement Contests</Tab>
                        <Tab>Gaming Review</Tab>
                        <Tab>Book Review</Tab>
                        <Tab>Business Idea Concerts</Tab>
                        <Tab>Movie Review</Tab>
                    </TabList>


                    <TabPanel>
                        <ContestTab contest={DesignContests}></ContestTab>
                    </TabPanel>
                    <TabPanel>
                        <ContestTab contest={ArticleWriting}></ContestTab>
                    </TabPanel>
                    <TabPanel>
                        <ContestTab contest={MarketingStrategy}></ContestTab>
                    </TabPanel>
                    <TabPanel>
                        <ContestTab contest={DigitalAdvertisementContests}></ContestTab>
                    </TabPanel>
                    <TabPanel>
                        <ContestTab contest={GamingReview}></ContestTab>
                    </TabPanel>
                    <TabPanel>
                        <ContestTab contest={BookReview}></ContestTab>
                    </TabPanel>
                    <TabPanel>
                        <ContestTab contest={BusinessIdeaConcerts}></ContestTab>
                    </TabPanel>
                    <TabPanel>
                        <ContestTab contest={MovieReview}></ContestTab>
                    </TabPanel>



                </Tabs>
            </div>




        </div>
    );
};

export default AllContest;