"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addTodo } from "@/actions/todo";
import { useAuth, useUser } from "@clerk/nextjs";
import { toast } from "sonner";

const formSchema = z.object({
  todo: z.string().min(0, { message: "Please enter a valid todo" }),
});

const AddToDoForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      todo: "",
    },
  });

  const user = useUser();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const returnText = await addTodo(
      values,
      user.user?.emailAddresses[0].emailAddress
    );
    toast(returnText);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="todo"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Enter To do</FormLabel>
                <FormControl>
                  <Input placeholder="Enter to do" {...field} />
                </FormControl>
                <FormDescription>
                  This is where you enter the to do for the day
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="inline-block w-full text-base">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};

export default AddToDoForm;
