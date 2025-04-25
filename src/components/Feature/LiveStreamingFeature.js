import { liveStreamingFeatureData as data } from "@/data/feature";
import LiveStreamingFeatureCard from "@/components/Card/LiveStreamingFeatureCard";

export default function LiveStreamingFeature() {
  return (
    <div
      className="live-stream py-80 mt-80"
      style={{
        backgroundImage: "url('assets/images/background/feathur-bg.webp')",
      }}
    >
      <div className="container">
        <div className="row justify-content-center mb-35">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <h3 className="section-title text-center mb-0">{data.title}</h3>
          </div>
        </div>
        {/* <!-- Feathurs --> */}
        {data.features && data.features.length > 0 && (
          <div className="row row-gap-4">
            {data.features.map((feature, index) => (
              <div key={index} className="col-sm-6 col-xl-3">
                <LiveStreamingFeatureCard feature={feature} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
