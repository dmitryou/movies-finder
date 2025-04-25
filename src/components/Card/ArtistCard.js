import Image from "next/image";

export default function ArtistCard({ artist }) {
  return (
    <div class="artist-single-card">
      <div class="thumb">
        <Image src={artist.image} alt="img" />
      </div>
      <div class="details">
        <h4 class="name">{artist.name}</h4>
        <span>{artist.designation}</span>
      </div>
    </div>
  );
}
