import DesktopNav from "@/modules/main/nav/DesktopNav";
import { useIsMobile } from "@/shared/hooks/useMobile";
import MobileNav from "@/modules/main/nav/MobileNav";
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
