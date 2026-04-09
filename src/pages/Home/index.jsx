import { Link } from "react-router";
import { Button } from "../../components";
import { Heading } from "../../components/Heading";

export function Home() {
  const headingContent = "Welcome to PopX";
  return (
    <div className="flex w-full h-full p-5">
      <div className="mt-auto gap-[29px] flex flex-col">
        <div>
          <Heading content={headingContent} />
          <p className="text-primary opacity-60 text-[18px] leading-6.5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        <div>
          <Link to="/signup">
            <Button
              diabled={false}
              btnName="Create Account"
              category="primary"
            />
          </Link>
          <Link to="/login">
            <Button
              diabled={false}
              btnName="Already Registered? Login"
              category="secondary"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
