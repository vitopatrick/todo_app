"use server";
import { prisma } from "@/prisma/script";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const formSchema = z.object({
  todo: z.string().min(0, { message: "Please enter a valid todo" }),
});

export const addTodo = async (
  values: z.infer<typeof formSchema>,
  userId: string | any
) => {
  if (!userId) {
    redirect("/sign-in");
  }

  try {
    await prisma.todo.create({
      data: {
        todo: values.todo,
      },
    });

    revalidatePath("/");

    return "Added To Do to list";
  } catch (error) {
    return "Could Not Add to do";
  }
};
