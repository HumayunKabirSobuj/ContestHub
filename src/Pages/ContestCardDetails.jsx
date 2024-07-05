import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";



const ContestCardDetails = () => {


  const { user } = useContext(AuthContext);
  // console.log(user)









  const contest = useLoaderData();
  const [timeLeft, setTimeLeft] = useState('');


  useEffect(() => {
    if (contest && contest.ContestDeadline) {
      const calculateTimeLeft = () => {
        const deadline = new Date(contest.ContestDeadline);
        const now = new Date();
        const difference = deadline - now;

        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((difference / 1000 / 60) % 60);
          const seconds = Math.floor((difference / 1000) % 60);

          setTimeLeft(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
        } else {
          setTimeLeft('not-available');
        }
      };

      const timer = setInterval(calculateTimeLeft, 1000);
      return () => clearInterval(timer);
    }
  }, [contest]);

  if (!contest) {
    return <div>Loading...</div>;
  }




  // console.log(contest)
  return (
    <div>
   
      <div className="flex justify-center">
        <div className="card  bg-base-100 shadow-xl my-8 md:w-2/3 w-full md:px-0 px-5">
          <figure><img className="w-full h-[400px]" src={contest.contestImage} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="text-3xl text-center  font-bold mb-5">{contest.ContestName}</h2>
            <p className="md:text-left lg:text-left text-center md:flex hidden">{contest.ContestDescription}</p>
            <p className="md:text-left lg:text-left text-center md:hidden flex" title="">{contest.ContestDescription.slice(0, 400)}...</p>
            <div className="flex md:flex-row flex-col md:gap-0 gap-5 justify-evenly text-center my-5">
              <p className="text-xl"><span className="font-bold">Contest Prize : </span> ${contest.ContestPrice}</p>
              <p className="text-xl"><span className="font-bold">Prize Money : </span> ${contest.PrizeMoney}</p>
            </div>

            <p className="text-lg font-bold text-center my-6">Time Left: <span className="text-2xl">{timeLeft}</span></p>
            <p className="flex items-center gap-3 justify-center mb-5"><span className="text-xl font-bold">Attempted count </span> : <span className="text-3xl font-bold"> 0</span></p>
            <div className="card-actions justify-center">

              {
                contest.CreatorEmail !== user?.email
                  ?
                  <Link className="w-full text-center" to={`/payment/${contest._id}`}>
                    <button className="btn btn-primary w-1/3" disabled={timeLeft === 'not-available'}>Registration</button>

                  </Link>
                  :

                  <Link disabled className="w-full text-center">

                    <button disabled className="btn btn-primary w-1/3" >Registration</button>
                    <p className="text-xl font-bold text-red-600 my-5" >You Can Not Register Your Own Contest</p>

                  </Link>
              }


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestCardDetails;