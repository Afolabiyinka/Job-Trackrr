import DesktopNav from "@/modules/nav/DesktopNav";
import MobileNav from "@/modules/nav/MobileNav";
import { useIsMobile } from "@/hooks/useMobile";

const NavLayout = () => {
  const isMobile = useIsMobile();

  return (
    <header className="h-full">
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </header>
  );
};

export default NavLayout;
