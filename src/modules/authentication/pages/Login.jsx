import { useState } from "react";

import { axios } from "@/libs/axios";

import { ProtectedIcon, UserIcon } from "@/assets/icons";
import { ButtonPrimary, Input } from "@/modules/common/components";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
      const response = await axios.post("/account/guardian/signup/", formData);
      if (response.status === 404) {
        console.log("hi");
      }
    } catch (err) {
      console.log("hi");
    }
  };

  return (
    <div className="h-screen w-screen flex-col-center bg-trivial-yellow-1 text-xl">
      <form
        onSubmit={handleSubmit}
        className=" px-20 py-10 rounded-trivial-default"
      >
        <Input
          className="mt-2"
          icon={<UserIcon />}
          label="Username"
          name="username"
          type="text"
          placeholder="Eg: Ram Dass"
          onChange={handleChange}
          value={formData.username}
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
        <ButtonPrimary
          className="mt-5"
          size="full"
          type="submit"
          text="Login"
        />
      </form>
    </div>
  );
};

export default Login;
