import person01 from "../../assets/teacher/person01.jpg";
import person02 from "../../assets/teacher/person02.jpg";
import person03 from "../../assets/teacher/person03.jpg";
import person04 from "../../assets/teacher/person014.jpg";
// import { FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Teachers = () => {
    const teachers = [
        {
            name: "Shoyeb Akter",
            university: "Dhaka University",
            study: "Department Of Law",
            img: person01,
            subject: ["English", "General Knowledge"],
        },
        {
            name: "Sabrina Rahman",
            university: "Dhaka University",
            img: person02,
            study: "Department Of Law",
            subject: ["Bangla 1st paper", "Bangla 2st paper"],
        },
        {
            name: "Nawshad Hasan Prince",
            university: "Rajshahi University",
            img: person03,
            study: "Department Of Philosophy",
            subject: ["Examiner"],
        },
        {
            name: "Sabbir Mohammad Sami",
            img: person04,
            university: "Why you want to know?",
            study: "",
            subject: ["Web developer"],
        },
    ];
    return (
        <div className="container mx-auto px-6">
            <div className="pt-6 pb-16 ">
                <h2 className="text-5xl">Course instructors</h2>
                <div className="w-1/12 h-1 bg-black mt-4"></div>
                <div className="grid grid-cols-4 py-10 gap-6 mt-6">
                    {teachers.map((teacher, idx) => (
                        <div className="border" key={idx}>
                            <img src={teacher.img} alt="" className="" />
                            <div className="p-6 grid grid-cols-6 gap-4 justify-between items-start ">
                                <div className="col-span-5">
                                    <h2 className="text-2xl font-semibold">
                                        {teacher.name}
                                    </h2>
                                    <p className="">
                                        <span className="">
                                            {teacher.university}
                                        </span>
                                    </p>
                                    {/* <p className="pt-3">
                                        {teacher.subject?.[0] ===
                                        "Web developer"
                                            ? ""
                                            : ""}
                                        {teacher.subject.map((s, idx) => (
                                            <span
                                                className=" text-xs text-rose-700 rounded-full px-1.5 py-0.5 bg-rose-200/30 font-semibold inline-block me-1"
                                                key={idx}
                                            >
                                                {s}{" "}
                                            </span>
                                        ))}
                                    </p> */}
                                </div>
                                {/* <div className="col-span-1 space-y-2">
                                    <div className="text-xl bg-blue-500 text-white w-10 h-10 flex justify-center items-center">
                                        <FaFacebookF />
                                    </div>
                                    <div className=" text-xl bg-green-300 w-10 h-10 flex justify-center items-center">
                                        <FaWhatsapp />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Teachers;
