import FaqOne from "@/components/Faq/FaqOne";
import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";

export default function Faq() {
  const breadcrumb = {
    title: "FAQ",
    links: [
      { name: "Home", href: "/" },
      { name: "FAQ", href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />
      <main className="main">
        <FaqOne />
      </main>
      <FooterOne />
    </>
  );
}
