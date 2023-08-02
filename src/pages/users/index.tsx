import { Button } from "@/components/ui/button";
import UserTable from "@/components/users/UserTable";

const Users = () => {
  return (
    <>
      <Button variant="default" size={"sm"} className="mb-3">
        Create
      </Button>
      <UserTable />
    </>
  );
};
export default Users;
