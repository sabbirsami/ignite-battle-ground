import campus from "../../assets/camp.webp";
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
    return (
        <section className="container mx-auto px-6">
            <div className="py-32 grid grid-cols-5 justify-between items-center">
                <div className="col-span-3 space-y-10">
                    {/* <h1 className="text-4xl">Ignite battle ground</h1> */}
                    <div className="">
                        <h2 className="text-7xl">
                            Take your university admission preparation <br />{" "}
                            <span className="font-semibold">with Ignite</span>
                        </h2>
                        <p className="text-black/80 pt-8 w-5/6">
                            Explore a diverse range of courses tailored to your
                            interests and career goals. Our user-friendly
                            platform ensures a hassle-free admission process,
                            allowing you to enroll in courses with just a few
                            clicks.
                        </p>
                    </div>
                    <div className="space-x-3">
                        <button className="bg-rose-600 text-white px-7 py-3 rounded-full">
                            Register Now{" "}
                            <IoIosArrowRoundForward className="inline text-2xl" />
                        </button>
                        <button className="border-2 border-rose-600 text-rose-600 px-7 py-3 rounded-full">
                            Contact Us
                        </button>
                    </div>
                </div>
                <div className="col-span-2">
                    <img className="w-full" src={campus} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
