import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="h-screen  rounded-lg p-10 flex gap-4">
      <span className="md:w-1/2 h-full  text-center">
        <h1 className="text-5xl capitalize tracking-widest leading-15">
          A structured way to track your job applications
        </h1>
      </span>
      <motion.span
        whileInView={{ scale: 0.8 }}
        viewport={{ amount: 0.6 }}
        transition={{ duration: 1 }}
        exit={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="border rounded-xl  md:w-1/2 h-full border-r-8 border-t-8 border-t-primary border-r-primary"
      ></motion.span>
    </div>
  );
};

export default About;
