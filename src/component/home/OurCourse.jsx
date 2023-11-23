import courseImage from "../../assets/course.png";
const OurCourse = () => {
    return (
        <section className="container mx-auto px-6 ">
            <div className="">
                <div className="grid grid-cols-7 justify-between items-start">
                    <div className="col-span-3">
                        <img src={courseImage} alt="" />
                    </div>
                    <div className=""></div>
                    <div className="col-span-3">
                        <h2 className="text-5xl">
                            Varsity B Unit + Batch Admission Course - 2023
                        </h2>
                        <p className="pt-6">
                            Batch admission test is held every year through
                            intense competition of lakhs of students to make
                            their place in a public university in Bangladesh.
                            Enroll today in Ignite Varsity B Unit + Batch
                            Admission 2023 course to prepare yourself in the
                            light of the experience of the best teachers in the
                            country to crack the batch admission exam. 75 Live
                            Classes, Lecture Sheets, Daily and Weekly Exams, 10
                            Model Tests with Previous Year&#39;s Batch Admission
                            Exam Question Solution Classes Ensure Your Best
                            Preparation!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurCourse;
