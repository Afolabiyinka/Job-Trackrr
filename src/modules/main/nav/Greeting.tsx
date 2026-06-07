import { useUser } from "../settings/store/useUser";
import SearchInput from "./components/SearchInput";
const Greeting = () => {
  const { user } = useUser();

  return (
    <div className="w-full flex flex-col md:flex-row gap-5 md:items-center  justify-between">
      <h1 className="text-lg md:text-xl flex md:items-center gap-2">
        Welcome back,
        {user ? (
          <span className="truncate font-semibold  max-w-32.5">
            {user.username}   👋
          </span>
        ) : (
          <span className="inline-block h-5 w-50 rounded-full bg-muted animate-pulse" />
        )}

      </h1>
      <div className="md:flex gap-3 items-center hidden">
        <SearchInput />
      </div>
    </div>
  );
};

export default Greeting;
