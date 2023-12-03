import workConfig from "../config/Work.config.json";
import { GrCloudComputer } from "react-icons/gr";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useState } from "react";

const Work = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleChange = (direction) => {
    if (direction === "next") {
      if (slideIndex < workConfig.experince.length - 1) {
        setSlideIndex((prevState) => prevState + 1);
      } else {
        setSlideIndex(0);
      }
    } else {
      if(slideIndex !== 0){
        setSlideIndex((prevState) => prevState - 1);
      }
    }
  };
  return (
    <div
      name="work"
      className="w-full md:h-screen text-gray-300 bg-dark-theme-color"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6"></p>
        </div>

        {/* container for projects */}
        <div className="flex items-center justify-between w-full">
          <div>
            <FaArrowCircleLeft
              onClick={() => handleChange("prev")}
              className="cursor-pointer"
            />
          </div>

          <div className="">
            <div className="flex items-center">
              <div className="pr-4">
                <GrCloudComputer size="30px" />
              </div>
              <div>
                <span className="text-2xl text-">
                  {workConfig.experince[slideIndex].company}
                </span>
                <p className="text-sm">
                  {workConfig.experince[slideIndex].durations}
                </p>
                <p className="text-sm">
                  {workConfig.experince[slideIndex].location}
                </p>
              </div>
            </div>
            <div className="flex mt-[20px]">
              <div className="w-[5px] rounded bg-slate-50 mt-[15px] mb-[15px] ml-[12px] mr-[30px] flex flex-col items-center">
                <div className="w-[10px] h-[10px] rounded-full border border-black shadow-lg bg-slate-50"></div>
              </div>
              <div>
                <div>
                  <span>{workConfig.experince[slideIndex].position}</span>
                  <p>{workConfig.experince[slideIndex].from}</p>
                  <p>{workConfig.experince[slideIndex].site}</p>
                </div>
                <div>
                  {workConfig.experince[slideIndex].responsibilities.map(
                    (eachResponsibility, index) => (
                      <div key={index}>{eachResponsibility}</div>
                    )
                  )}
                </div>
                <div>
                  <span>{workConfig.experince[slideIndex].skills}</span>
                </div>
              </div>
            </div>
          </div>
          <div onClick={() => handleChange("next")}>
            <FaArrowCircleRight className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
