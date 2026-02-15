import { useIsMobile } from "@/hooks/useMobile";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";
const NavLayout = () => {
  const isMobile = useIsMobile(1024);
  return (
    <div className="h-full">
      <NavBar />

      {isMobile && <MobileNav />}
    </div>
  );
};

export default NavLayout;
