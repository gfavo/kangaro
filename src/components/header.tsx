import Person2Icon from "@mui/icons-material/Person2";
import Menu from "./menu";

export const Header = () => {
  return (
    <>
      <div className="w-screen h-20 border-b-3 border-gray-500/30 shadow-lg flex flex-row justify-between items-center bg-primary pr-10 pl-10">
        <img src="logo2.png" className="w-20 h-20" alt="" />{" "}
        <div onClick={openModal} className="cursor-pointer">
          <Person2Icon fontSize="large" className="text-white" />
          <div className="z-1 absolute -top-20"><Menu/></div>
        </div>
      </div>
    </>
  );
};

const openModal = () =>{

}