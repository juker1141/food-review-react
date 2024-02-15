import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  account: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await fetch("http://localhost:6300/user/signin", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());
      console.log(res);
    } catch (err: any) {
      console.log(err);
    }
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <a href="/" className="flex justify-center items-center mb-12">
        <img
          className="w-10 h-10 rounded"
          src={`${process.env.PUBLIC_URL}/images/foodpanda.png`}
          alt="logo192.png"
        />
        <h1 className="text-2xl font-semibold px-2 text-primary">
          Food Review
        </h1>
      </a>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center"
      >
        <div className="mb-4 flex flex-col">
          <input
            placeholder="帳號"
            className={`rounded-full border border-gray-300 py-2 px-4 text-base focus:outline-blue-300 ${
              errors.account ? "mb-1 border-red-500" : "border-gray-300"
            }`}
            {...register("account", { required: true })}
          />
          {errors.account && (
            <span className="text-xs text-red-500 px-4">帳號為必填</span>
          )}
        </div>

        <div className="mb-2 flex flex-col">
          <input
            placeholder="密碼"
            className={`rounded-full border py-2 px-4 text-base focus:outline-blue-300 ${
              errors.password ? "mb-1 border-red-500" : "border-gray-300"
            }`}
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-xs text-red-500 px-4">密碼為必填</span>
          )}
        </div>
        <div className="w-full flex justify-end mb-2">
          <a
            href="/"
            className="mx-4 text-xs text-gray-400 hover:text-primary hover:underline hover:decoration-primary hover:underline-offset-2"
          >
            忘記密碼
          </a>
        </div>

        <button
          className="bg-primary text-white w-full rounded-full text-base font-bold py-2 mt-8 mb-4"
          type="submit"
        >
          登入
        </button>
        <span className="px-4 text-xs text-gray-400">
          還不是會員？
          <a
            href="/"
            className="text-primary hover:underline hover:decoration-primary hover:underline-offset-2"
          >
            註冊
          </a>
        </span>
      </form>
    </div>
  );
};

export default Login;
