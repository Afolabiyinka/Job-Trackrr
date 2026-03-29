import { Bell } from "lucide-react";
import { useUser } from "../settings/store/useUser";
import SearchInput from "./components/SearchInput";
import { Button } from "@/components/ui/button";
const Greeting = () => {
  const { user } = useUser();

  return (
    <div className="w-full flex flex-col md:flex-row gap-5 md:items-center  p-3 ml-2 justify-between md:px-6">
      <h1 className="text-lg md:text-xl font-semibold tracking-tight flex items-center gap-2">
        Welcome back,
        {user ? (
          <span className="truncate  max-w-32.5">{user.username}</span>
        ) : (
          <span className="inline-block h-6 w-32 rounded-md bg-gray-200 animate-pulse" />
        )}
        👋
      </h1>
      <div className="md:flex gap-3 items-center hidden">
        <SearchInput />
        <Button>
          <Bell />
        </Button>
      </div>
    </div>
  );
};

export default Greeting;
