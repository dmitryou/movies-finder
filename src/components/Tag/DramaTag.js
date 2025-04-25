import tags from "@/data/tag";
import TagCard from "@/components/Card/TagCard";

export default function DramaTag() {
  return (
    <div class="artist-area py-80">
      <div class="container">
        <h3 class="section-title lh-1 text-sm-start text-center mb-4">
          Drama tags
        </h3>
        {tags && (
          <div class="row">
            {tags.map((tag, index) => (
              <div key={index} class="col-xl-3 col-lg-4 col-sm-6">
                <TagCard {...tag} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
