import Image from "next/image";

export default function Login() {
  return (
    <>
      <div className="flex h-screen w-screen">
        <div className="flex h-screen flex-col w-1/2 h-screen">
          <div className="flex flex-col m-auto mt-20 w-100 h-100 items-center ">
            <img src="logo.png" className="w-50 h-50 mb-3" alt="" />
            <div>
              <h3 className="text-5xl font-bold">Get Started</h3>
              <span className="text-gray-800/80 font-medium">
                Log-in or create account
              </span>
            </div>
            <div className="mt-10">
              <input
                className="bg-gray-200 rounded-sm w-70 h-9 p-1 text-center hover:bg-gray-200/85 focus:shadow-input duration-200"
                type="text"
                name=""
                id=""
                placeholder="username"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-200 rounded-sm w-70 h-9 p-1 text-center hover:bg-gray-200/85 focus:shadow-input duration-200"
                type="password"
                name=""
                id=""
                placeholder="password"
              />
            </div>
            <span className="text-primary underline mt-3 cursor-pointer">Don't have an account? Sign-up.</span>
            <div className="mt-15">
              <button className="w-70 h-10 bg-primary text-white font-bold font-barlowc cursor-pointer rounded-lg hover:scale-105 duration-200">
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/2 h-screen relative shadow-lg shadow-gray-500">
          <img src="/login.png" className="h-screen" alt="walpapper" />
        </div>
      </div>
    </>
  );
}
