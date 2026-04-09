import { useNavigate } from "react-router";
import { Button, Heading, Input } from "../../components";

export function Signup() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
  };
  return (
    <div className="w-full h-full px-5 flex flex-col">
      <Heading
        className="mt-10 leading-9 w-[198px]"
        content="Create your PopX Account"
      />

      <form
        onSubmit={handleSubmit}
        className="mt-8 flex-1 flex flex-col justify-between"
      >
        <div className="flex flex-col gap-7 ">
          <Input
            type="text"
            label="Full Name*"
            placeholder="Enter full name"
            required={true}
          />
          <Input
            type="number"
            label="Phone Number*"
            placeholder="Enter phone number"
            required={true}
          />
          <Input
            type="email"
            label="Email address*"
            placeholder="Enter email address"
            required={true}
          />
          <Input
            type="password"
            label="Password*"
            placeholder="Enter password"
            required={true}
          />
          <Input
            type="text"
            label="Company name*"
            placeholder="Enter company name"
            required={true}
          />
          <div>
            <p>Are you an agency?*</p>
            <div className="flex gap-8 px-1">
              <label htmlFor="radio-yes" className="flex items-center gap-2">
                <input
                  className="scale-150"
                  type="radio"
                  name="agency"
                  id="radio-yes"
                />
                Yes
              </label>
              <label htmlFor="radio-no">
                <input
                  className="scale-150"
                  type="radio"
                  name="agency"
                  id="radio-no"
                />{" "}
                No
              </label>
            </div>
          </div>
        </div>

        <Button
          type="submit"
          btnName="Create Account"
          category="primary"
          disabled={false}
          className="mb-6"
        />
      </form>
    </div>
  );
}
