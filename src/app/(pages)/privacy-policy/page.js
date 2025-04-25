import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import PrivacyPolicyContent from "@/components/Privacy/PrivacyPolicyContent";

export default function PrivacyPolicy() {
  const breadcrumb = {
    title: "Privacy Policy",
    links: [
      { name: "Home", href: "/" },
      { name: "Privacy Policy", href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />
      <main className="main">
        <PrivacyPolicyContent />
      </main>
      <FooterOne />
    </>
  );
}
