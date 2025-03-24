import { useAuth } from "@/context/authContext";
import { User } from "@/models/user";

const Home = () => {
    const {user} = useAuth();
  return (
    <div className="flex flex-col items-center pt-10 h-full w-full">
      <h2 className="font-barlow text-4xl">
        <span className="text-gray-600">Hello, </span>
        <span className="">{(user as User)?.name}</span>!
      </h2>
      <span>
        Role:
        <label className="text-green-500"> {(user as User)?.role}</label>
      </span>
    </div>
  );
};

export default Home;
