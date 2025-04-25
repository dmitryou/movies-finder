import Register from "@/components/Auth/Register";
import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";

export default function RegisterPage() {
  const breadcrumb = {
    title: "My Account",
    links: [
      { name: "Home", href: "/" },
      { name: "Register", href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />
      <main class="main">
        <Register />
      </main>

      <FooterOne />
    </>
  );
}
