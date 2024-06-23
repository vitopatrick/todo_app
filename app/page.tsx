import Alltodos from "@/components/todo/Alltodos";
import AddToDoForm from "../components/todo-form/AddToDoForm";

const Home = () => {
  return (
    <div className="bg-white h-screen text-black">
      <div className="flex flex-col justify-center py-14 lg:w-[40%] p-4 mx-auto">
        <AddToDoForm />
        <Alltodos />
      </div>
    </div>
  );
};

export default Home;
