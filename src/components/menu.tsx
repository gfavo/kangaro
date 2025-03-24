import { handleLogout } from "@/services/logoutService";
import { useRouter } from "next/router";

const Menu = () => {

  return (
    <div>
      <div className="w-30 h-20 bg-white rounded-2xl flex flex-col justify-center items-center font-poppins">
        <div className="text-primary cursor-pointer hover:text-brown-500">Perfil</div>
        <div className="text-primary cursor-default"> - </div>
        <div className="text-primary cursor-pointer hover:text-brown-500" onClick={handleLogout}>Logout</div>
      </div>
    </div>
  );
};

export default Menu;
