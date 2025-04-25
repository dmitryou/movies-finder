import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import PlaylistOne from "@/components/Playlist/PlaylistOne";

export default function Playlist() {
  const breadcrumb = {
    title: "Playlist",
    links: [
      { name: "Home", href: "/" },
      { name: "Playlist", href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />
      {/* <!-- Start Main --> */}
      <main className="main">
        <PlaylistOne />
      </main>
      {/* <!-- End Main --> */}

      <FooterOne />
    </>
  );
}
