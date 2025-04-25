import artists from "@/data/artist";
import ArtistCard from "@/components/Card/ArtistCard";

export default function ArtistOne() {
  return (
    <div class="artist-area py-80">
      <div class="container">
        {artists && artists.length > 0 && (
          <div class="row justify-content-center">
            {artists.map((artist, index) => (
              <div key={index} class="col-lg-3 col-sm-6">
                <ArtistCard artist={artist} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
