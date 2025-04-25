import TagCard from "@/components/Card/TagCard";

import { tvShowTagsData as tags } from "@/data/tag";

export default function TvShowTag() {
  return (
    <div class="artist-area pb-70">
      <div class="container">
        <h3 class="section-title lh-1 text-sm-start text-center mb-4">
          TV - Show tags
        </h3>
        {tags && (
          <div class="row justify-content-center">
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
