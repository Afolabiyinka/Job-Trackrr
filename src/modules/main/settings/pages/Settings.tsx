import ChangeTheme from "../components/ChangeTheme";
import DeleteAccount from "../components/DeleteAccount";
import EditInfo from "../components/EditInfo";

const Settings = () => {
  return (
    <div className="p-2">
      <EditInfo />
      <div className="flex flex-col md:flex-row w-full  justify-center items-center  mt-3 gap-6 rounded-lg">
        <ChangeTheme />
        <DeleteAccount />
      </div>
    </div>
  );
};

export default Settings;
