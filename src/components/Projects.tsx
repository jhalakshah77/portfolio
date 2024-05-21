import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectThree, projectTwo } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="REAL ESTATE WEBSITE"
            des="This website is a mini clone of UAE's leading real estate website (Bayut) for selling, renting properties"
            src={projectOne}
            sourceCodeLink="https://github.com/jhalakshah77/mern-estate"
            liveLink="https://mern-estate-fxdm.onrender.com/"
          />
          <ProjectsCard
            title="Moviex Website"
            des=" Moviex contains various information on movies and tv shows like treanding, most rated movies or tv shows and details of cast and crew and ratings"
            src={projectTwo}
            sourceCodeLink="https://github.com/jhalakshah77/moviex"
            liveLink="https://moviex-gray.vercel.app/"
          />
          <ProjectsCard
            title="Chatting App"
            des="Live Chat application for texting and sending images"
            src={projectThree}
            sourceCodeLink="https://github.com/jhalakshah77/mern-chat-application"
            liveLink="mern-chat-application-bujw.onrender.com"
          />
         {/*  <ProjectsCard
            title="SOCIAL MEDIA CLONE"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectThree}
          />
          <ProjectsCard
            title="E-commerce Website"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectOne}
          />
          <ProjectsCard
            title="Chatting App"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectTwo}
          /> */}
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
