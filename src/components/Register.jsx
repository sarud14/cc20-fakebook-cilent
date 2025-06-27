import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../validation/validators";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { authApi } from "../api/authApi";


export default function Register({ resetForm }) {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onBlur"
  });
  const { isSubmitting, errors } = formState;

  useEffect(() => {
    reset();
  }, [resetForm]);

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const res = await authApi.post("/register", data);
      toast.success(res.data.message)
      document.getElementById("register-form").close();
      reset();
    } catch (error) {
      const errMessage = error.response?.data?.error || error.message
      toast.error(errMessage)
      // console.log(error)
    }
  };
  return (
    <>
      <div className="text-3xl text-center opacity-70">
        Create a new account
      </div>
      <div className="divider opacity-60"></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset
          disabled={isSubmitting}
          className="flex flex-col gap-5 p-4 pt-3"
        >
          <div className="flex gap-2">
            <div className="w-full">
              <input
                type="text"
                placeholder="First name"
                className="input input-bordered w-full"
                {...register("firstName")}
              />
              <p className="text-sm text-error">{errors.firstName?.message}</p>
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Last name"
                className="input input-bordered w-full"
                {...register("lastName")}
              />
              <p className="text-sm text-error">{errors.lastName?.message}</p>
            </div>
          </div>
          <input
            type="text"
            placeholder="Email or Phone number"
            className="input input-bordered w-full"
            {...register("identity")}
          />
          {errors.identity?.message && (
            <p className="text-sm text-error mt-[-20px]">
              {errors.identity?.message}
            </p>
          )}
          <input
            type="password"
            placeholder="New password"
            className="input input-bordered w-full"
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="text-sm text-error mt-[-20px]">
              {errors.password?.message}
            </p>
          )}
          <input
            type="password"
            placeholder="Confirm password"
            className="input input-bordered w-full"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message && (
            <p className="text-sm text-error mt-[-20px]">
              {errors.confirmPassword?.message}
            </p>
          )}
          {!isSubmitting && (
            <button className="btn btn-secondary text-xl text-white">
              Sign up
            </button>
          )}
          {isSubmitting && (
            <button className="btn btn-secondary text-xl text-white">
              Sign up
              <span className="loading loading-ring loading-md"></span>
            </button>
          )}
        </fieldset>
      </form>
    </>
  );
}
