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
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
});

type formSchemaType = z.infer<typeof formSchema>;

async function CreateUser(url: string, { arg }: { arg: formSchemaType }) {
  return await axios.post(url, arg);
}

const CreateUserModal = () => {
  const [open, setOpen] = useState(false);

  const { mutate } = useUsers();
  const { trigger } = useSWRMutation(`/users`, CreateUser, {
    onSuccess: () => {
      mutate();
      toast.success("User created successfully");
    },
  });

  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

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
        <Button variant="default" size={"sm"} className="mb-3">
          Create
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <DialogHeader>
              <DialogTitle>Create User</DialogTitle>
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
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Create</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
export default CreateUserModal;
