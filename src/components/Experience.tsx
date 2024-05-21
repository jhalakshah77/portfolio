import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Developer"
            subTitle="Emirates Group - (Apr,2021 - Dec,2021)"
            result="Dubai"
            des="Developed internal web applications and integrate that with already working Dnata service.
            Lead a team of 4 developers, giving support to the client's multi-cultural team, 
            providing feedback, clarifying requirements and helping with technical questions.
            Keep the Project Manager and the IT Leads updated on the overall progress of the 
            projects and manage the tasks distributed to the team"
          />
          <ResumeCard
            title="Sr. Software Developer"
            subTitle="Emirates Group - (2019 - 2020)"
            result="Dubai"
            des="Developed B2C web applications and integrate that with Emirates.com.
            Lead a team of 10 front end developers, giving support to the client's multi-cultural team, 
            providing feedback, clarifying requirements and helping with technical questions.
            Keep the Project Manager and the IT Leads updated on the overall progress of the 
            projects and manage the tasks distributed to the team.Defect fixes and Working on UAT issues of other modules.Google analytics coding for the entire solution."
          />
          <ResumeCard
            title="Sr. Software Developer"
            subTitle="Nike - (2017 - 2019)"
            result="Mumbai"
            des="Pricing Solution for Gallo, Pricing solution for the client called Gallo (Alcohol Industry).
             Reimbursement Solution, system to calculate and reimburse the amount and maintain the 
            transactions for the reimbursement done by client like Pernod Ricard and their distributos and 
            clients."
          />
          <ResumeCard
            title="Software Developer"
            subTitle="Nike - (2014 - 2017)"
            result="Mumbai"
            des="Pricing Management Solution, it was related to development of template due to high demand 
            in the Alcohol and beverages industry for the pricing solution."
          />
        </div>
      </div>
     {/*  <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
