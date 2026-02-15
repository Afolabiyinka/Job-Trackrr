import DesktopNav from "@/modules/nav/DesktopNav";
import { useIsMobile } from "@/hooks/useMobile";
import MobileNav from "@/modules/nav/MobileNav";
const NavLayout = () => {
  const isMobile = useIsMobile();
  return (
    <header className="h-full">
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </header>
  );
};

export default NavLayout;
