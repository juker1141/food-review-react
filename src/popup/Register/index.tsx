import { useForm, SubmitHandler } from "react-hook-form";
import type { PageContent } from "../App/App";

type Inputs = {
  account: string;
  password: string;
};

const Register = ({
  setPageContent,
}: {
  setPageContent: React.Dispatch<React.SetStateAction<PageContent>>;
}) => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>帳號</label>
        <input className="mb-4" {...register("account", { required: true })} />
        {errors.account && <span>帳號為必填</span>}

        <label>密碼</label>
        <input {...register("password", { required: true })} />
        {errors.password && <span>密碼為必填</span>}

        <button type="submit">登入</button>
      </form>
    </div>
  );
};

export default Register;
