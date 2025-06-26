import { FakebookTitle } from "../icons";

export default function Login() {
  return (
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
            <form>
              <div className="card-body">
                <input
                  type="text"
                  placeholder="Email or Phone number"
                  className="input w-full"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="input w-full"
                />
                <button className="btn btn-primary text-xl">Login</button>
                <p className="text-center cursor-pointer opacity-70">
                  Forgotten password
                </p>
                <div className="divider my-0"></div>
                <button className="btn btn-secondary text-lg">
                  Create new Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
