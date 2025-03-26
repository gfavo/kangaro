import { useFormStore } from "@/store/store";

const Verification = () => {
    const {changeTypeOfForm} = useFormStore();
  return (
    <div className="mt-10 flex flex-col items-center">
      <p className="font-poppins text-center">
        <span className="text-bold text-lg">
          You're almost done! <br />{" "}
        </span>
        <span className="text-gray-500">
          We sent a verification email to your adress. Please click the link on
          the email to verify your accout.
          <br />{" "}
        </span>
      </p>
      <button
        type="submit"
        className={
          "w-70 h-10 bg-primary text-white font-bold font-barlowc cursor-pointer rounded-lg hover:scale-105 duration-200 justify-center items-center flex focus:bg-orange-200 mt-10"
        }
        onClick={() => changeTypeOfForm('login')}
      >
        Already Verified!
      </button>
    </div>
  );
};

export default Verification;
