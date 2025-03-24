import { useAuth } from "@/context/authContext";
import { useDashTabStore } from "@/store/store";
import {
  HomeTwoTone,
  SchoolTwoTone,
  EmojiEmotionsTwoTone,
  ClassTwoTone,
} from "@mui/icons-material";

const SideMenu = () => {
  const { user } = useAuth();
  const { setSelectedDashTab } = useDashTabStore();

  return (
    <div className="w-80 h-full border-r-2 border-gray-500/20 bg-gray-100/20">
      <div className="mt-40 flex flex-col w-full justify-around items-center">
        <span className="font-barlow text-gray-400 text-sm self-start ml-10 font-bold cursor-default">Dashboard</span>
        <div onClick={() => setSelectedDashTab('home')} className="text-md p-2 w-full text-center text-gray-500 hover:text-primary hover:bg-gray-200 cursor-pointer font-poppins font-500 duration-150 flex pl-10">
          <span>
            {" "}
            <HomeTwoTone className="m-auto mr-2" />
            Início
          </span>
        </div>
        <div onClick={() => setSelectedDashTab('students')} className="text-md p-2 w-full text-center text-gray-500 hover:text-primary hover:bg-gray-200 cursor-pointer font-poppins font-500 duration-150 flex pl-10">
          <span>
            {" "}
            <EmojiEmotionsTwoTone className="m-auto mr-2" />
           {user?.role == "teacher" ? <span>Meus Alunos</span> : <span>Alunos</span> }
          </span>
        </div>{" "}
        {(user?.role === "master" || user?.role === "admin") ? (
          <div onClick={() => setSelectedDashTab('teachers')} className="text-md p-2 w-full text-center text-gray-500 hover:text-primary hover:bg-gray-200 cursor-pointer font-poppins font-500 duration-150 flex pl-10">
            <span>
              {" "}
              <SchoolTwoTone className="m-auto mr-2" />
              Professores
            </span>
          </div>
        ) : (
          ""
        )}
        <div onClick={() => setSelectedDashTab('classes')} className="text-md p-2 w-full text-center text-gray-500 hover:text-primary hover:bg-gray-200 cursor-pointer font-poppins font-500 duration-150 flex pl-10">
          <span>
            {" "}
            <ClassTwoTone className="m-auto mr-2" />
            Aulas
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
