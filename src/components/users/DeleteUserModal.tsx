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
import { Button } from "../ui/button";
import { BsTrash3 } from "react-icons/bs";
import useSWRMutation from "swr/mutation";
import axios from "axios";
import useUsers from "@/hooks/swr/useUsers";
type Props = {
  userId: number;
};

async function DeleteUser(url: string) {
  return await axios.delete(url);
}

const DeleteUserModal = ({ userId }: Props) => {
  const { mutate } = useUsers();
  const { trigger } = useSWRMutation(`/users/${userId}`, DeleteUser, {
    onSuccess: () => {
      mutate();
    },
  });

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size={"icon"}>
          <BsTrash3 />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the user and remove data from
            servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => trigger()}>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default DeleteUserModal;
