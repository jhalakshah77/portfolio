import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1996 - 2014</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelors of Engineering in Information Technology"
            subTitle="Dwarkdas J. Sanghvi College of Engineering"
            result="63%"
            des="University of Mumbai, Mumbai, Maharashtra, India"
          />
          <ResumeCard
            title="Higher Secondary Education"
            subTitle="Mithibai College"
            result="76.77%"
            des="Maharashtra State Board, Mumbai, Maharashtra, India"
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Aspee Nutan Vidya Mandir High School"
            result="90.32%"
            des="Maharashtra State Board, Mumbai, Maharashtra, India"
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Developer"
            subTitle="Emirates Group - (Apr 2021 - Dec 2021)"
            result="Dubai"
            des="Was a part of Cargo management team in DNata part of Emirates Group"
          />
          <ResumeCard
            title="Sr. Software Developer"
            subTitle="Emirates Group - (2019 - 2020)"
            result="Dubai"
            des="Part of DEX team to develop the website used in Dubai Expo-2020."
          />
          <ResumeCard
            title="Sr. Software Developer"
            subTitle="Vistaar Syatems - (2014 - 2019)"
            result="Mumbai"
            des="Part of a team responsible for developing solutions for pricing of the products and trends in the winery industry"
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Education;
