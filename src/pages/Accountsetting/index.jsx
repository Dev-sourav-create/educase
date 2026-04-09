import userProfile from "../../assets/profile-avatar.png";
import cameraIcon from "../../assets/camera.png";
export function Accountsetting() {
  return (
    <div>
      <div className="h-[68px] bg-white flex flex-col px-5 text-primary pl-3.5 justify-center">
        {/* Header */}

        <h1 className="text-lg">Account Settings</h1>
      </div>
      {/* user card  */}
      <div className="flex flex-col gap-7  pl-5 pb-5 border-b-2 border-dashed border-gray-300 mt-7 ">
        <div className="flex gap-4">
          <span className="relative">
            <img className="w-19 h-19" src={userProfile} alt="profile-image" />
            <img
              src={cameraIcon}
              className="w-[21px] h-[21px] absolute left-15 bottom-2"
              alt="camera-icon"
            />
          </span>
          <span>
            <p className="font-medium text-[15px]">Maary Doe</p>
            <p className=" text-[14px]">Marry@gmail.com</p>
          </span>
        </div>
        <p className="text-[14px] ">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
}
