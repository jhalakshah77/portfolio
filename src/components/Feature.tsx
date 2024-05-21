import { AiFillAppstore } from "react-icons/ai";

import { SiProgress } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Website Development"
            des="Website development using MERN stack, Bootstrap, tailwind css and Redux, Redux toolkit for state management"
            icon={null}
          />
          <Card
            title="App Development"
            des="App development using React-native, Bootstrap, Nodejs"
            icon={<AiFillAppstore />}
          />
          <Card
            title="Backend API development"
            des="API development using vanilla javascript and Nodejs."
            icon={<SiProgress />}
          />
         {/*  <Card
            title="Mobile Development"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
            icon={<FaMobile />}
          /> 
          <Card
            title="UX Design"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
            icon={<SiAntdesign />}
          />
          <Card
            title="Hosting Websites"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
            icon={<FaGlobe />}
          />
          */}
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
