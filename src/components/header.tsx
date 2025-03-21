import Person2Icon from "@mui/icons-material/Person2";
import Menu from "./menu";
import { useState } from "react";

export const Header = () => {
  const [profileMenuVisibility, setProfileMenuVisibility] = useState<"hidden" | "visible">("hidden");
const openModal = () =>{
     setProfileMenuVisibility(profileMenuVisibility  == "hidden" ? "visible" : "hidden");
}
  return (
    <>
      <div className="w-screen h-20 border-b-3 border-gray-500/30 shadow-lg flex flex-row justify-between items-center bg-primary pr-10 pl-10">
        <img src="logo2.png" className="w-20 h-20" alt="" />{" "}
        <div>
          <Person2Icon fontSize="large" className="text-white cursor-pointer" onClick={openModal}/>
          <div className="z-1 absolute right-0" style={{visibility: profileMenuVisibility}}><Menu/></div>
        </div>
      </div>
    </>
  );
};

