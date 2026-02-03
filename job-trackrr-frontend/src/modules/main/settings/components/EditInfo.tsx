import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Mail, User } from "lucide-react";
import CustomInput from "../../jobs/components/create-job/input/custom-input";
import { useUser } from "../store/useUser";
import { useEditUser } from "../hooks/useEditUser";
import React, { useEffect } from "react";

const EditInfo = () => {
  const { user } = useUser();
  const { editData, handleEdit, loading, setEditData } = useEditUser();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    handleEdit();
  }
  useEffect(() => {
    if (user) {
      setEditData(user);
    }
  }, [user]);
  return (
    <Card>
      <CardHeader className="text-2xl">Edit your details</CardHeader>
      <CardContent>
        <form className="p-1" onSubmit={onSubmit}>
          <div className="grid md:grid-cols-3 gap-6 grid-cols-1">
            <CustomInput
              icon={<User />}
              placeholder="Username"
              type="text"
              id="username"
              value={editData.username}
              onChange={(e) => setEditData({ ...editData, username: e })}
            />
            <CustomInput
              icon={<Mail />}
              placeholder="Email"
              type="text"
              id="email"
              value={editData.email}
              onChange={(e) => setEditData({ ...editData, email: e })}
            />
          </div>
          <Button size={`lg`} className="mt-3" type="submit">
            {loading && <Loader2 className="h-6 w-6 animate-spin" />}
            Update your Details
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default EditInfo;
