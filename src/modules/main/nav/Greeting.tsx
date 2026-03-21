import { Bell } from "lucide-react";
import { useUser } from "../settings/store/useUser";
import SearchInput from "./components/SearchInput";
import { Button } from "@/components/ui/button";
const Greeting = () => {
  const { user } = useUser();

  return (
    <div className="w-full flex flex-col md:flex-row gap-5 md:items-center  p-3 ml-2 justify-between md:px-6">
      <h1 className="md:text-xl  tracking-wider font-semibold flex flex-col md:flex-row gap-2 items-center">
        Welcome back,{" "}
        {user ? (
          <p>{user?.username}</p>
        ) : (
          <span className="p-3 w-48  rounded-xl bg-gray-100 animate-pulse" />
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
