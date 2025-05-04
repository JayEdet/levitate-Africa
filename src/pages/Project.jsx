/* images */
import indigen from "/indigenous people.png";
import schoolOutreach from "/school outreach.jpg";
import solarProject from "/solar project.png";

/* framer animation */
import { motion } from "motion/react";
import {
  textVariant,
  containerVariants,
  itemVariants,
  reverseTextVariant,
  scaleUp,
} from "../animation";

export default function Project() {
  /* projects */
  const projects = [
    {
      image: schoolOutreach,
      heading: "Say no to drugs",
      writeup:
        "We carry out regular outreach programs to sensitize young people about the dangers of drug abuse",
    },
    {
      image: solarProject,
      heading: "Skill acquisition",
      writeup:
        "Reinforcing skill acquisition and trainings for young people, giving them opportunity to upskill themselves",
    },
  ];
  return (
    <>
      <div className="px-4 py-16 md:px-8 lg:p-24 space-y-8">
        <h3 className="headline_text header_text text-forestdeep-950">
          LAF's commitment to local communities and indigenous people
        </h3>
        <div className="md:w-8/12 mx-auto">
          <img src={indigen} className="w-full" alt="planting trees" />
        </div>
        <div className="writeup">
          <p>
            Community development and respect for human rights are central to
            our work. The most important inhabitants of any forest, river basin,
            or seascape are its people. Our mission—to create a future where
            nature and people thrive—rests on partnerships between LAF and the
            local and Indigenous communities in the places where we work. We
            know that communities depend on nature for many aspects of their
            lives—as a foundation for their culture, their food, their water,
            their efforts to create new forms of sustainable economic
            development, and more. And we know that conservation is only
            sustainable if it benefits local communities, and if they play an
            active role in the design, execution, and evaluation of programs,
            along with accountability when problems arise.
          </p>
          <h3 className="header_text text-forestdeep-950 mt-16">
            Sub initiative programs
          </h3>
          <p className="mb-8">
            We empower and sensitize young people, nudging them towards goals
            and aspirations. We encourage and support young people to live a
            life of purpose and healthy ambitions{" "}
          </p>

          <motion.div
            className="md:flex space-x-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
          >
            {projects.map((project, index) => (
              <motion.div
                className="pb-8 hover:shadow-lg transition duration-300"
                variants={itemVariants}
                key={index.writeup}
              >
                <img src={project.image} className="w-full h-64" alt="" />
                <h3 className="header_text text-forestdeep-950">
                  {project.heading}
                </h3>
                <p>{project.writeup}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
