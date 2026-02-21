import ChangeTheme from "../components/ChangeTheme";
import DeleteAccount from "../components/DeleteAccount";
import EditInfo from "../components/EditInfo";

const Settings = () => {
  return (
    <div className="p-2">
      <EditInfo />
      <ChangeTheme />
      <DeleteAccount />
    </div>
  );
};

export default Settings;
