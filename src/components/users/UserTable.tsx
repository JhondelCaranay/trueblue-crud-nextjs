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
import useUsers from "@/hooks/swr/useUsers";
import { toast } from "react-hot-toast";
import DeleteUserModal from "./DeleteUserModal";
import CreateUserModal from "./CreateUserModal";
import UpdateUserModal from "./UpdateUserModal";
import ViewUserModal from "./ViewUserModal";

const UserTable = () => {
  const { data, error, isLoading } = useUsers();

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
      <CreateUserModal />
      <Table>
        <TableCaption>A list of your recent users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="hidden md:table-cell">#</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="hidden md:table-cell">Created</TableHead>
            <TableHead className="hidden md:table-cell">Updated</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((user, index) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium hidden md:table-cell">{index + 1}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell className="hidden md:table-cell">{formatDate(user.createdAt)}</TableCell>
              <TableCell className="hidden md:table-cell">{formatDate(user.updatedAt)}</TableCell>
              <TableCell className="flex items-center justify-end gap-1">
                <ViewUserModal userId={user.id} />
                <UpdateUserModal userId={user.id} />
                <DeleteUserModal userId={user.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
export default UserTable;
