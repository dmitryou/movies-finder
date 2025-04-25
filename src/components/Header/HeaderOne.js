import HeroOne from "@/components/Hero/HeroOne";
import MenuOne from "@/components/Menu/MenuOne";
import OffscreenMenu from "@/components/Menu/OffscreenMenu";
import BreadcrumbOne from "@/components/Breadcrumb/BreadcrumbOne";

export default function HeaderOne({ isHero = false, data = null }) {
  return (
    <header className="header navbar-area position-relative">
      {isHero && <HeroOne />}
      {data?.breadcrumb && BreadcrumbOne(data.breadcrumb)}
      <MenuOne />
      <OffscreenMenu />
    </header>
  );
}
