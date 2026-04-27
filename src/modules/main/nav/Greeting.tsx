import { Bell } from "lucide-react";
import { useUser } from "../settings/store/useUser";
import SearchInput from "./components/SearchInput";
import { Button } from "@/components/ui/button";
const Greeting = () => {
  const { user } = useUser();

  return (
    <div className="w-full flex flex-col md:flex-row gap-5 md:items-center  p-3 ml-2 justify-between md:px-6">
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
        <Button size={`icon-lg`}>
          <Bell />
        </Button>
      </div>
    </div>
  );
};

export default Greeting;
