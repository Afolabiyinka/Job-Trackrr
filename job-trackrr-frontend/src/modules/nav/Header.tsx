import { Search } from "lucide-react";
import CustomInput from "../main/jobs/components/create-job/input/custom-input";
const Header = () => {
  return (
    <div className="w-full p-4 flex justify-start items-center">
      <span className="w-full lg:w-1/2">
        <CustomInput
          icon={<Search />}
          placeholder="Search here..."
          type="search"
        />
      </span>
    </div>
  );
};

export default Header;
