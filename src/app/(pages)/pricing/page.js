import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import PricingTwo from "@/components/Price/PriceingTwo";

export default function Playlist() {
  const breadcrumb = {
    title: "Pricing",
    links: [
      { name: "Home", href: "/" },
      { name: "Pricing", href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />
      {/* <!-- Start Main --> */}
      <main className="main">
        <PricingTwo />
      </main>

      <FooterOne />
    </>
  );
}
