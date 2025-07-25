import signinImage from "../../../assets/auth/image.png";
import { Link, useNavigate } from "react-router-dom";
import { Form, Checkbox } from "antd";
import CustomButton from "../../../utils/CustomButton";
import CustomInput from "../../../utils/CustomInput";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { loggedUser } from "../../../redux/features/auth/authSlice";
import { GiPadlock } from "react-icons/gi";
import { MdOutlineMailOutline } from "react-icons/md";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const handleSubmit = async (values) => {
    const { email, password } = values;
    try {
      const res = await login({ email, password }).unwrap();
      if (
        (!res?.data?.user?.role === "admin") |
        (!res?.data?.user?.role === "super_admin")
      ) {
        toast.error("Only Admin Can Access This Dashboard");
        return;
      }
      dispatch(
        loggedUser({
          token: res?.data?.token,
          user: res?.data?.user,
        })
      );
      toast.success(res?.message);
      navigate("/");
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto h-full md:h-screen grid grid-cols-1 md:grid-cols-2 place-content-center px-5 py-10 gap-8 bg-white ">
      <div className="flex justify-center">
        <img
          src={signinImage}
          className="w-full md:w-[448px] h-96 md:h-[460px] mx-auto"
          alt="Sign in illustration"
        />
      </div>
      <div className="mt-16 px-8">
        <div className="mb-8">
          <h1 className="font-semibold text-3xl text-gray-800">
            Hello, Welcome!
          </h1>
          <p className="text-gray-500">
            Please Enter Your Details Below to Continue
          </p>
        </div>
        <Form
          layout="vertical"
          onFinish={handleSubmit}
          className="space-y-8"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <CustomInput
              type="email"
              icon={MdOutlineMailOutline}
              placeholder={"Enter Email"}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <CustomInput
              type="password"
              icon={GiPadlock}
              placeholder={"Enter password"}
              isPassword
            />
          </Form.Item>

          <div className="flex justify-between items-center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Link to="/auth/forget-password" className="underline">
              Forgot password?
            </Link>
          </div>

          <Form.Item>
            <CustomButton loading={isLoading} className="w-full" border={true}>
              Sign In
            </CustomButton>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
