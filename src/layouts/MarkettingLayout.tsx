import Home from "@/modules/marketing/pages/Home";
import NavLayout from "@/modules/marketing/pages/NavLayout";

const MarkettingLayout = () => {
  return (
    <div className="p-2 h-full w-full">
      <NavLayout />
      <Home />
    </div>
  );
};

export default MarkettingLayout;
