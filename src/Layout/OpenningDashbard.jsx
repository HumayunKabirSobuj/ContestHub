import { Player } from "@lottiefiles/react-lottie-player";


const OpenningDashbard = () => {
    return (
        <div>
            <div className="hidden lg:flex lg:justify-center lg:items-center  w-full h-full">
                <Player
                    autoplay
                    loop
                    src="https://lottie.host/fc5cc72a-9b5e-44e9-b2ac-b4ddb7f575ff/mvzy4d9kQi.json"
                    style={{ height: '600px', width: '500px' }}
                >

                </Player>
            </div>
            <div className="flex justify-center">
                <div className="flex lg:hidden justify-center items-center border border-red-600">
                    <Player
                        autoplay
                        loop
                        src="https://lottie.host/fc5cc72a-9b5e-44e9-b2ac-b4ddb7f575ff/mvzy4d9kQi.json"
                        style={{ height: '400px', width: '350px' }}
                    >

                    </Player>
                </div>
            </div>
        </div>
    );
};

export default OpenningDashbard;