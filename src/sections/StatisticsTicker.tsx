export const StatisticsTicker = () => {
    return (
        <div className="py-8 bg-white">
            <div className="container">
                <section className="">
                    <div className="container mx-auto flex flex-wrap justify-center gap-10 text-center [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                        <div className="flex flex-col items-center">
                            <FaUsers className="text-3xl" />
                            <p className="text-xl font-semibold mt-2">1,200+ connections made</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaMapMarkerAlt className="text-3xl " />
                            <p className="text-xl font-semibold mt-2">5 active cities</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaRegCalendarCheck className="text-3xl " />
                            <p className="text-xl font-semibold mt-2">50+ events this week</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

import { FaUsers, FaMapMarkerAlt, FaRegCalendarCheck, FaCameraRetro } from "react-icons/fa";