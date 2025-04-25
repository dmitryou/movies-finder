import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import NotFoundOne from "@/components/NotFound/NotFoundOne";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <HeaderOne isHero={false} />
      <main className="main">
        <NotFoundOne />
      </main>
      <FooterOne />
    </>
  );
}
