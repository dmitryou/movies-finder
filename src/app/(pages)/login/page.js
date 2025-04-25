import Login from "@/components/Auth/Login";
import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";

export default function LoginPage() {
  const breadcrumb = {
    title: "My Account",
    links: [
      { name: "Home", href: "/" },
      { name: "Log In", href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />
      <main class="main">
        <Login />
      </main>

      <FooterOne />
    </>
  );
}
