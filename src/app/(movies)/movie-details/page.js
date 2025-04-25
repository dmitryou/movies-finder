import Link from "next/link";

import FooterOne from "@/components/Footer/FooterOne";
import HeaderThree from "@/components/Header/HeaderThree";
import MovieDetail from "@/components/Movie/MovieDetail";
import MovieCasting from "@/components/Movie/MovieCasting";
import OurOriginalThree from "@/components/OurOriginal/OurOriginalThree";

export default function MovieDetails() {
  return (
    <>
      <HeaderThree />
      <main className="main">
        <MovieDetail />
        <MovieCasting />
        <OurOriginalThree />
      </main>

      <FooterOne />
    </>
  );
}
