import { TriangleSvg } from "@/svg/triangle";

const Menu = () => {
  return (
    <div>
      <div className="w-30 h-20 bg-orange-50 rounded-2xl flex flex-col justify-center items-center font-poppins">
        <div className="text-brown-800 cursor-pointer hover:text-brown-500">Perfil</div>
        <div className="text-brown-800 cursor-default">-</div>
        <div className="text-brown-800 cursor-pointer hover:text-brown-500">Logout</div>
      </div>
    </div>
  );
};

export default Menu;
