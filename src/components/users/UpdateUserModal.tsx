import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useSWRMutation from "swr/mutation";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import useUsers from "@/hooks/swr/useUsers";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import useUser from "@/hooks/swr/useUser";
import { FileEdit } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
});

type formSchemaType = z.infer<typeof formSchema>;

async function UpdateUser(url: string, { arg }: { arg: formSchemaType }) {
  return await axios.patch(url, arg);
}

type Props = {
  userId: number;
};

const UpdateUserModal = ({ userId }: Props) => {
  const [open, setOpen] = useState(false);

  const { data, mutate: mutateUser } = useUser(userId);
  const { mutate: mutateUsers } = useUsers();

  const { trigger } = useSWRMutation(`/users/${userId}`, UpdateUser, {
    onSuccess: () => {
      mutateUsers();
      mutateUser();
      toast.success("User Updated successfully");
    },
  });

  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    form.reset({
      name: data?.name,
      email: data?.email,
    });
  }, [data]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await trigger(values);
    form.reset();
    setOpen(false);
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
        !isOpen && form.reset();
      }}
    >
      <DialogTrigger asChild>
        <Button variant="secondary" size={"icon"}>
          <FileEdit />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <DialogHeader>
              <DialogTitle>Update User</DialogTitle>
              <DialogDescription>Lorem ipsum dolor</DialogDescription>
            </DialogHeader>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="peer-disabled:text-blue-300">Email</FormLabel>
                  <FormControl>
                    <Input disabled placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Update</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
export default UpdateUserModal;
