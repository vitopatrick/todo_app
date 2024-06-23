import { prisma } from "@/prisma/script";
import SingleTodo from "./SingleTodo";
import { currentUser } from "@clerk/nextjs/server";

const Alltodos = async () => {
  const user = await currentUser();
  const todos =
    user &&
    (await prisma.todo.findMany({
      where: {
        user: {
          email: user.emailAddresses[0]?.emailAddress,
        },
      },
    }));

  return (
    <div className="my-5 space-y-4">
      {todos && todos.map((todo) => <SingleTodo todo={todo} key={todo.id} />)}
    </div>
  );
};

export default Alltodos;
