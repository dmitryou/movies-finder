import ArtistOne from "@/components/Artist/ArtistOne";
import Login from "@/components/Auth/Login";
import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";

export default function ArtistPage() {
  const breadcrumb = {
    title: "Creative Artist",
    links: [
      { name: "Home", href: "/" },
      { name: "Artist", href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />
      <main class="main">
        <ArtistOne />
      </main>

      <FooterOne />
    </>
  );
}
