import { useFormStore } from "@/store/store";
import { Ref, useRef, useState } from "react";
import { UserFormData } from "@/models/userFormData";
import { LoginMessage } from "./loginMessage";
import { Colors } from "@/models/colors";
import * as EmailValidator from 'email-validator';
import { Spinner } from "./spinner";

export const Signup = () => {
  const { type, changeTypeOfForm } = useFormStore();
  const [state, setState] = useState<{ success?: string; error?: string }>({});
  const [loadingState, setLoadingState] = useState(false);

  const [emailValid, setEmailValid] = useState(true);

  const submitRef = useRef(null);

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoadingState(true);

    const formData = new FormData(event.currentTarget);
    try {
      const reqData: UserFormData = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      };

      const response = await fetch("http://localhost:5000/api/user", {
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

  const validateField = (event: React.FormEvent<HTMLInputElement>) => {
    const currentField = event.currentTarget.name;
    if(currentField == 'email'){
      console.log(event.currentTarget.value)
     setEmailValid(EmailValidator.validate(event.currentTarget.value)); 
     console.log(' - ' + emailValid);
    }
  };

    return (
      <>
        {" "}
        <form onSubmit={handleSignup} className="text-center">
          <div className="mt-10">
          {!emailValid ? <p className="text-sm text-red-500">Email invalid!</p> : ''}
            <input
              className={`bg-gray-200 rounded-sm w-70 h-9 p-1 text-center hover:bg-gray-200/85 focus:shadow-input duration-200 ${!emailValid ? "border-1 border-red-500" : "border-1 border-green-500"}`}
              type="email"
              name="email"
              id=""
              placeholder="email"
              onChange={(event) => {
                validateField(event);
              }}
              required
            />

          </div>
          <div className="mt-2">
            <input
              className="bg-gray-200 rounded-sm w-70 h-9 p-1 text-center hover:bg-gray-200/85 focus:shadow-input duration-200"
              type="text"
              name="name"
              id=""
              placeholder="full name"
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
            Already have an account? Login!
          </span>
          <div className="mt-15">
            <button
              type="submit"
              className={"w-70 h-10 bg-primary text-white font-bold font-barlowc cursor-pointer rounded-lg hover:scale-105 duration-200 justify-center items-center flex focus:bg-orange-200"}
              ref={submitRef}
            >
           {loadingState ? <Spinner /> : ""}
              Sign up!
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
  }

