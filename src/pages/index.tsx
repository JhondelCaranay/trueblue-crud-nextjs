import { Button } from "@/components/ui/button";
import UserTable from "@/components/users/UserTable";

export default function Users() {
  return (
    <>
      <Button variant="default" size={"sm"} className="mb-3">
        Create
      </Button>
      <UserTable />
    </>
  );
}
