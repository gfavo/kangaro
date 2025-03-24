import Person2Icon from "@mui/icons-material/Person2";
import Menu from "./menu";
import { useState } from "react";
import { useAuth } from "@/context/authContext";
import { User } from "@/models/user";

export const Header = () => {
  const [profileMenuVisibility, setProfileMenuVisibility] = useState<"hidden" | "visible">("hidden");
  const {user} = useAuth();
const openModal = () =>{
     setProfileMenuVisibility(profileMenuVisibility  == "hidden" ? "visible" : "hidden");
}
  return (
    <>
      <div className="w-screen h-18 border-b-2 border-gray-500/20 flex flex-row justify-between items-center bg-gray-500/6 pr-10 pl-10">
        <img src="logo.png" className="w-15 h-15" alt="" />{" "}
        <h1 className='text-3xl text-primary capitalize font-poppins'><b>{(user as User)?.organizationName.toUpperCase()}</b></h1>
        <div>
          <Person2Icon fontSize="large" className="text-primary cursor-pointer" onClick={openModal}/>
          <div className="z-1 absolute right-0" style={{visibility: profileMenuVisibility}}><Menu/></div>
        </div>
      </div>
    </>
  );
};

