import { useUser } from "../main/settings/store/useUser";
const Greeting = () => {
  const { user } = useUser();

  return (
    <div className="w-full flex items-center  p-3 ml-2">
      <h1 className="md:text-xl  tracking-wider font-semibold flex gap-2 items-center">
        Welcome back,{" "}
        {user ? (
          <p>{user?.username}</p>
        ) : (
          <span className="p-3 w-48  rounded-xl bg-gray-100 animate-pulse" />
        )}
        👋
      </h1>
    </div>
  );
};

export default Greeting;
