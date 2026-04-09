import { useState } from "react";
import { Button, Heading, Input } from "../../components";
import { useNavigate } from "react-router";

export function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const disabled = !email || !password;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <div className="h-full w-full px-5 mt-10">
      <Heading
        className="w-[188px] leading-[36px]"
        content="Signin to your PopX account"
      />
      <p className="opacity-60 w-[232px] text-[18px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-[33px] flex flex-col gap-[23px]"
      >
        <Input
          label="Email"
          placeholder="Enter email address"
          onChange={(e) => setemail(e.target.value)}
          value={email}
        />
        <Input
          label="Password"
          placeholder="Enter password"
          onChange={(e) => setpassword(e.target.value)}
          value={password}
        />
        <Button
          btnName="Login"
          category="primary"
          type="submit"
          disabled={disabled}
        />
      </form>
    </div>
  );
}
