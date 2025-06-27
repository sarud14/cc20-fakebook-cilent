import { useState } from "react";
import Register from "../components/Register";
import { FakebookTitle } from "../icons";
import { loginSchema } from "../validation/validators";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import useUserStore from "../stores/userStores";
import { toast } from "react-toastify";

export default function Login() {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const { isSubmitting, errors } = formState;

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const result = await login(data);
      // toast.success(result.data.message);
      // localStorage.setItem("firstName", JSON.stringify(result.data.user))
    } catch (error) {
      const errMessage = error.response?.data?.error || error.message;
      toast(errMessage);
    }
  };

  const [resetForm, setResetForm] = useState(false);
  const login = useUserStore((state) => state.login);
  

  const hdlClose = () => {
    setResetForm((prv) => !prv);
  };
  return (
    <>
      <div className="h-[700px] pt-20 pb-28">
        <div className="p-5 mx-auto max-w-screen-lg min-h-[540px] flex justify-between max-md:flex-col">
          <div className="flex flex-col max-md:items-center max-md:text-center gap-4 mt-20 basis-3/5 ">
            <div className="text-xl">
              <FakebookTitle />
              
            </div>
            <h2 className="text-[30px] max-md:text-[28px] leading-8 mt-3 w-[514px]">
              Fakebook helps you connect and share with people in your life.
            </h2>
          </div>
          <div className="flex-1 ">
            <div className="card w-full h-[350px] shadow-xl mt-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset disabled={isSubmitting}>
                  <div className="card-body">
                    <input
                      type="text"
                      placeholder="Email or Phone number"
                      className="input w-full"
                      {...register("identity")}
                    />
                    {errors.identity?.message && (
                      <p className="text-sm text-error mt-[-10px]">
                        {errors.identity?.message}
                      </p>
                    )}
                    <input
                      type="password"
                      placeholder="Password"
                      className="input w-full"
                      {...register("password")}
                    />
                    {errors.password?.message && (
                      <p className="text-sm text-error mt-[-10px]">
                        {errors.password?.message}
                      </p>
                    )}
                    {!isSubmitting && (
                      <button className="btn btn-primary text-xl">Login</button>
                    )}
                    {isSubmitting && (
                      <button className="btn btn-primary text-xl">
                        Login
                        <span className="loading loading-ring loading-md"></span>
                      </button>
                    )}

                    <p className="text-center cursor-pointer opacity-70">
                      Forgotten password
                    </p>
                    <div className="divider my-0"></div>
                    <button
                      type="button"
                      className="btn btn-secondary text-lg"
                      onClick={() =>
                        document.getElementById("register-form").showModal()
                      }
                    >
                      Create new Account
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
      <dialog id="register-form" className="modal" onClose={hdlClose}>
        <div className="modal-box">
          <Register resetForm={resetForm} />
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
