import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import DeleteAccountModal from "./delete-modal";

const DeleteAccount = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="">Danger Zone</CardTitle>
        <CardDescription>
          Deleting your account is permanent and cannot be undone.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DeleteAccountModal />
      </CardContent>
    </Card>
  );
};

export default DeleteAccount;
