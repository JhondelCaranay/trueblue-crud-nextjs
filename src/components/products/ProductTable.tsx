import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "../../lib/utils/formatDate";
import { Products } from "@/types/Product";
import { Button } from "../ui/button";
import { FileEdit } from "lucide-react";
import useProducts from "@/hooks/swr/useProducts";
import { toast } from "react-hot-toast";
import DeleteProductModal from "./DeleteProductModal";
import CreateProductModal from "./CreateProductModal";
import UpdateProductModal from "./UpdateProductModal";

const ProductTable = () => {
  const { data, error, isLoading } = useProducts();

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    if (typeof error.message === "string") {
      toast.error(error.message);
    } else {
      toast.error("An error occured");
    }
  }

  return (
    <>
      <CreateProductModal />
      <Table>
        <TableCaption>A list of your recent products.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="hidden md:table-cell">#</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Owner</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead className="hidden md:table-cell">Created</TableHead>
            <TableHead className="hidden md:table-cell">Updated</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((product, index) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium hidden md:table-cell">{index + 1}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.user.name}</TableCell>
              <TableCell className="text-right">{product.price}</TableCell>
              <TableCell className="text-right">{product.quantity}</TableCell>
              <TableCell className="hidden md:table-cell">
                {formatDate(product.createdAt)}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {formatDate(product.updatedAt)}
              </TableCell>

              <TableCell className="flex items-center justify-end gap-1">
                <UpdateProductModal productId={product.id} />
                <DeleteProductModal productId={product.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
export default ProductTable;
