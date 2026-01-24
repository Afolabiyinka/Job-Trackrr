import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Upload, User } from "lucide-react";
import CustomInput from "../../jobs/components/create-job/input/custom-input";
import { useUser } from "../store/useUser";

const EditInfo = () => {
  const { user } = useUser();
  return (
    <Card>
      <CardHeader className="text-2xl">Edit your details</CardHeader>
      <CardContent>
        <div className="p-1">
          <span className="flex flex-col md:flex-row gap-3 items-center mb-4">
            <Avatar className="animate-pulse flex items-center justify-center">
              <User size={30} />
            </Avatar>

            <Button size={`lg`}>
              <Upload className="mr-1" />
              Change Profile Pic
            </Button>
          </span>

          <div className="grid md:grid-cols-3 gap-6 grid-cols-1">
            <CustomInput
              icon={<User />}
              placeholder="Username"
              type="text"
              id="username"
              value={user?.username}
            />
            <CustomInput
              icon={<Mail />}
              placeholder="Email"
              type="text"
              id="email"
              value={user?.email}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EditInfo;
