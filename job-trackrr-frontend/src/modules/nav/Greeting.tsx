import { useUser } from "../main/settings/store/useUser";
const Greeting = () => {
  const { user } = useUser();

  return (
    <div className="w-full p-2 flex  items-center">
      <h1 className="text-xl md:text-3xl  tracking-wider font-semibold flex gap-2 items-center">
        Welcome back,{" "}
        {user ? (
          <p>{user?.username}</p>
        ) : (
          <span className="p-5 w-64  rounded-lg bg-gray-100 animate-pulse" />
        )}
      </h1>
    </div>
  );
};

export default Greeting;
