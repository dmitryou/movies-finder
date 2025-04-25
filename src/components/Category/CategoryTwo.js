import { categoriesTwoData as categories } from "@/data/category";
import CategoryCardTwo from "@/components/Card/CategoryCardTwo";

export default function CategoryTwo() {
  return (
    <div className="category-two py-80">
      <h3 className="section-title text-center mb-30">Browse by category</h3>
      {categories && categories.length > 0 && (
        <div className="category-inner">
          {categories.map((category, index) => (
            <CategoryCardTwo key={index} category={category} />
          ))}
        </div>
      )}
    </div>
  );
}
