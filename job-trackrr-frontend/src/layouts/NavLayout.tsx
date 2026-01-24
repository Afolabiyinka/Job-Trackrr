import DesktopNav from "@/modules/nav/DesktopNav";
import { useIsMobile } from "@/hooks/useMobile";
import MobileNav from "@/modules/nav/MobileNav";
const NavLayout = () => {
  const isMobile = useIsMobile(1024);
  return (
    <div className="h-full">
      <DesktopNav />

      {isMobile && <MobileNav />}
    </div>
  );
};

export default NavLayout;
