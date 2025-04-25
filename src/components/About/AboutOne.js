import Image from "next/image";
import data from "@/data/about";

export default function AboutOne() {
  return (
    <div className="about-us container py-80">
      <div className="row justify-content-center">
        <div className="col-lg-7 text-center">
          <h3 className="section-title large mb-1 lh-1">{data.title}</h3>
          <p className="mb-5">{data.descriptionOne}</p>
          <h3 className="section-title small mb-1 lh-1">{data.subTitle}</h3>
          <p>{data.descriptionTwo}</p>
        </div>
        <div className="thumb mt-5">
          <Image src={data.image} alt="thumb" />
        </div>
      </div>
    </div>
  );
}
