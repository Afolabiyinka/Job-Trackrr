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
import { Loader2, Minus } from "lucide-react";
import { useDeleteJob } from "../../hooks/useDeleteJob";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const DeleteJobModal = ({ id }: { id: string }) => {
  const { handleDelete, loading } = useDeleteJob();
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Tooltip>
          <TooltipTrigger>
            <Button size={`icon-lg`} variant={`destructive`}>
              <Minus />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Delete Job</p>
          </TooltipContent>
        </Tooltip>
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this job?</AlertDialogTitle>

          <AlertDialogDescription>
            This action cannot be undone. The job will be permanently removed.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel size={`lg`}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            variant={`destructive`}
            size={`lg`}
            onClick={() => handleDelete(id)}
          >
            {loading ? (
              <Loader2 className="animate-spin h-8 w-6" />
            ) : (
              <>Delete job</>
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteJobModal;
