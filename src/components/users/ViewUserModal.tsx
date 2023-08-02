import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import useUser from "@/hooks/swr/useUser";
import { AiOutlineEye } from "react-icons/ai";
import { formatDate } from "@/lib/utils/formatDate";
import useProduct from "@/hooks/swr/useProduct";

type Props = {
  userId: number;
};

const ViewUserModal = ({ userId }: Props) => {
  const [open, setOpen] = useState(false);
  const { data: user } = useUser(userId);

  return (
    <Dialog open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
      <DialogTrigger asChild>
        <Button variant="secondary" size={"icon"}>
          <AiOutlineEye size={25} />
        </Button>
      </DialogTrigger>
      <DialogContent className="lg:max-w-screen-lg overflow-y-scroll max-h-screen">
        <DialogHeader>
          <DialogTitle>{user?.name} owned products</DialogTitle>
          <DialogDescription>{user?.email}</DialogDescription>
        </DialogHeader>
        <Table>
          <TableCaption>A user owned products.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden md:table-cell">#</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead className="hidden md:table-cell">Created</TableHead>
              <TableHead className="hidden md:table-cell">Updated</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {user?.products?.map((product, index) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium hidden md:table-cell">{index + 1}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell className="text-right">{product.price}</TableCell>
                <TableCell className="text-right">{product.quantity}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {formatDate(product.createdAt)}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {formatDate(product.updatedAt)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
};
export default ViewUserModal;
