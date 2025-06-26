import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../validation/validators";
import { useEffect } from "react";

export default function Register({ resetForm }) {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const { isSubmitting, errors } = formState;

  useEffect(()=> {
    reset()
  },[resetForm])

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
    document.getElementById("register-modal").close();
    reset();
  };
  return (
    <>
      <div className="text-3xl text-center opacity-70">
        Create a new account
      </div>
      <div className="divider opacity-60"></div>
      <form
        onSubmit={handleSubmit(onSubmit)}
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
        {errors.identity && (
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
        {errors.password && (
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
        {errors.confirmPassword && (
          <p className="text-sm text-error mt-[-20px]">
            {errors.confirmPassword?.message}
          </p>
        )}
        <button className="btn btn-secondary text-xl text-white">
          Sign up
        </button>
      </form>
    </>
  );
}
