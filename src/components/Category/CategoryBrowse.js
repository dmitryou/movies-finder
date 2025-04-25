import Link from "next/link";
import Image from "next/image";

import { browseCategories as categories } from "@/data/category";
import CategoryCard from "@/components/Card/CategoryCard";

export default function CategoryList() {
  return (
    <div className="container py-80">
      <h3 className="section-title lh-1 text-center mb-1">
        Browse by category
      </h3>
      {categories && categories.length > 0 && (
        <div className="row mt-4 row-gap-4">
          {categories.map((category, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-sm-6">
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
