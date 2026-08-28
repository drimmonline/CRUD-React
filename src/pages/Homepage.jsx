import { Link, Outlet } from "react-router";
import { Button } from "../components/Button";
import Typewriter from "typewriter-effect";
export const Homepage = () => {
  return (
    <div className=" flex flex-col items-center  bg-gray-50 ">
      <div>
        <div className="text-center lg:text-4xl md:text-2xl  text-black font-semibold mb-8 h-10">
          <Typewriter
            options={{
              strings: ["Generation Thailand"],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 40,
            }}
          />
        </div>
        <div className="text-center text-3xl font-bold mb-8 text-black">
          Home - Admin Section
        </div>
        <div className="flex  gap-3 justify-center items-center">
          <Link to="/userhomsection">
            <Button btntext="User Home Section" />
          </Link>
          <Link to="/adminsection">
            <Button btntext="Admin Home Section" />
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
