import { TriangleSvg } from "@/svg/triangle";

const Menu = () => {
  return (
    <div>
      <div className="w-50 h-50 absolute top-19 ml-30">
        <TriangleSvg />
      </div>
      <div className="w-70 h-50 bg-orange-50 mt-70 rounded-2xl"></div>
    </div>
  );
};

export default Menu;
