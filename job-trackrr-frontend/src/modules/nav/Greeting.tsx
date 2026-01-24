import { useUser } from "../main/settings/store/useUser";
const Greeting = () => {
  const { user } = useUser();

  return (
    <div className="w-full p-2 flex justify-between items-center">
      <h1 className="text-xl md:text-3xl  tracking-wider font-semibold">
        Welcome back, {user?.username}
      </h1>
    </div>
  );
};

export default Greeting;
