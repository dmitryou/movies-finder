import HeroTwo from "@/components/Hero/HeroTwo";
import MenuTwoPrimary from "@/components/Menu/MenuTwoPrimary";
import MenuTwoSecondary from "@/components/Menu/MenuTwoSecondary";
import ScrollButtonOne from "@/components/Scroll/ScrollButtonOne";

export default function HeaderTwo() {
  return (
    <header className="header navbar-area position-relative">
      <HeroTwo />
      <MenuTwoPrimary />
      <MenuTwoSecondary />
      <ScrollButtonOne />
    </header>
  );
}
