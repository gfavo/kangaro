import { Colors } from "@/models/colors";
import { UserFormData } from "@/models/userFormData";
import { useFormStore, useLoginStore } from "@/store/store";
import { useState, useRef, useEffect } from "react";
import { LoginMessage } from "./loginMessage";
import { Spinner } from "./spinner";
import { useRouter } from "next/router";

export const Login = () => {
  const { type, changeTypeOfForm } = useFormStore();
  const [state, setState] = useState<{ success?: string; error?: string }>({});
  const [loadingState, setLoadingState] = useState(false);
  const { setLoggedIn } = useLoginStore();
  const router = useRouter();

  const [emailValid, setEmailValid] = useState(true);

  const submitRef = useRef(null);

  const logInSession = () => {
    setLoggedIn();
    router.push('/dashboard');
  };

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitRef.current && (submitRef.current as HTMLInputElement).focus();
    setLoadingState(true);

    const formData = new FormData(event.currentTarget);
    try {
      const reqData: UserFormData = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      };

      const response = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data as string);
      }

      console.log(data);
      setState({ success: data as string });
      setLoadingState(false);
      submitRef.current && (submitRef.current as HTMLInputElement).blur();
      logInSession();
      return {
        success: data.message as string,
      };
    } catch (error) {
      setLoadingState(false);
      submitRef.current && (submitRef.current as HTMLInputElement).blur();
      setState({ error: (error as Error).message });
      return { error: (error as Error).message };
    }
  };

  return (
    <>
      {" "}
      <form onSubmit={handleSignup} className="text-center">
        <div className="mt-10">
          {!emailValid ? (
            <p className="text-sm text-red-500">Email invalid!</p>
          ) : (
            ""
          )}
          <input
            className={`bg-gray-200 rounded-sm w-70 h-9 p-1 text-center hover:bg-gray-200/85 focus:shadow-input duration-200 ${
              !emailValid ? "border-1 border-red-500" : ""
            }`}
            type="email"
            name="email"
            id=""
            placeholder="email"
            required
          />
        </div>
        <div className="mt-2 mb-3">
          <input
            className="bg-gray-200 rounded-sm w-70 h-9 p-1 text-center hover:bg-gray-200/85 focus:shadow-input duration-200"
            type="password"
            name="password"
            id=""
            placeholder="password"
            required
          />
        </div>
        <span
          className="text-primary underline mt-3 cursor-pointer text-center"
          onClick={changeTypeOfForm}
        >
          Don't have an account yet, Sign-up!
        </span>
        <div className="mt-15">
          <button
            type="submit"
            className={
              "w-70 h-10 bg-primary text-white font-bold font-barlowc cursor-pointer rounded-lg hover:scale-105 duration-200 justify-center items-center flex focus:bg-orange-200"
            }
            ref={submitRef}
          >
            {loadingState ? <Spinner /> : ""}
            Login!
          </button>
        </div>
      </form>
      {state.success ? (
        <LoginMessage message={state.success} color={Colors.success} />
      ) : (
        ""
      )}
      {state.error ? (
        <LoginMessage message={state.error} color={Colors.fail} />
      ) : (
        ""
      )}
    </>
  );
};
