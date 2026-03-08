import FeaturesCard from "../components/FeaturesCard";
import { features } from "../utils/features";

const Features = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center p-3 md:p-16 gap-10">
      <span className="flex justify-center items-center flex-col text-center">
        <h1 className="text-3xl md:text-6xl font-bold tracking-tight leading-tight">
          Everything you need to <br /> land your Dream job
        </h1>
        <p className="text-md md:text-2xl leading-relaxed mt-2 text-muted-foreground">
          Powerful features designed to streamline your job search and increase
          your success rate
        </p>
      </span>
      <div className="grid md:grid-cols-3 gap-10 md:p-10">
        {features.map(({ description, icon, title }, i) => (
          <FeaturesCard icon={icon} desc={description} title={title} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Features;
