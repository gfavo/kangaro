import { useFormStore } from "@/store/store";
import { useState } from "react";
import { useActionState } from "react";
import { UserFormData } from "@/types/userFormData";

export default function LoginSingup() {
  const { type, changeTypeOfForm } = useFormStore();
  const [state, formAction] = useActionState(async (prevState: any, formData: FormData) => {
    try {
      const reqData: UserFormData = {
        name: formData.get("name") as string,
        username: formData.get("username") as string,
        password: formData.get("password") as string,
      };

      const response = await fetch("http://localhost:5000/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqData),
      });

      if (!response.ok) {
        throw new Error("Failed to register user");
      }

      const data = await response.json();
      return { success: data.message as string};
    } catch (error) {
      return { error: (error as Error).message };
    }
  }, {success: ''});

  useState(() => {
    changeTypeOfForm();
  });

  if (type === "login") {
    console.log(type);
    return (
      <>
        {" "}
        <div className="mt-10">
          <input
            className="bg-gray-200 rounded-sm w-70 h-9 p-1 text-center hover:bg-gray-200/85 focus:shadow-input duration-200"
            type="text"
            name="username"
            id=""
            placeholder="username"
          />
        </div>
        <div className="mt-2">
          <input
            className="bg-gray-200 rounded-sm w-70 h-9 p-1 text-center hover:bg-gray-200/85 focus:shadow-input duration-200"
            type="password"
            name="password"
            id=""
            placeholder="password"
          />
        </div>
        <span
          className="text-primary underline mt-3 cursor-pointer"
          onClick={changeTypeOfForm}
        >
          Don't have an account? Sign-up.
        </span>
        <div className="mt-15">
          <button type="submit" className="w-70 h-10 bg-primary text-white font-bold font-barlowc cursor-pointer rounded-lg hover:scale-105 duration-200">
            Login
          </button>
        </div>
      </>
    );
  } else if (type === "signup") {
    return (
      <>
        {" "}
        <form action={formAction}>
        <div className="mt-10">
          <input
            className="bg-gray-200 rounded-sm w-70 h-9 p-1 text-center hover:bg-gray-200/85 focus:shadow-input duration-200"
            type="text"
            name="username"
            id=""
            placeholder="username"
          />
        </div>
        <div className="mt-2">
          <input
            className="bg-gray-200 rounded-sm w-70 h-9 p-1 text-center hover:bg-gray-200/85 focus:shadow-input duration-200"
            type="text"
            name="name"
            id=""
            placeholder="full name"
          />
        </div>
        <div className="mt-2">
          <input
            className="bg-gray-200 rounded-sm w-70 h-9 p-1 text-center hover:bg-gray-200/85 focus:shadow-input duration-200"
            type="password"
            name="password"
            id=""
            placeholder="password"
          />
        </div>
        <span
          className="text-primary underline mt-3 cursor-pointer"
          onClick={changeTypeOfForm}
        >
          Already have an account? Login!
        </span>
        <div className="mt-15">
          <button type="submit" className="w-70 h-10 bg-primary text-white font-bold font-barlowc cursor-pointer rounded-lg hover:scale-105 duration-200">
            Sign up!
          </button>
        </div>
        </form>
      </>
    );
  }
}
