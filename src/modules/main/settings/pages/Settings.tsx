import ChangeTheme from "../components/ChangeTheme";
import DeleteAccount from "../components/DeleteAccount";
import EditInfo from "../components/EditInfo";

const Settings = () => {
  return (
    <div className="p-2">
      <EditInfo />
      <div className="flex w-full border justify-center items-center p-3 mt-3 gap-6 rounded-lg">
        <ChangeTheme />
        <DeleteAccount />
      </div>
    </div>
  );
};

export default Settings;
