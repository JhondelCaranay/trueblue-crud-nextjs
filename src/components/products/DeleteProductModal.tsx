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
import useProducts from "@/hooks/swr/useProducts";

type Props = {
  productId: number;
};

async function DeleteProduct(url: string) {
  return await axios.delete(url);
}

const DeleteProductModal = ({ productId }: Props) => {
  const { mutate } = useProducts();
  const { trigger } = useSWRMutation(`/products/${productId}`, DeleteProduct, {
    onSuccess: () => {
      mutate();
    },
  });

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant="destructive" size={"icon"}>
          <BsTrash3 />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the product and remove data
            from servers.
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
export default DeleteProductModal;
