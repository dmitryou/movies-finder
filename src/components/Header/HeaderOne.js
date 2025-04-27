import HeroOne from "@/components/Hero/HeroOne";
import MenuOne from "@/components/Menu/MenuOne";
import OffscreenMenu from "@/components/Menu/OffscreenMenu";

export default function HeaderOne({ isHero = false, data = null }) {
    return (
        <header className="header navbar-area position-relative">
            {isHero && <HeroOne data={data} />}
            <MenuOne data={data} />
            <OffscreenMenu />
        </header>
    );
}
