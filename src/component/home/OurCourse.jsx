// import { useState } from "react";
import courseImage from "../../assets/course.png";
import { TbSquareRoundedCheckFilled } from "react-icons/tb";
const OurCourse = () => {
    const courseFeature = [
        "One to One live meet class",
        "Daily quiz before class",
        "Weekly Test",
        "Provide exclusive notes",
        "Previous years question solving",
        "WhatsApp support group",
    ];
    // const [showMore, setShowMore] = useState(250)
    return (
        <section className="container mx-auto px-6 pt-6 pb-16">
            <div className="">
                <div className="grid grid-cols-7 justify-between items-start">
                    <div className="col-span-3">
                        <img src={courseImage} alt="" />
                    </div>
                    <div className=""></div>
                    <div className="col-span-3 ">
                        <div className="w-11/12">
                            <h2 className="text-4xl font-semibold">
                                Varsity B Unit + Batch Admission Course - 2023
                            </h2>
                            <h2 className="text-5xl font-semibold py-6 text-green-500">
                                ৳3500{" "}
                                <span className="text-3xl line-through text-black/50">
                                    ৳4500
                                </span>
                            </h2>
                            <p className="">
                                {/* Batch admission test is held every year through
                            intense competition of lakhs of students to make
                            their place in a public university in Bangladesh. */}
                                Enroll today in Ignite Varsity B Unit + Batch
                                Admission 2023 course to prepare yourself in the
                                light of the experience of the best teachers in
                                the country to crack the batch admission exam &
                                Ensure Your Best Preparation!
                            </p>
                            <div className=" pt-6">
                                {courseFeature.map((c, idx) => (
                                    <div
                                        className="border pe-10 ps-6 py-5 mt-3 rounded-md shadow-emerald-300/10 shadow-md"
                                        key={idx}
                                    >
                                        <p className="">
                                            <TbSquareRoundedCheckFilled className="inline text-2xl me-3 text-green-500" />{" "}
                                            {c}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <button className="pt-6 w-full">
                                <div className=" pe-10 ps-6 py-5 mt-3 rounded-md bg-green-400 text-white font-semibold shadow-md">
                                    <p className="">Enroll Now</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurCourse;
