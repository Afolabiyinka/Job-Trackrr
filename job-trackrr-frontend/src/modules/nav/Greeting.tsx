import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "../main/settings/store/useUser";
const Greeting = () => {
  const { user } = useUser();

  return (
    <div className="w-full flex items-center justify-between p-1 ml-2">
      <h1 className="md:text-xl  tracking-wider font-semibold flex gap-2 items-center">
        Welcome back,{" "}
        {user ? (
          <p>{user?.username}</p>
        ) : (
          <span className="p-5 w-64  rounded-xl bg-gray-100 animate-pulse" />
        )}
        👋
      </h1>

      <Avatar className="size-14 flex justify-center items-center mr-2">
        <AvatarImage src="https://i.pinimg.com/736x/73/a9/0c/73a90c529c97dece141df5b8e4b20fc3.jpg"></AvatarImage>
        <AvatarFallback>{user?.username.substring(0, 1)}</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Greeting;
