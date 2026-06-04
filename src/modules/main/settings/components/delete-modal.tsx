import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

import { useDeleteAccount } from "../hooks/useDeleteAccount";
import CustomInput from "../../jobs/components/create-job/input/custom-input";
import { CopyButton } from "@/components/ui/copy-button";
import SpinningLoader from "@/components/loader/spinningloader";

const DeleteAccountModal = () => {
  const { handleDelete, loading, deleteInput, setDeleteInput, deletePhrase } =
    useDeleteAccount();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="lg">
          {loading ? <SpinningLoader /> : <span className="flex  items-center"><Trash className="mr-2" />
            Delete Account</span>}
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent size="default">
        <AlertDialogHeader>
          <AlertDialogTitle>Delete your account?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. Your account and all data will be
            permanently removed. <br />
            <h1 className="flex flex-col md:flex-row gap-1 md:items-center mt-2 ">
              Please type
              <p className="border rounded bg-muted p-0.5">{deletePhrase}</p> to
              confirm.
              <CopyButton value={deletePhrase} />
            </h1>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="">
          <CustomInput
            icon="CircleSlash"
            type="text"
            placeholder={deletePhrase}
            value={deleteInput}
            onChange={(e) => setDeleteInput(e)}
          />
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel size="lg">Cancel</AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            size="lg"
            disabled={deleteInput.trim() !== deletePhrase || loading}
            onClick={() => handleDelete()}
          >
            {loading ? (
              <SpinningLoader />
            ) : (
              <>Delete Account</>
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteAccountModal;
