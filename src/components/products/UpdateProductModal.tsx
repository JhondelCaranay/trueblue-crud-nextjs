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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useSWRMutation from "swr/mutation";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import useProducts from "@/hooks/swr/useProducts";
import useUsers from "@/hooks/swr/useUsers";
import useProduct from "@/hooks/swr/useProduct";
import { FileEdit } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  price: z.coerce.number().min(0),
  quantity: z.coerce.number().min(0),
  userId: z.coerce.number().min(0),
});

type formSchemaType = z.infer<typeof formSchema>;

async function CreateProduct(url: string, { arg }: { arg: formSchemaType }) {
  return await axios.post(url, arg);
}

type Props = {
  productId: number;
};

const UpdateProductModal = ({ productId }: Props) => {
  const [open, setOpen] = useState(false);

  const { data, mutate: mutateProduct } = useProduct(productId);
  const { mutate: mutateProducts } = useProducts();
  const { data: userList } = useUsers();

  const { trigger } = useSWRMutation(`/products`, CreateProduct, {
    onSuccess: () => {
      mutateProducts();
      mutateProduct();
      toast.success("Product updated successfully");
    },
  });

  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    form.reset({
      name: data?.name,
      price: data?.price,
      quantity: data?.quantity,
      userId: data?.userId,
    });
  }, [data, form]);

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
              <DialogTitle>Update Product</DialogTitle>
              <DialogDescription>Lorem ipsum dolor</DialogDescription>
            </DialogHeader>
            {/* name */}
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
            {/* price */}
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="peer-disabled:text-blue-300">Price</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* quantity */}
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="peer-disabled:text-blue-300">Quantity</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* userId */}
            <FormField
              control={form.control}
              name="userId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Owner</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={String(field.value)}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {userList?.map((user) => (
                        <SelectItem key={user.id} value={String(user.id)}>
                          {user.email}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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
export default UpdateProductModal;
