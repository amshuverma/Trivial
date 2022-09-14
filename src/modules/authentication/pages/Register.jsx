import { useState } from "react";

import { EmailIcon, PaperIcon, ProtectedIcon, UserIcon } from "@/assets/icons";
import { axios } from "@/libs/axios";
import { ButtonPrimary, Input } from "@/modules/common/components";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData));
    try {
      const response = await axios.post(
        "/account/guardian/signup/",
        {
          full_name: formData.fullName,
          username: formData.username,
          email: formData.email,
          password: formData.password,
          confirm_password: formData.confirmPassword,
        },
        {
          withCredentials: true,
        }
      );
      if (response.status === 404) {
        console.log("hi");
      }
      if (response.status === 201) {
        console.log(response.data);
        localStorage.setItem("access", response.data.data.access_token);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const checkToken = async (e) => {
    const token = localStorage.getItem("access");
    console.log(token);
    const resp = await axios.get("/account/user-details/", {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(resp.data);
  };

  return (
    <div className="h-screen w-screen flex-col-center bg-white text-xl">
      <form
        onSubmit={handleSubmit}
        className=" px-20 py-10 rounded-trivial-default"
      >
        <p
          onClick={checkToken}
          className="cursor-pointer text-blue-600 hover:text-blue-500"
        >
          Hi there
        </p>
        <Input
          className="mt-2"
          icon={<PaperIcon />}
          label="Full name"
          name="fullName"
          type="text"
          placeholder="Eg: Ram Dass"
          onChange={handleChange}
          value={formData.fullName}
        />
        <Input
          className="mt-2"
          icon={<UserIcon />}
          label="Username"
          name="username"
          type="text"
          placeholder="Eg: Ramdass"
          onChange={handleChange}
          value={formData.username}
        />
        <Input
          className="mt-2"
          icon={<EmailIcon />}
          label="Email"
          name="email"
          type="text"
          placeholder="Eg: ramdass@gmail.com"
          onChange={handleChange}
          value={formData.email}
        />
        <Input
          className="mt-2"
          icon={<ProtectedIcon />}
          name="password"
          label="Password"
          type="password"
          placeholder="$ecr3tp4ssw0rd"
          onChange={handleChange}
          value={formData.password}
        />
        <Input
          className="mt-2"
          icon={<ProtectedIcon />}
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="$ecr3tp4ssw0rd"
          onChange={handleChange}
          value={formData.confirmPassword}
        />
        <ButtonPrimary
          className="mt-5"
          size="full"
          type="submit"
          text="Register"
        />
      </form>
    </div>
  );
};

export default Register;
